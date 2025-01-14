import  {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getJob} from '../../actions/Job';
import { startTransition } from 'react';
import JobNavBar from './JobNavBar';
import JobInterested from './JobInterested';
import JobView from './JobView';
import {GiMoneyStack} from 'react-icons/gi';
import {BsFillClockFill} from 'react-icons/bs';
import {Badge, Alert, Card, Button,Toast, Container, Col, Row, Tabs, Tab, Nav, Modal, Form } from 'react-bootstrap';
import { useMatch } from 'react-router';
import FreelancerRecommendView from './FreelancerRecommendView';
import {FiCheckSquare} from 'react-icons/fi'
import {BsYoutube, BsLinkedin, BsGlobe2, BsFillGeoFill, BsCalendarCheck, BsGithub} from 'react-icons/bs'
import {MdMarkEmailUnread} from 'react-icons/md'
import {addmessage} from '../../actions/FreelancerProfile'
import Rating from '@mui/material/Rating';


//import{Card, Container, Row, Col} from 'react-bootstrap';
//import {BsYoutube, BsLinkedin, BsGlobe2, BsFillGeoFill} from 'react-icons/bs'
//import { Link } from "react-router-dom";

const Job = ({getJob, addmessage,  Job:{job, loading}, FreelancerProfile:{freelancerprofiles}, 
  BusinessProfile:{businessprofile}
}) => {
  
  const [showA, setShowA] = useState(false);
  
  const toggleShowA = () => setShowA(!showA);  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const Mailto = ({ email, subject, body, children }) => {
  return (
    <a style={{color:"#000000"}} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
 );
};
const match = useMatch('businessdashboard/myjobs/:id');

useEffect(() => {
        getJob(match.params.id);
    },[getJob, match.params.id]);

//let uniqueChars = [];
//freelancers.forEach((element) => {
 //   if (!uniqueChars.includes(element)) {
  //      uniqueChars.push(element);
  //  }
// });

//if(job!==null){
 // job.skillsetreq.forEach(item => {
  //  freelancerprofile.map(feeelancerprofile => {
  //    freelancerprofile.skills.includes(item) && freelancerprofile.status === 'Available' ?
  //    (freelancers.push(freelancerprofile.user.FirstName)):(<p>No Match</p>)
  //  })
 // })
//}
const freelancersname = []
    const freelancersusername = []
    const freelancersskills = []
    const freelancerslastname = []
    const freelancerwebsite = []
   const freelancerlocation = []
   const freelancerage = []
   const freelancerdescription = []
   const freelancerlinkedln = []
   const freeelanceremail = []
  const freelancergithub = []
  const freeelancerid=[]

  if(job!==null){
   freelancerprofiles.map(freelancerprofile => {
   job.skillsetreq.every(item => {
   freelancerprofile.skills.includes(item) && freelancerprofile.status === 'Available' 
    ? (freelancersname.push(freelancerprofile.user.FirstName) &&
    freelancersusername.push(freelancerprofile.user.UserName) &&
    freelancersskills.push(freelancerprofile.skills) && freelancerslastname.push(freelancerprofile.user.LastName) &&
    freelancerwebsite.push(freelancerprofile.website) && freelancerlocation.push(freelancerprofile.user.Location) &&
    freelancerage.push(freelancerprofile.user.Age) && freelancerdescription.push(freelancerprofile.user.Description)&&
    freelancerlinkedln.push(freelancerprofile.user.Linkdeln) && freeelanceremail.push(freelancerprofile.user.Email) &&
    freelancergithub.push(freelancerprofile.githubusername) && freeelancerid.push(freelancerprofile._id)
    ):(<p>No Match</p>)
    }); 
    })
  }
  
  const uniquename = [...new Set(freelancersname)]
  const uniqueusername = [...new Set(freelancersusername)]
  const uniqueskills = [...new Set(freelancersskills)]
  const uniquelastname = [...new Set(freelancerslastname)]
  const uniquewebsite = [...new Set(freelancerwebsite)]
  const uniquelocation = [...new Set(freelancerlocation)]
  const uniqueage = [...new Set(freelancerage)]
  const uniquedescription = [...new Set(freelancerdescription)]
  const uniquelinkdeln = [...new Set(freelancerlinkedln)]
   const uniqueemail = [...new Set(freeelanceremail)]
  const uniquegithub = [...new Set(freelancergithub)]
  const uniqueid = [...new Set(freeelancerid)]

  
  
   return(
    <Fragment>
            <JobNavBar />
      { job !== null &&
        <div>
          <br>
          </br>
          <br>
          </br>
        <h3 className="text-center">
       Job Name:  <Badge  bg="success"> {job.jobtitle}</Badge>
  </h3>
  <Container>
  <Tabs style={{color:"#FFFFFF"}} defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Job Details">
  <Card>
  <Card.Body className = "text-center">
    <Card.Text>
     No of Freelancer's interested - <Badge pill bg="success" >
    {job.interested.length}
  </Badge>
    </Card.Text>
    <Col>
    <Card.Subtitle className="mb-2 text-muted">{job.jobdescription}</Card.Subtitle>
    </Col>
    <h6 className="text-center">
     <Badge  bg="success">Budget</Badge>
  </h6>
    <Card.Text>
    <GiMoneyStack />{' '}{job.jobbudget}
    </Card.Text>
    <h6 className="text-center">
     <Badge  bg="success">Duration</Badge>
  </h6>
    <Card.Text>
      <BsFillClockFill />{' '}{job.jobduration} Months
    </Card.Text>
    <h6 className="text-center">
      Essential <Badge  bg="success">Skills</Badge>
  </h6>
    {job.skillsetreq.map((skill, index) =>(
        <div>
          <i /><FiCheckSquare />{' '}{skill}
          </div>
      ))}

  
    </Card.Body>
</Card>
  </Tab>
  <Tab eventKey="profile" title="Interested Freelancer's">
  {job.interested.length > 0 ?
  (<Fragment>
    {job.interested.map(interested => <JobInterested key={interested._id} interested = {interested}/> )}
    <br>
  </br> 
  </Fragment>):(<Fragment><center>No freelancer has expressed interest in the Job</center></Fragment>)
}  </Tab>
</Tabs>
</Container>
  <Container>
  <br>
  </br>
  <h3 className="text-center">
  <Badge bg="success">Recommendations</Badge>
  </h3>
  <br>
  </br>
  <center>Below Freelancers match you requirements!</center>
  <br>
  </br>
  {freelancerprofiles.map(freelancerprofile => (
   freelancerprofile.skills.every(item => (
   job.skillsetreq.includes(item) && freelancerprofile.status === 'Available' 
    ? <FreelancerRecommendView key = {freelancerprofile._id}freelancerprofile = {freelancerprofile} />
    :(<p>No Match</p>)
   ))
  ))
  }
  {uniquename.length === 0 ?
(<Fragment>
      <p>No Freelancer's that match your required skill set! View interested freelancer's instead</p>
    </Fragment>):(<p></p>)
  }
  {uniquename.length === 1 ?(<Fragment>
    <Row xs={7} md={2} className="g-4">
    <Col>
   <Card style={{  backgroundColor: "#FFFFFF", color:"#000000" }}>
   <Card.Title className="text-center">{uniquename[0]},{uniquelastname[0]} </Card.Title>
  <Card.Body>
  <br>
    </br>
    <Card.Subtitle style={{Color:"#FFFFFF"}}>{uniquedescription[0]}</Card.Subtitle>
    <br>
    </br>
    <BsLinkedin />{' '}{uniquelinkdeln[0]}
    <br>
    </br>
    <br>
    </br>
    <BsFillGeoFill />{' '}{uniquelocation[0]}
     <br>
    </br>
    <br>
    </br>
    <BsGlobe2 />{' '}{uniquewebsite[0]}
    <br>
    </br>
    <br>
    </br>
    Age : {uniqueage[0]}{' '}<BsCalendarCheck />
    <br>
    </br>
    <br>
    </br>
    <MdMarkEmailUnread />{' '}{uniqueemail[0]}
    <br>
    </br>
    <br>
    </br>
    <BsGithub />{' '}{uniquegithub[0]}
    <br>
    </br>
    <br>
    </br>
    <strong>Skills</strong>
    <br>
    </br>
    {uniqueskills[0].map((skill, index) =>(
        <div>
          <i /><FiCheckSquare />{' '}{skill}
          </div>
      ))}
      <br>
    </br>
    <strong>Skill based rating</strong>
    <Rating name="disabled" value={uniqueskills[0].length} readOnly />
    <br>
    </br>
      <Mailto style={{color:"#000000"}}email={uniqueemail[0]} subject={"Developer's Hub"} body={
        `Your skills sets matched our job requirement, here are the job details
        Job Title:${job.jobtitle}
        Job description:${job.jobdescription}
        Job Budget:${job.jobbudget}
        Job Duration:${job.jobduration}
        Send us a mail back if interested`}
    >
      Send Job Details to freelancer
  </Mailto>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  </Fragment>):(<p></p>)
}
{uniquename.length === 2 ?
(<Fragment>
    <Row xs={7} md={2} className="g-4">
  <Col>
   <Card style={{  backgroundColor: "#FFFFFF", color:"#000000" }}>
   <Card.Title className="text-center">{uniquename[0]},{uniquelastname[0]} </Card.Title>
  <Card.Body>
  <br>
    </br>
    <Card.Subtitle style={{Color:"#FFFFFF"}}>{uniquedescription[0]}</Card.Subtitle>
    <br>
    </br>
    <BsLinkedin />{' '}{uniquelinkdeln[0]}
    <br>
    </br>
    <br>
    </br>
    <BsFillGeoFill />{' '}{uniquelocation[0]}
     <br>
    </br>
    <br>
    </br>
    <BsGlobe2 />{' '}{uniquewebsite[0]}
    <br>
    </br>
    <br>
    </br>
    Age : {uniqueage[0]}{' '}<BsCalendarCheck />
    <br>
    </br>
    <br>
    </br>
    <MdMarkEmailUnread />{' '}{uniqueemail[0]}
    <br>
    </br>
    <br>
    </br>
    <BsGithub />{' '}{uniquegithub[0]}
    <br>
    </br>
    <br>
    </br>
    <strong>Skills</strong>
    <br>
    </br>
    {uniqueskills[0].map((skill, index) =>(
        <div>
          <i /><FiCheckSquare />{' '}{skill}
          </div>
      ))}
       <br>
    </br>
    <strong>Skill based rating</strong>
    <br></br>
    <Rating name="disabled" value={uniqueskills[0].length} readOnly />
    <br>
    </br>
      <Mailto style={{color:"#000000"}}email={uniqueemail[0]} subject={"Developer's Hub"} body={
        `Your skills sets matched our job requirement, here are the job details
        Job Title:${job.jobtitle}
        Job description:${job.jobdescription}
        Job Budget:${job.jobbudget}
        Job Duration:${job.jobduration}
        Send us a mail back if interested`}
    >
      Send Job Details to freelancer
  </Mailto>
  </Card.Body>
  </Card>
  </Col>
  <Col>
   <Card style={{ backgroundColor: "#FFFFFF", color:"#000000" }}>
   <Card.Title className="text-center">{uniquename[1]},{uniquelastname[1]} </Card.Title>
  <Card.Body>
  <br>
    </br>
    <Card.Subtitle style={{Color:"#FFFFFF"}}>{uniquedescription[0]}</Card.Subtitle>
    <br>
    </br>
    <BsLinkedin />{' '}{uniquelinkdeln[1]}
    <br>
    </br>
    <br>
    </br>
    <BsFillGeoFill />{' '}{uniquelocation[1]}
     <br>
    </br>
    <br>
    </br>
    <BsGlobe2 />{' '}{uniquewebsite[1]}
    <br>
    </br>
    <br>
    </br>
    Age : {uniqueage[1]}{' '}<BsCalendarCheck />
    <br>
    </br>
    <br>
    </br>
    <MdMarkEmailUnread />{' '}{uniqueemail[1]}
    <br>
    </br>
    <br>
    </br>
    <BsGithub />{' '}{uniquegithub[1]}
    <br>
    </br>
    <br>
    </br>
    <strong>Skills</strong>
    <br>
    </br>
    {uniqueskills[1].map((skill, index) =>(
        <div>
          <i /><FiCheckSquare />{' '}{skill}
          </div>
      ))}
       <br>
    </br>
    <strong>Skill based rating</strong>
    <br>
    </br>
    <Rating name="disabled" value={uniqueskills[1].length} readOnly />
    <br>
    </br>
      <Mailto style={{color:"#000000"}}email={uniqueemail[1]} subject={"Developer's Hub"} body={
        `Your skills sets matched our job requirement, here are the job details
        Job Title:${job.jobtitle}
        Job description:${job.jobdescription}
        Job Budget:${job.jobbudget}
        Job Duration:${job.jobduration}
        Send us a mail back if interested`}
    >
      Send Job Details to freelancer
  </Mailto>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  </Fragment>):(<p></p>)
}
{uniquename.length >= 3 ?
(<Fragment>
   <Row xs={7} md={2} className="g-4">
  <Col>
   <Card style={{ backgroundColor: "#FFFFFF", color:"#000000" }}>
   <Card.Title className="text-center">{uniquename[0]} {uniquelastname[0]} </Card.Title>
  <Card.Body>
  <br>
    </br>
    <Card.Subtitle style={{Color:"#FFFFFF"}}>{uniquedescription[0]}</Card.Subtitle>
    <br>
    </br>
    <a><BsLinkedin />{' '}{uniquelinkdeln[0]}</a>
    <br>
    </br>
    <br>
    </br>
    <a><BsFillGeoFill />{' '}{uniquelocation[0]}</a>
     <br>
    </br>
    <br>
    </br>
    <a><BsGlobe2 />{' '}{uniquewebsite[0]}</a>
    <br>
    </br>
    <br>
    </br>
    <a> Age : {uniqueage[0]}{' '}<BsCalendarCheck /></a>
    <br>
    </br>
    <br>
    </br>
    <a><MdMarkEmailUnread />{' '}{uniqueemail[0]}</a>
    <br>
    </br>
    <br>
    </br>
    <a><BsGithub />{' '}{uniquegithub[0]}</a>
    <br>
    </br>
    <br>
    </br>
    <strong>Skills</strong>
    <br>
    </br>
    {uniqueskills[0].map((skill, index) =>(
        <div>
          <i /><FiCheckSquare />{' '}{skill}
          </div>
      ))}
      <br>
      </br>
      <strong>Skills based rating</strong>
       <br>
    </br>
    <Rating name="disabled" value={uniqueskills[0].length} readOnly />
    <br>
    </br>
      <Mailto style={{color:"#000000"}}email={uniqueemail[0]} subject={"Developer's Hub"} body={
        `Your skills sets matched our job requirement, here are the job details
        Job Title:${job.jobtitle}
        Job description:${job.jobdescription}
        Job Budget:${job.jobbudget}
        Job Duration:${job.jobduration}
        Send us a mail back if interested`}
    >
    Send Job Details to freelancer
  </Mailto>
  </Card.Body>
  </Card>
  </Col>
  <Col>
   <Card style={{ backgroundColor: "#FFFFFF", color:"#000000" }}>
   <Card.Title className="text-center">{uniquename[1]},{uniquelastname[1]} </Card.Title>
  <Card.Body>
  <br>
    </br>
    <Card.Subtitle>{uniquedescription[1]}</Card.Subtitle>
    <br>
    </br>
    <a><BsLinkedin />{' '}{uniquelinkdeln[1]}</a>
    <br>
    </br>
    <br>
    </br>
    <a><BsFillGeoFill />{' '}{uniquelocation[1]}</a>
     <br>
    </br>
    <br>
    </br>
    <a><BsGlobe2 />{' '}{uniquewebsite[1]}</a>
    <br>
    </br>
    <br>
    </br>
    <a> Age : {uniqueage[1]}{' '}<BsCalendarCheck /></a>
    <br>
    </br>
    <br>
    </br>
    <a><MdMarkEmailUnread />{' '}{uniqueemail[1]}</a>
    <br>
    </br>
    <br>
    </br>
    <a><BsGithub />{' '}{uniquegithub[1]}</a>
    <br>
    </br>
    <br>
    </br>
    <strong>Skills</strong>
    <br>
    </br>
    {uniqueskills[1].map((skill, index) =>(
        <div>
          <i /><FiCheckSquare />{' '}{skill}
          </div>
      ))}
       <br>
      </br>
      <strong>Skills based rating</strong>
       <br>
    </br>
    <Rating name="disabled" value={uniqueskills[1].length} readOnly />
    <br>
    </br>
      <Mailto style={{color:"#000000"}}email={uniqueemail[1]} subject={"Developer's Hub"} body={
        `Your skills sets matched our job requirement, here are the job details
        Job Title:${job.jobtitle}
        Job description:${job.jobdescription}
        Job Budget:${job.jobbudget}
        Job Duration:${job.jobduration}
        Send us a mail back if interested`}
    >
      Send Job Details to freelancer
  </Mailto>
  </Card.Body>
  </Card>
  </Col>
  <Col>
   <Card style={{  backgroundColor: "#FFFFFF", color:"#000000" }}>
   <Card.Title className="text-center">{uniquename[2]},{uniquelastname[2]} </Card.Title>
  <Card.Body>
  <br>
    </br>
    <Card.Subtitle>{uniquedescription[2]}</Card.Subtitle>
    <br>
    </br>
    <a><BsLinkedin />{' '}{uniquelinkdeln[2]}</a>
    <br>
    </br>
    <br>
    </br>
    <a><BsFillGeoFill />{' '}{uniquelocation[2]}</a>
     <br>
    </br>
    <br>
    </br>
    <a><BsGlobe2 />{' '}{uniquewebsite[2]}</a>
    <br>
    </br>
    <br>
    </br>
    <a> Age : {uniqueage[2]}{' '}<BsCalendarCheck /></a>
    <br>
    </br>
    <br>
    </br>
    <a><MdMarkEmailUnread />{' '}{uniqueemail[2]}</a>
    <br>
    </br>
    <br>
    </br>
    <a><BsGithub />{' '}{uniquegithub[2]}</a>
    <br>
    </br>
    <br>
    </br>
    <strong>Skills</strong>
    <br>
    </br>
    {uniqueskills[2].map((skill, index) =>(
        <div>
          <i /><FiCheckSquare />{' '}{skill}
          </div>
      ))}
       <br>
    </br>
    <strong>Skill based rating</strong>
    <br></br>
    <Rating name="disabled" value={uniqueskills[2].length} readOnly />
    <br>
    </br>
      <Mailto style={{color:"#000000"}}email={uniqueemail[2]} subject={"Developer's Hub"} body={
        `Your skills sets matched our job requirement, here are the job details
        Job Title:${job.jobtitle}
        Job description:${job.jobdescription}
        Job Budget:${job.jobbudget}
        Job Duration:${job.jobduration}
        Send us a mail back if interested`}
    >
          Send Job Details to freelancer
  </Mailto>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  </Fragment>) : (<p></p>)
}
</Container>
        </div>
}
       </Fragment>
   )
}


Job.propTypes = {
    getJob: PropTypes.func.isRequired,
    Job:PropTypes.object.isRequired,
    FreelancerProfile: PropTypes.object.isRequired,
    BusinessProfile: PropTypes.object.isRequired
};  

const mappingstatetoprops = state => ({
    Job: state.Job,
    FreelancerProfile: state.FreelancerProfile,
    BusinessProfile : state.BusinessProfile
})

export default connect(mappingstatetoprops,{getJob})(Job); 