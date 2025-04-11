const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const gravatar = require('gravatar');

// Getting the mongoose model for Freelancer registration
const User = require('../../Models/User');

// @Route  POST api/users
// @desc   Register Freelancer
// @access Public
router.post('/', [
    check('FirstName', 'First Name is required').not().isEmpty(),
    check('LastName', 'Last Name is required').not().isEmpty(),
    check('UserName', 'User Name is required').not().isEmpty(),
    check('Email', 'Please include a valid email').isEmail(),
    check('Password', 'Password should contain more than 6 characters').isLength({ min: 6 }),
    check('Linkdeln', 'Please include your LinkedIn profile link').not().isEmpty(),
    check('Location', 'Please enter your country of location').not().isEmpty(),
    check('Age', 'Please include your age').not().isEmpty(),
    check('Description', 'Please provide a short description of yourself').not().isEmpty()
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        UserName,
        FirstName,
        LastName,
        Email,
        Password,
        Linkdeln,
        Location,
        Age,
        Description
    } = req.body;

    try {
        // Check if email already exists
        let user = await User.findOne({ Email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
        }

        // Check if username already exists
        let username = await User.findOne({ UserName });
        if (username) {
            return res.status(400).json({ errors: [{ msg: 'User name already exists' }] });
        }

        // Generate gravatar icon
        const avatar = gravatar.url(Email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        // Create new user
        user = new User({
            UserName,
            FirstName,
            LastName,
            Email,
            Password,
            Linkdeln,
            Location,
            Age,
            Description,
            icon: avatar
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.Password = await bcrypt.hash(Password, salt);

        // Save user
        await user.save();

        // JWT payload
        const load = {
            user: {
                id: user.id
            }
        };

        // Sign and return token
        jwt.sign(
            load,
            config.get('jwtsecret'),
            { expiresIn: 560000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
