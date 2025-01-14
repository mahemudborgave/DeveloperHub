const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');
const BusinessAuthentication = require("../../Middleware/businessAuthentication");
const BusinessProfile = require("../../Models/BusinessProfile");
const {check, validationResult} = require('express-validator');
const Business = require("../../Models/Business");



//@Route  GET api/businessprofile/me
//@desc   Business Profile Page
//@access Private

router.get('/me',BusinessAuthentication, async (req,res) => {
    try{
        const businessprofile = await BusinessProfile.findOne({business: req.business.id})
        .populate('business',['Location','CompanyDescription']);

        if(!businessprofile){
            return res.status(400).json({msg:'No profile found for this business'});
        }

        res.json(businessprofile);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//@Route  POST api/businessprofile
//@desc   Create Business  profile
//@access Private


router.post('/',BusinessAuthentication,[
    check('website', 'Please enter the link for companys website').not().isEmpty(),
    check('status', 'Please update the current status of the company').not().isEmpty(),
    check('established', 'Please enter the year in which the company was established').not().isEmpty(),
    check('clients', 'Please enter your top clients').not().isEmpty(),
    check('companycategory', 'select the category to which your company belongs').not().isEmpty(),
],async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const{
        website,
        status,
        established,
        clients,
        companycategory,
        employeecount
            } = req.body


    const businessprofilefields = {};
    businessprofilefields.business = req.business.id;
    if(established) businessprofilefields.established = established;
    if(website) businessprofilefields.website = website;
    if(status) businessprofilefields.status = status;
    if(companycategory) businessprofilefields.companycategory = companycategory;
    if(employeecount) businessprofilefields.employeecount = employeecount;
    if(clients){
        businessprofilefields.clients = clients.split(',').map(clients => clients.trim());
    }
    console.log(businessprofilefields.clients )
    try{
        let businessprofile = await BusinessProfile.findOne({business:req.business.id});

        if(businessprofile){
            //update the profile if found
            businessprofile = await BusinessProfile.findOneAndUpdate({business:req.business.id},
                {$set: businessprofilefields},
                {new:true}
                );

                return res.json(businessprofile);
        }

        //create the profile
        businessprofile = new BusinessProfile(businessprofilefields);
        await businessprofile.save();
        res.json(businessprofile);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

})

//@Route  GET api/businessprofile
//@desc   GET all businessprofile profile
//@access Public

router.get('/', async(req,res)=>{
    try{
        const businessprofiles = await BusinessProfile.find().populate('business',['Location','CompanyDescription']);
        res.json(businessprofiles);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@Route  GET api/businessprofile/business/:business_id
//@desc   GET Business profile by userID
//@access Public


router.get('/business/:business_id', async(req,res)=>{
    try{
        const businessprofile = await BusinessProfile.findOne({business: req.params.business_id})
        .populate('business',['Location','CompanyDescription']);


        if(!businessprofile){
            return res.status(400).json({msg:'There is no profile for this Business'});
        }

        res.json(businessprofile)
    }
    catch(err)
    {
        console.error(err.message);
        //if(err.kind="objectId"){
          //  return res.status(400).json({msg:'There is no profile for this freelancer'})
        }
        res.status(500).send('Server Error');
})

//@Route  DELETE api/businessprofile
//@desc   Delete Profile of business
//@access Private

//remember to create an auth for admin and use it as the parameter to the delete. for now using business token
router.delete('/', BusinessAuthentication,async(req,res)=>{
    try{
        //remove business profile
         await BusinessProfile.findOneAndRemove({business: req.business.id});
        //remove business for the application
        await Business.findOneAndRemove({_id: req.business.id})
        res.json({msg:'Business account is deleted!'});
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})





module.exports = router;