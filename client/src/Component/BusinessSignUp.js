import { InputGroup,Container, Form, Row, Col, Button, Badge, FormControl, Image} from 'react-bootstrap';
import SimpleNav from "./SimpleNav";
import React, {useState} from 'react'
import {DoAlert} from '../actions/alert'
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {businesssignup} from '../actions/businessauthentication'
import { useNavigate } from 'react-router-dom';
import SignUp from "./LandingImages/businesssignup.png";


function BusinessSignUp({DoAlert, businesssignup, authentication}){
  const navigate = useNavigate();

  const [formdetails, setFormDetails] = useState({
    CompanyName:'',
    ContactName:'',
    ContactEmail:'',
    Password: '',
    confirmpassword: '',
    Location:'',
    CompanyDescription:''
  });
    const {
      CompanyName,ContactName,ContactEmail, 
      Password, confirmpassword, Location, CompanyDescription
   } = formdetails;
      
    const onChange = e => setFormDetails({...formdetails, [e.target.name]: e.target.value})

    const onSubmit = async e =>{
      e.preventDefault();
      if(Password !== confirmpassword){
        DoAlert('password dont match');
      }
        else{
          businesssignup({
            CompanyName,ContactName,ContactEmail, 
            Password, confirmpassword, Location, CompanyDescription
          } );
      }
    }

    if(authentication === true){
      navigate('/businesslogin')
    }

    return (
        <div>
        <SimpleNav />
        
  <Row>
    <Col>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <Image style={{width:"500px"}}src={SignUp} />
    </Col>
    <Col style={{paddingRight:"200px"}}>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
        <Container>
        <div>
        <h3 className="text-center">
    Register as<Badge bg="success">Business</Badge>
  </h3>
  <br>
    </br>
  </div>
        <Form.Group>
        <Form onSubmit = {onSubmit}>
            <Row>
<Col>
<Form.Label>Company Name</Form.Label>
  <Form.Control placeholder="Company name" name='CompanyName' value={CompanyName} onChange = {e=> onChange(e)} />
</Col>
<Col>
<Form.Label>Contact Name</Form.Label>
  <Form.Control placeholder="Contact name" name='ContactName' value={ContactName} onChange = {e=> onChange(e)}/>
</Col>
<Col>
<Form.Label>Contact's Email</Form.Label>
  <Form.Control placeholder="Contact email" name='ContactEmail' value={ContactEmail} onChange = {e=> onChange(e)} />
</Col>
</Row>
<Col className="mb-3">
<Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" 
  name='Password' value={Password} onChange = {e=> onChange(e)} />
</Form.Group>

<Form.Group as={Col} controlId="">
  <Form.Label>Confirm Pasword</Form.Label>
  <Form.Control type="password" placeholder="Confirm Password" 
  name='confirmpassword' value={confirmpassword} onChange = {e=> onChange(e)}/>
</Form.Group>

<Form.Group as={Col} className="mb-3">
<Form.Label>Location</Form.Label>
<Form.Control placeholder="Country of Location"
name='Location' value={Location} onChange = {e=> onChange(e)} />
</Form.Group>
</Col>
<Row className="g-2">
<Col md>
<InputGroup>
<InputGroup.Text style={{backgroundColor:"#246E19", color:"#FFFFFF"}}>Company's Description</InputGroup.Text>
<FormControl as="textarea" aria-label="With textarea" 
name='CompanyDescription' value={CompanyDescription} onChange = {e=> onChange(e)}/>
</InputGroup>
</Col>
</Row>
<Form.Group className="mb-3" id="formGridCheckbox">
<Form.Check type="checkbox" label="Agree to the terms and conditions" />
</Form.Group>
<Button variant="success" type="submit">
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

BusinessSignUp.propTypes = {
  DoAlert: propTypes.func.isRequired,
  businesssignup: propTypes.func.isRequired,
  authentication : propTypes.bool
}

const mappingStatetoProps = state => ({
  authentication : state.BusinessAuthentication.authentication
}); 

export default connect(mappingStatetoProps, {DoAlert, businesssignup})(BusinessSignUp);