const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

//Getting the mongoose model for Business registration
const Business = require('../../Models/Business')
//@Route  POST api/business
//@desc   Register Business
//@access Public

router.post('/',[
    check('CompanyName', 'Company Name is required')
    .not()
    .isEmpty(),
    check('ContactName', 'Contact Name is required')
    .not()
    .isEmpty(),
    check('ContactEmail', 'Please include a valid email').isEmail(),
    check('Password', 'Password Should Contain more than 6 characters').isLength({min: 6}),
    check('Location', 'Please enter your country of location').not().isEmpty(),
    check('CompanyDescription', 'Please provide a short description of the Company').not().isEmpty()
],  
 async(req,res) => {
    //We can send data and acess the data using the req.body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {CompanyName,
            ContactName,
            ContactEmail,
            Password,
            Location,
            CompanyDescription
            } = req.body;

    try{
        //checking if user exists
        let business = await Business.findOne({ContactEmail});
        if (business){
            res.status(400).json({errors:[{msg:'User already exists'}] });
        }

        business = new Business({
            CompanyName,
            ContactName,
            ContactEmail,
            Password,
            Location,
            CompanyDescription
        });

        //encrypting the password

        const salt = await bcrypt.genSalt(10);

        business.Password = await bcrypt.hash(Password,salt);

        await business.save()

         const load ={
            business:{
                id : business.id
            }
        }

        //JWT sign  
            jwt.sign(load, config.get('jwtsecretbusiness'), {expiresIn: 560000},
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