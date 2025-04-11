const express = require('express');
const router = express.Router();
const Authentication = require('../../Middleware/Authentication');
const businessAuthentication = require('../../Middleware/businessAuthentication')
const User = require('../../Models/User');
const Business = require('../../Models/Business');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs')


//@Route  GET api/auth/freelancer
//@desc   Authentication Route for freelancers
//@access Private

router.get('/freelancer', Authentication, async(req,res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.send(user);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@Route  GET api/auth/business
//@desc   Authentication Route for freelancers
//@access Private

router.get('/business', businessAuthentication, async(req,res) => {
    try{
        const business = await Business.findById(req.business.id).select('-password');
        res.send(business);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@Route  POST api/auth/freelancer
//@desc   Login Freelancer and get token
//@access Public
router.post('/freelancer',[
    check('Email', 'Please include a valid email').isEmail(),
    check('Password', 'Incorrect password').exists()
],
 async(req,res) => {
    //We can send data and acess the data using the req.body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {
            Email,
            Password} = req.body;

    try{
        //checking if user exists
        let user = await User.findOne({Email});
        if (!user){
            res
            .status(400)
            .json({errors:[{msg:'Invalid Credentials'}] });
        }
        
        const match = await bcrypt.compare(Password, user.Password);

        if (!match){
            res
            .status(400)
            .json({errors:[{msg:'Invalid Credentials'}] });
        }
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

//@Route  POST api/auth/business
//@desc   Login Business and get token
//@access Public
router.post('/business',[
    check('ContactEmail', 'Please include a valid email').isEmail(),
    check('Password', 'Missing Password!').exists()
],
 async(req,res) => {
    //We can send data and acess the data using the req.body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {
        ContactEmail,
            Password} = req.body;

    try{
        //checking if user exists
        let business = await Business.findOne({ContactEmail});
        if (!business){
            res
            .status(400)
            .json({errors:[{msg:'Invalid Credentials'}] });
        }
        
        const match = await bcrypt.compare(Password, business.Password);

        if (!match){
            res
            .status(400)
            .json({errors:[{msg:'Invalid Credentials'}] });
        }
            const load ={
            business:{
                id : business.id
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