import FooterNav from "./FooterNav";
import DashboardNavBar from "./DashboardNavbar";
import React, {useEffect, Fragment} from 'react'
import {connect} from 'react-redux';
import {Button, Container, Badge, Col, Card, Row, Image} from 'react-bootstrap'
import PropTypes from 'prop-types';
//import LoadingIcon from './LoadingIcon';
import {getcurrentfreelancerprofile} from '../actions/FreelancerProfile'
import {loadFreelancer} from '../actions/authentication'
import {useNavigate} from 'react-router-dom';
import DisplayExperience from './DisplayExperience';
import DisplayEducation from './DisplayEducation';
import edit from "./LandingImages/edit.png";
import add from "./LandingImages/add.png";
import search from "./LandingImages/search.png";
import free from "./LandingImages/free.png";
import experience from "./LandingImages/experience.png";
import wel from "./LandingImages/wel.png";


const FreelancerDashboard = ({getcurrentfreelancerprofile, Authentication:{user},
  FreelancerProfile:{freelancerprofile, loading}})=>{

    const Navigate = useNavigate();
    const ClickHandler1 = () =>{
        Navigate('/createprofile')
    }
    const ClickHandler2 = () =>{
      Navigate('/editfreelancerprofile')
  }
  const ClickHandler3 = () =>{
    Navigate('/addexperience')
}

const ClickHandler4 = () =>{
  Navigate('/freelancerdashboard/addeducation')
}

 useEffect(() => {
    getcurrentfreelancerprofile();
    loadFreelancer();
 }, [loading, getcurrentfreelancerprofile, loadFreelancer]);

 const alljobs = () => {
   Navigate('/freelancerdashboard/jobs');
 }

 const getallprofiles = () => {
  Navigate('/userallfreelancers');
}


    return (//loading && profile == null ? <LoadingIcon /> :
      <Fragment>
      <div>
          <DashboardNavBar />
<div >
  <Fragment>
  <h3 className="text-center">
  Freelancer's <Badge bg="success">Dashboard</Badge>
    </h3>
    </Fragment>
    <Fragment>
    <br>
    </br>
  < Container>
    <h2>
  Welcome <Badge  bg="success">{user && user.FirstName}</Badge>
</h2>
<br>
  </br>
  <br>
  </br>
{freelancerprofile !== null ? (<Fragment> 
  <div className="text-center">
  <Row>
  <Col>
  <Card.Img variant="top" style={{width:"200px"}} src={edit}/>
  <Card.Body>
    <Card.Text>
    You can edit your profile details by clicking below!
    </Card.Text>
    <Button variant="success" type="submit" onClick ={ClickHandler2} >
  Edit Profile
</Button>
  </Card.Body>
</Col>
{'   '}
<Col>
{ freelancerprofile.Student === true ? 
(<Fragment>
<Card.Img variant="top" style={{width:"200px"}} src={add}/>
  <Card.Body>
    <Card.Text>
    Add your education details!
    </Card.Text>
  <Button variant="success" type="submit" onClick ={ClickHandler4} >
  Add Education
</Button>
</Card.Body>
</Fragment>
):
(
  <Fragment>
<Card.Img variant="top" style={{width:"200px"}} src={add}/>
  <Card.Body>
    <Card.Text>
    Add your experience details!
    </Card.Text>
  <Button variant="success" type="submit" onClick ={ClickHandler3} >
  Add Experience
</Button>
</Card.Body>
</Fragment>
)
}
</Col>
</Row>

<Row>
<Col>
<Card.Img variant="top" style={{width:"250px"}} src={search}/>
  <Card.Body>
    <Card.Text>
    View jobs posted by business
    </Card.Text>
  <Button variant="success" type="submit" onClick = {alljobs}>View Jobs</Button>
</Card.Body>
</Col>
{'    '}  
<Col>
<Card.Img variant="top" style={{width:"220px"}} src={free}/>
  <Card.Body>
    <Card.Text>
    View other freelancers
    </Card.Text>
  <Button variant="success" type="submit" onClick = {getallprofiles}>View Freelancers</Button>
</Card.Body>
</Col>  
</Row>
<br>
</br>
<Row>
{  freelancerprofile.education.length > 0  ?
(<Fragment><h4 className="text-center">
    Your <Badge bg="success">Education List</Badge>
  </h4>
  <Row>
  <Col>
  <br>
  </br>
  <Card.Img variant="top" style={{width:"300px"}} src={experience}/>
  </Col>
  <Col>
  <br>
  </br>
  <br>
  </br>
    <DisplayEducation education= {freelancerprofile.education} />
  </Col>
  </Row>
  </Fragment>):(<p></p>)
  }
  { freelancerprofile.experience.length > 0  ?
(<Fragment><h4 className="text-center">
    Your <Badge bg="success">Experience List</Badge>
  </h4>
  <Row>
  <Col>
  <br>
  </br>
  <Card.Img variant="top" style={{width:"300px"}} src={experience}/>
  </Col>
<Col>
<br>
  </br>
  <br>
  </br>
<DisplayExperience experience= {freelancerprofile.experience} /></Col>
</Row></Fragment>):(<p></p>)
  }
{freelancerprofile.Student === true ?  (
  <p></p>
):
(<p></p>
  )
}
</Row>
</div>
  </ Fragment>
  ):  
(<Fragment>
  <center>
  <Image style={{width:"400px"}}src={wel} />
  <p>Setup your Profile to get started</p>
<Button variant="success" type="submit" onClick ={ClickHandler1}>
  Create Profile
</Button>
</center>
</ Fragment >)
}
</Container>
</Fragment>  
</div>
</div>
<br>
</br>
<br>
</br>
</Fragment>
)
}

FreelancerDashboard.propTypes = {
    getcurrentfreelancerprofile: PropTypes.func.isRequired,
    Authentication: PropTypes.object.isRequired,
    FreelancerProfile : PropTypes.object.isRequired,
};

const mappingstatetoprops = state =>({
    Authentication : state.Authentication,
    FreelancerProfile : state.FreelancerProfile,
})

export default connect(mappingstatetoprops, {getcurrentfreelancerprofile})(FreelancerDashboard);