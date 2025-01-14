const express = require('express');
const router = express.Router();
const businessAuthentication = require('../../Middleware/businessAuthentication')
const User = require('../../Models/User');
const Business = require('../../Models/Business');
const Job = require('../../Models/Job')
const {check, validationResult} = require('express-validator');
const FreelancerAuthentication = require("../../Middleware/Authentication");
const FreelancerProfile = require("../../Models/FreelancerProfile");


//@Route  Put api/recommendations
//@desc   Recommendation Route
//@access Private

router.get('/:id' ,businessAuthentication, async(req,res)=>{
    try{
        const job = await Job.findById(req.params.id);
        const freelancerprofiles = await FreelancerProfile.find().populate('user',['Linkdeln','Description','UserName', 'Location', 'FirstName', 'Email','icon']);
        
       //console.log(job.skillsetreq)
     // res.json(freelancerprofiles)
       //res.json(freelancerprofiles)
      //console.log(freelancerprofiles)

      //const freelancers = freelancerprofiles.filter(function(freelancerprofile){
     //   return (freelancerprofile.skills > 0 && freelancerprofile.status === 'Available')
     // })

     // console.log(freelancers)
     // const skillstocompare = []

     // freelancerprofiles.filter(freelancerprofile => {
       // freelancerprofile.skills.push(skillstocompare)
       // }
    //  )
      
     // console.log(skillstocompare)
   
     //freelancerprofiles.filter(freelancerprofile => {
       // freelancerprofile.skills.forEach(item => {
       //   job.skillsetreq.includes(item) ? res.json(freelancerprofile.skills): res.send('No Match')
       // });
    // })
   // }

    freelancerprofiles.filter(freelancerprofile => {
     if(freelancerprofile.skills.length === job.skillsetreq.length && freelancerprofile.status === 'Available')
       {
       res.json(freelancerprofile)
     }
     })
    }

      // freelancerprofiles.filter(freelancerprofile => if()
       //  if(freelancerprofile.skills > 3){
         //  res.json(freelancerprofile)
        // }
      // })
  
      
       
       
       // if(
        //  freelancerprofiles.filter((freelancerprofile) =>(freelancerprofile.status = 'Available' && 
        //    freelancerprofile.skills.length === job.skillsetreq.length)) //? (res.json(freelancerprofile)):(res.json(freelancerprofile.skills)))
      //){
      //    return res.json(freelancerprofile)
     // }

      // freelancerprofile.array.forEach(element => {
         
       //});
      // if(
     //   freelancerprofiles.filter(freelancerprofile => freelancerprofile.skills.length >0)
   // ){
      //  console.log(freelancerprofile)
     //   return res.json(freelancerprofile)
   // }

      
     // freelancerprofiles.filter(function(freelancerprofile){
      //   res.json(freelancerprofile.skills)
      //})
    
     // freelancerprofiles.filter(freelancerprofile => res.json(freelancerprofile)) 
       // return   res.json(freelancerprofile) 
  
        
        // freelancerprofiles.filter(freelancerprofile.skills.length > 0 )
        // (res.json(freelancerprofile)):(res.json('No match')))


      catch(err)
      {
          console.error(err.message);
          res.status(500).send('Server Error');
      }
  })
  
       
        
        
        //if(freelancerprofiles){
         // Array.from(freelancerprofiles.skills).forEach(skill => 
          //  console.log(skill));
        //  }
     // const freelancerskills =  freelancerprofiles.filter(freelancerprofile =>{
        // if(freelancerprofile.skills.toString() === job.filte){
       // return res.json(freelancerprofile)
          
       //  else{
                //res.json('No freelancer that match your job requirements')
        // }
      

        
       // if(
        //freelancerprofiles.filter(freelancerprofile => freelancerprofile.skills === job.skillsetreq)
       // ){
       //     return res.status(400).json({msg:'You have not showed your interest in the job'});
       // }
       // freelancerprofiles.filter(freelancerprofile => if(freelancerprofile.skills === job.skillsetreq)
    
    
  
  module.exports = router;