const express = require('express');
const router = express.Router();
const businessauthentication = require('../../Middleware/businessAuthentication')
const User = require('../../Models/User');
const Business = require('../../Models/Business');
const Job = require('../../Models/Job')
const {check, validationResult} = require('express-validator');
const FreelancerAuthentication = require("../../Middleware/Authentication");
const FreelancerProfile = require("../../Models/FreelancerProfile");


//@Route  POST api/Job
//@desc   Create Jobs for posting
//@access Private

router.post('/',businessauthentication,[
    check('jobtitle', 'Give a name for your project')
    .not()
    .isEmpty(),
    check('jobdescription', 'provide a detailed description of your requirements')
    .not()
    .isEmpty(),
    check('skillsetreq', 'Please enter the expected skill set').not()
    .isEmpty(),
    check('jobbudget', 'Enter the maximum budget you would like to spend on the project').not().isEmpty(),
    check('jobduration', 'Enter the duration of the job (in Months)').not().isEmpty(),
],  
 async(req,res) => {
    //We can send data and acess the data using the req.body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {
        jobtitle,
        jobdescription,
        skillsetreq,
        jobbudget,
        jobduration
    } = req.body;

    try{
        let business = await Business.findById(req.business.id).select('-Password');

        const newJob = new Job({
            business:req.business.id,
            jobtitle,
            jobdescription,
            skillsetreq,    
            jobbudget,
            jobduration,
            CompanyName: business.CompanyName,
            Location: business.Location
        })

        newJob.skillsetreq = skillsetreq.split(',').map(skills => skills.trim())

        const job = await newJob.save();
        res.json(job);
        console.log(job);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

})

//@Route  GET api/Job
//@desc   GET all Jobs
//@access Private

//Removing Authentication for all job routes

router.get('/' ,businessauthentication,async(req,res)=>{
    try{
        const jobs = await Job.find().sort({date: -1}).populate('business',['Location','CompanyDescription','ContactEmail', 'ContactName'
        , 'CompanyName']);
        res.json(jobs);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@Route  GET api/Job/:id
//@desc   GET jobs by id
//@access Private


router.get('/:id',businessauthentication, async(req,res)=>{
    try{
        const job = await Job.findById(req.params.id);

        if(!job){
            return res.status(404).json({msg: 'Job  not found'});
        }
        res.json(job);
    }
    catch(err)
    {
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(404).json({msg: 'Job  not found'});
                }
        res.status(500).send('Server Error');
    }
})

//@Route  DELETE api/job/:id
//@desc   Delete Job
//@access Private

//Creating route for Business to delete the Job

router.delete('/:id', businessauthentication, async(req,res)=>{
    try{

        const job = await Job.findById(req.params.id);

        if(!job){
            return res.status(404).json({msg: 'Job  not found'});
                }
        
        if(job.business.toString() !== req.business.id){
            return res.status(401).json({msg: 'Business not Authorized'});
        }

        await job.remove();

        res.json({msg:'Post removed successfully'})
        
    }
    catch(err)
    {
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(404).json({msg: 'Job  not found'});
                }
        res.status(500).send('Server Error');
    }
})
module.exports = router;


//@Route  Put api/job/interested/:id
//@desc   Show interest in the job
//@access Public

router.put('/interested/:id',FreelancerAuthentication, async(req,res)=>{
    try{

        const job = await Job.findById(req.params.id);
        const user = await User.findById(req.user.id);
    
    
        //check if the freelancer has already showed interest in the job
        console.log(req.user.id);

        if( 
            job.interested.filter(interest => interest.user.toString() === req.user.id).length > 0
        ){
            return res.status(400).json({msg:'Already expressed interest in the job'});
        }   

      const newInterested = {
          user: req.user.id,
          FirstName: user.FirstName,
          Email: user.Email,
          Linkdeln: user.Linkdeln,
          Location: user.Location,
          Description: user.Description,
      };

        job.interested.unshift(newInterested);

        await job.save();

        res.json(job.interested);
    }

    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

})

//@Route  Put api/job/uninterested/:id
//@desc   Remove interest in the job
//@access Private

router.put('/uninterested/:id', FreelancerAuthentication, async(req,res)=>{
    try{

        const job = await Job.findById(req.params.id);

        //check if the freelancer has already showed interest in the job

        if(
            job.interested.filter(interest => interest.user.toString()=== req.user.id).length === 0
        ){
            return res.status(400).json({msg:'You have not showed your interest in the job'});
        }

        //getting the index to remove the interest shown
        const indextoremove = job.interested.
        map(interested => interested.user.toString())
        .indexOf(req.user.id);

        job.interested.splice(indextoremove, 1);

        await job.save();

        res.json(job.interested);
    }

    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

})

