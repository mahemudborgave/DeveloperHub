const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');
const FreelancerAuthentication = require("../../Middleware/Authentication");
const FreelancerProfile = require("../../Models/FreelancerProfile");
const {check, validationResult} = require('express-validator');
const User = require("../../Models/User");



//@Route  GET api/freelancerprofile/me
//@desc   Freelancer Profile page
//@access Public

router.get('/me',FreelancerAuthentication, async (req,res) => {
    try{
        const freelancerprofile = await FreelancerProfile.findOne({user: req.user.id})
        .populate('user',['Linkdeln','Description','Location', 'UserName', 'FirstName','Email','icon' ]);//yet to add resume and portfol

        if(!freelancerprofile){
            return res.status(400).json({msg:'No profile found'});
        }

        res.json(freelancerprofile);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//@Route  POST api/freelancerprofile
//@desc   Create freelancer profile
//@access Private


router.post('/',FreelancerAuthentication,[
    check('status', 'Please update your status').not().isEmpty(),
    check('skills', 'Please enter your skills seperated by , ').not().isEmpty(),
    check('githubusername', 'Please enter your skills seperated by , ').not().isEmpty(),

],async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    
    const{
company,
website,
status,
githubusername,
youtube,
twitter,
facebook,
instagram,
skills,
Student
//title,
//from,
//to,
//current,
//school,
//degree,
//fieldofstudy,
//description,
//location
    } = req.body

    const freelancerprofilefields = {};
    freelancerprofilefields.user = req.user.id;
    if(company) freelancerprofilefields.company = company;
    if(website) freelancerprofilefields.website = website;
    if(status) freelancerprofilefields.status = status;
    if(githubusername) freelancerprofilefields.githubusername = githubusername;
    if(Student) freelancerprofilefields.Student = Student;
    if(skills){
        freelancerprofilefields.skills = skills.split(',').map(skills => skills.trim());
    }
    console.log(freelancerprofilefields.skills )
    //freelancerprofilefields.experience ={};
    //if(title) freelancerprofilefields.experience.tittle = title;
    //if(company) freelancerprofilefields.experience.company = company;
    //if(location) freelancerprofilefields.experience.location = location;
    //if(from) freelancerprofilefields.experience.from = from;
    //if(to) freelancerprofilefields.experience.to = to;
    //if(current) freelancerprofilefields.experience.current = current;
    //if(description) freelancerprofilefields.experience.description = description;

    //freelancerprofilefields.education ={};
    //if(school) freelancerprofilefields.education.school = school;
    //if(degree) freelancerprofilefields.education.degree = degree;
    //if(fieldofstudy) freelancerprofilefields.education.fieldofstudy = fieldofstudy;
    //if(from) freelancerprofilefields.education.from = from;
    //if(to) freelancerprofilefields.education.to = to;
    //if(current) freelancerprofilefields.education.current = current;
    //if(description) freelancerprofilefields.education.description = description;

    freelancerprofilefields.social={};
    if(youtube) freelancerprofilefields.social.youtube = youtube;
    if(twitter) freelancerprofilefields.social.twitter = twitter;
    if(facebook) freelancerprofilefields.social.facebook = facebook;
    if(instagram) freelancerprofilefields.social.instagram = instagram;

    try{
        let freelancerprofile = await FreelancerProfile.findOne({user:req.user.id});
        
        if(freelancerprofile){
            //update the profile if found
            freelancerprofile = await FreelancerProfile.findOneAndUpdate({user:req.user.id},
                {$set: freelancerprofilefields},
                {new:true}
                );

                return res.json(freelancerprofile);
        }

        //create the profile
        freelancerprofile = new FreelancerProfile(freelancerprofilefields);
        await freelancerprofile.save();
        res.json(freelancerprofile);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

})

//@Route  GET api/freelancerprofile
//@desc   GET all freelancer's profile
//@access Public

router.get('/', async(req,res)=>{
    try{
        const freelancerprofiles = await FreelancerProfile.find().populate('user',['Linkdeln','Description','UserName', 'Location', 'FirstName', 'Email','icon']);
        res.json(freelancerprofiles);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@Route  GET api/freelancerprofile/:user_id
//@desc   GET Freelancer profile by userID
//@access Public


router.get('/:user_id', async(req,res)=>{
    try{
        const freelancerprofile = await FreelancerProfile.findOne({user: req.params.user_id}).populate('user',['Linkdeln','Description', 'UserName','Location','FirstName', 'Email','icon']);


        if(!freelancerprofile){
            return res.status(400).json({msg:'There is no profile for this freelancer'});
        }

        res.json(freelancerprofile)
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
        //if(err.kind="objectId"){
          //  return res.status(400).json({msg:'There is no profile for this freelancer'})
        }
})

//@Route  DELETE api/freelancerprofile
//@desc   Delete Profile of the freelancers
//@access Private

//remember to create an auth for admin and use it as the parameter to the delete. for now usinf freelancers token
router.delete('/', FreelancerAuthentication,async(req,res)=>{
    try{
        //remove freelancer profile
         await FreelancerProfile.findOneAndRemove({user: req.user.id});
        //remove freelancer for the application
        await User.findOneAndRemove({_id: req.user.id})
        res.json({msg:'Freelancer is deleted!'});
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@Route  PUT api/freelancerprofile/experience
//@desc   Update freelancer experience into the freelancer profile
//@access Private

router.put('/experience',[FreelancerAuthentication, [
    check('title', 'tittle is required')
    .not()
    .isEmpty(),
    check('company', 'company is required')
    .not()
    .isEmpty(),
    check('from', 'from date is required')
    .not()
    .isEmpty()
] 
],
async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
        const {
            title,
            company,
            location,
            from,
            to,
            current,
            description
        } = req.body

        const freelancerexperience = {
            title,
            company,
            location,
            from,
            to,
            current,
            description
        }
    try{
        const freelancerprofile = await FreelancerProfile.findOne({user: req.user.id});
        //it pushes the data into the user profile. we can also use "Push" instead of unshift.
        freelancerprofile.experience.unshift(freelancerexperience);

        await freelancerprofile.save();

        res.json(freelancerprofile);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@Route  DELETE api/freelancerprofile
//@desc   Delete Profile of the freelancers
//@access Private

router.delete('/experience/:exp_id', FreelancerAuthentication,async(req,res)=>{
    try{

         const freelancerprofile = await FreelancerProfile.findOne({user: req.user.id});

        //since the experiences are in a array we have to get the index of the array
        const indextoremove = freelancerprofile.experience.
        map(item => item.id)
        .indexOf(req.params.exp_id);

        freelancerprofile.experience.splice(indextoremove, 1);

        await freelancerprofile.save();

        res.json(freelancerprofile);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@Route  DELETE api/freelancerprofile/github/:username
//@desc   Get Git hub repository of freelancers
//@access Public

//router.get('/github/:username', async(req,res)=>{
  //  try{

        //git hub URI to access the users git hub repose
     //   const repos = {
     //       uri: `https://api.github.com/users/${req.params.username}/repos?per_page=3&sort=created:asc&client_id=${config.get('clientIdGitHub')}&client_secret=${config.get('SecretGitHub')}`,
      //      method:'GET',
      //      headers:{'user-agent': 'node.js'}
     //   };
//
        //using request to get the response(the status) and the body(which is the repos)
       // request(repos, (error, response, body)=>{
       //     if(error) console.error(error);

        //IF THE RESPONSE IS NOT 200 then there is no profile for the freelancer in github
        //    if(response.statusCode !== 200){
         //       return res.status(404).json({msg:'No Profile found in Git Hub'});
         //   }

            //parsing the body to json format
        //    res.json(JSON.parse(body));
       // });
 //  }
   // catch(err){
    //    console.error(err.message);
    //    res.status(500).send('Server Error');
   // }
//})

//@Route  PUT api/freelancerprofile/experience
//@desc   Update freelancer experience into the freelancer profile
//@access Private

router.put('/education',[FreelancerAuthentication, [
    check('courseofstudy', 'Course of Study is required')
    .not()
    .isEmpty(),
    check('university', 'University Name is required')
    .not()
    .isEmpty(),
    check('from', 'from date is required')
    .not()
    .isEmpty(),
    check('to', 'to date is required')
    .not()
    .isEmpty()
] 
],
async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
        const {
            courseofstudy,
            university,
            location,
            from,
            to,
            description
        } = req.body

        const freelancereducation = {
            courseofstudy,
            university,
            location,
            from,
            to,
            description
        }
    try{
        const freelancerprofile = await FreelancerProfile.findOne({user: req.user.id});
        //it pushes the data into the user profile. we can also use "Push" instead of unshift.
        freelancerprofile.education.unshift(freelancereducation);

        await freelancerprofile.save();

        res.json(freelancerprofile);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@Route  DELETE api/freelancerprofile
//@desc   Delete Profile of the freelancers
//@access Private

router.delete('/education/:exp_id', FreelancerAuthentication,async(req,res)=>{
    try{

         const freelancerprofile = await FreelancerProfile.findOne({user: req.user.id});

        //since the experiences are in a array we have to get the index of the array
        const indextoremove = freelancerprofile.education.
        map(item => item.id)
        .indexOf(req.params.edu_id);

        freelancerprofile.education.splice(indextoremove, 1);

        await freelancerprofile.save();

        res.json(freelancerprofile);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


module.exports = router;