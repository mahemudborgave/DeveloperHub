const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config');
const gravatar = require('gravatar');

//Getting the mongoose model for Freelancer registration
const User = require('../../Models/User')

//@Route  POST api/users
//@desc   Register Freelancer
//@access Public
router.post('/',[
    check('FirstName', 'First Name is required')
    .not()
    .isEmpty(),
    check('LastName', 'Last Name is required')
    .not()
    .isEmpty(),
    check('UserName', 'User Name is required')
    .not()
    .isEmpty(),
    check('Email', 'Please include a valid email').isEmail(),
    check('Password', 'Password Should Contain more than 6 characters').isLength({min: 6}),
     check('Linkdeln', 'Please include your linkdeln profile link').not().isEmpty(),
    check('Location', 'Please enter your country of location').not().isEmpty(),
    check('Age', 'Please include your age').not().isEmpty(),
    check('Description', 'Please provide a short description of yourself').not().isEmpty()
],
 async(req,res) => {    
    //We can send data and acess the data using the req.body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
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
            Description,
            icon} = req.body;
  
    try{
        //checking if user exists
        let user = await User.findOne({Email});
        if (user){
            res.status(400).json({errors:[{msg:'email already exists'}] });
        }

        let username = await User.findOne({UserName})
        if (username){
            res.status(400).json({errors:[{msg:'User name already exists'}] });
        }

        const icon = gravatar.url(Email, {
            s: '200',
            r:'pg',
            d: 'mm'
        })
       
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
            icon
        });

        //encrypting the password

        const salt = await bcrypt.genSalt(10);

        user.Password = await bcrypt.hash(Password,salt);

        //saving the user to the database
        await user.save()
        
        const load ={
            user:{
                id : user.id
            }
        }

        //JWT sign
            jwt.sign(load, config.get('jwtsecret'), {expiresIn: 560000},
            (err, token) => {
                if(err) throw (err);
            //sending the token which is received back.
                res.json({token});
            });

    }catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;