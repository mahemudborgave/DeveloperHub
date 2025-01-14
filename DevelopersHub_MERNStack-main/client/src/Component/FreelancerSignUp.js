import SimpleNav from "./SimpleNav";
import {Container, Form, Row, Col, Button, Badge, InputGroup, FormControl, Image} from 'react-bootstrap'
//import Select from 'react-select'
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {DoAlert} from '../actions/alert'
import {freelancersignup} from '../actions/authentication'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUp from "./LandingImages/signup.png"


function FreelancerSignUp({DoAlert,freelancersignup, authentication }) {

  //var Skills =[{
  //  value:1,
  //  label:"Full Stack Application Developer"
  //},
  //{
  //  value:2,
  //  label:"Front end Developer"
 // },
  //  value:3,
  //  label:"Back end developer"
  //},
  //{
  //  value:4,
 //   label:"Framework specialist"
 // },
 // {
  //  value:5,
  //  label:"UI/UX designer"
  //},
  //{
  //  value:6,
  //  label:"Application deployment"
 // },
  //{
  //  value:7,
  //  label:"Product Management"
  //},
  //{
  //  value:8,
  //  label:"React.js"
  //},
  //{
   // value:9,
   // label:"Angular"
 // },
  //{
  //  value:10,
  //  label:"QA and Performance Testing"
  //},
  //{
  //  value:11,
  //  label:"Documentation specialist"
  //}
  //]
  
  const navigate = useNavigate();

  const [formdetails, setFormDetails] = useState({
    UserName:'',
    FirstName:'',
    LastName:'',
    Email:'',
    Password: '',
    confirmpassword: '',
    Linkdeln:'',
    Location:'',
    Age:'',
    Description:'',
  });
    const { UserName, FirstName, LastName, Email, Password, 
      confirmpassword, Linkdeln, Location, Age, Description} = formdetails;
      
    const onChange = e => setFormDetails({...formdetails, [e.target.name]: e.target.value})

    const onSubmit = async e =>{
      e.preventDefault();
      if(Password !== confirmpassword){
        DoAlert('password dont match', 'primary');
      }
      else{
        freelancersignup({UserName, FirstName, LastName, Email, Password, 
          confirmpassword, Linkdeln, Location, Age, Description});
    }
  }
    if(authentication){
      navigate('/freelancerdashboard')
    }
    
    return (
        <div>
            <SimpleNav />
        <div>
          <br>
          </br>
            <h3 className="text-center">
        Welcome to <Badge bg="success">Registration</Badge>
      </h3>
      </div>
      <Row>
    <Col >
    <br>
    </br>
    <Image style={{width:"500px"}}src={SignUp} />
    </Col>
    
    <Col style={{paddingRight:"200px"}}>
    <br>
    </br>
    <Container>
    <Form.Group>
    <Form  onSubmit = {onSubmit}>
    <Row>
    <Col>
    <Form.Label>User Name</Form.Label>
      <Form.Control placeholder="First name" name='UserName' value={UserName} onChange = {e=> onChange(e)}
       />
    </Col>
    <Col>
    <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="First name" name='FirstName' value={FirstName} onChange = {e=> onChange(e)}
       />
    </Col>
    <Col>
    <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Last name" name='LastName' value={LastName} onChange = {e=> onChange(e)}/>
    </Col>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Personal Email" name='Email' value={Email} onChange = {e=> onChange(e)} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name='Password' value={Password} onChange = {e=> onChange(e)} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" name='confirmpassword' 
      value={confirmpassword} onChange = {e=> onChange(e)}/>
    </Form.Group>
  </Row>

  <Form.Group as={Col} className="mb-3">
    <Form.Label>LinkedIn</Form.Label>
    <Form.Control placeholder="Linkdeln Profile" name='Linkdeln' value={Linkdeln} 
    onChange = {e=> onChange(e)} />
  </Form.Group>

  <Form.Group as={Col} className="mb-3">
    <Form.Label>Location</Form.Label>
    <Form.Control placeholder="Country of residence" name='Location' value={Location} 
    onChange = {e=> onChange(e)} />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formgridage">
      <Form.Label>Age</Form.Label>
      <Form.Control placeholder="Enter your age" name='Age' value={Age} 
      onChange = {e=> onChange(e)}  />
    </Form.Group>
  <Row className="g-2">
  <Col md>
  <InputGroup>
    <InputGroup.Text style={{backgroundColor:"#246E19", color:"#FFFFFF"}}>Describe yourself</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" placeholder="Describe yourself" name='Description' value={Description} 
    onChange = {e=> onChange(e)}  />
  </InputGroup>
  </Col>
  

  
</Row>
</Row>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Agree to the terms and conditions" />
  </Form.Group>

  <Button variant="success"  type="submit" >
    Submit
  </Button>
  
</Form>
</Form.Group>
</Container>
</Col>
</Row>
<br>
</br>
</div>
        
    )
}

FreelancerSignUp.propTypes = {
  DoAlert: PropTypes.func.isRequired,
  freelancersignup: PropTypes.func.isRequired,
  authentication : PropTypes.bool
}

const mappingStatetoProps = state => ({
  authentication : state.Authentication.authentication
});

export default 
connect(mappingStatetoProps, 
  {DoAlert, freelancersignup})
  (FreelancerSignUp);