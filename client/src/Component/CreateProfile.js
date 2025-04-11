import React, { Fragment, useState } from 'react';
import { Button, Container, Form, Row, InputGroup, Col, Badge, FormControl, Image} from 'react-bootstrap'
//import FooterNav from "./FooterNav";
import FreelancerViewNav from './FreelancerViewNav'
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createfreelancerprofile} from '../actions/FreelancerProfile'
import 'bootstrap/dist/css/bootstrap.min.css';
import edit from "./LandingImages/edit.png";

const CreateProfile = ({createfreelancerprofile}) => {

  const Navigate = useNavigate();

  const [Socialmedia, SetSocilamedia] = useState(false);

  const [freelancerprofiledata, setfreelancerprofiledata] = useState({
    status:' ',
    website:' ',
    company:' ',
    githubusername:' ',
    youtube:' ',
    twitter:' ',
    facebook:' ',
    instagram:' ',
    skills:' ',
    Student:false
  });

  const {
    status,
    website,
    company,
    githubusername,
    youtube,
    twitter,
    facebook,
    instagram,
    skills,
    Student
  } = freelancerprofiledata;

  const onChange = e => setfreelancerprofiledata ({...freelancerprofiledata, [e.target.name]: e.target.value});


  //const Navigate = useNavigate();
  const onSubmit= e => {
    e.preventDefault();
    createfreelancerprofile({
      status,
      website,
      company,
      githubusername,
      youtube,
      twitter,
      facebook,
      instagram,
      skills,
    Student});
    Navigate('/freelancerdashboard')
  }

  const socialmedia = e => 
  {
    e.preventDefault();
    SetSocilamedia(!Socialmedia)
  }
    return(
      <Fragment>
      <div>
<FreelancerViewNav />
</div>
<Row>
<Col>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<Image style={{width:"500px", paddingLeft:"100px"}}src={edit} />
</Col>
<Col style={{paddingRight:"100px"}}>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
  <Container>
  <h3 className="text-center">
    Create{' '}<Badge bg="success">Profile</Badge>
  </h3> 
  <br>
  </br>
    <div>
    <Form onSubmit = {onSubmit}>
    <Form.Group>
    <Row>
    <Col>
    <Form.Label>Website/portfolio</Form.Label>
      <Form.Control placeholder="Website Link" name='website' value={website} onChange = {e=> onChange(e)} required/>
    </Col>
    <Col>
    <Form.Label>Qualification</Form.Label>
      <Form.Control placeholder="Company" name='company' value={company} onChange = {e=> onChange(e)} />
    </Col>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Git Hub UserID</Form.Label>
      <Form.Control placeholder="Git Hub UserName" name='githubusername' value={githubusername} onChange = {e=> onChange(e)} />
    </Form.Group>

    <Col className="mb-3">
    <Form.Group as={Col} controlId="formGridStatus" >
      <Form.Label>Status</Form.Label>
      <Form.Select value={status} name="status" defaultValue="Choose..." onChange = {e=> onChange(e)}  >
        <option value='0'>Choose...</option>
        <option value='Available'>Available</option>
        <option value='Not Available'>Not Available</option>
        <option value='Not Open to work'>Not Open to Work</option>
      </Form.Select>
    </Form.Group>
    </Col>
      <Row>
    <Form.Group className="mb-3" id="formGridCheckbox">
<Form.Check type="checkbox" label="Student" name='Student' value = {Student} onChange = {
      e => {setfreelancerprofiledata({...freelancerprofiledata, Student: true});
      }
  } />
</Form.Group>
  </Row>
    
  <Row className="g-2">
  <Col md>
  <InputGroup>
    <InputGroup.Text>Skills</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" placeholder="Enter Skills" name='skills' value={skills} 
    onChange = {e=> onChange(e)}/>
  </InputGroup>
  <p>add Skills seperated by "," (eg.HTML, CSS, JavaScript)</p>
  </Col> 
  </Row>
  </Row>
</Form.Group>
  <Container>
  <Button onClick = {socialmedia} variant="success" type="" >
    add Social Media Links
  </Button>
  </Container>
  <br>
  </br>
  {Socialmedia && <Fragment>
    <Container>
    <Row> 
      <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Twitter</Form.Label>
      <Form.Control placeholder="Twitter Link" name='twitter' 
      value={twitter} onChange = {e=> onChange(e)}/>
    </Form.Group>
  </Row>
<Row>
  <Form.Group as={Col} className="mb-3">
    <Form.Label>Facebook</Form.Label>
    <Form.Control placeholder="Facebook Profile" name='facebook' value={facebook} 
     onChange = {e=> onChange(e)}/>
  </Form.Group>
  <Form.Group as={Col} className="mb-3">
    <Form.Label>Instagram</Form.Label>
    <Form.Control placeholder="Instagaram Profile" name='instagram' value={instagram} 
     onChange = {e=> onChange(e)}/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Youtube</Form.Label>
      <Form.Control  placeholder="Youtube Channel Link" name='youtube' value={youtube} onChange = {e=> onChange(e)} />
    </Form.Group>
</Row>
  </Container>
    </Fragment>}
  <Container>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Agree to the terms and conditions" />
  </Form.Group>
  <Col>
  <Button variant="success" type="submit" >
    Submit
  </Button>
  </Col>
  </Container>
</Form>
    </div>
  </Container>
  </Col>
  </Row>
  </Fragment>);
}

CreateProfile.propTypes = {
  createfreelancerprofile: PropTypes.func.isRequired
};


export default connect(null,{createfreelancerprofile})(CreateProfile);