import React, { Fragment, useState, useEffect } from 'react';
import { Button, Container, Form, Row, InputGroup, Col, Badge, FormControl, Image} from 'react-bootstrap'
//import FooterNav from "./FooterNav";
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createfreelancerprofile, getcurrentfreelancerprofile} from '../actions/FreelancerProfile'
import 'bootstrap/dist/css/bootstrap.min.css';
import edit from "./LandingImages/edit.png";
import FreelancerViewNav from './FreelancerViewNav'

const EditFreelancerProfile = ({createfreelancerprofile, getcurrentfreelancerprofile, FreelancerProfile:{
    freelancerprofile, loading
}}) => {

const Navigate = useNavigate();
  const [profiledata, setprofiledata] = useState({
    status:' ',
    website:' ',
    company:' ',
    githubusername:' ',
    youtube:' ',
    twitter:' ',
    facebook:' ',
    instagram:' ',
    skills:' '
  });

  const [Socialmedia, SetSocilamedia] = useState(false);

  useEffect(() => {
    getcurrentfreelancerprofile();

    setprofiledata({
        status: loading || !freelancerprofile.status ? '' : freelancerprofile.status,
        website:loading || !freelancerprofile.website ? '' : freelancerprofile.website,
        company:loading || !freelancerprofile.company ? '' : freelancerprofile.company,
        UserName:loading || !freelancerprofile.UserName ? '' : freelancerprofile.UserName,
        githubusername:loading || !freelancerprofile.githubusername ? '' : freelancerprofile.githubusername,
        youtube:loading || !freelancerprofile.social ? '' : freelancerprofile.social.youtube,
        twitter:loading || !freelancerprofile.social ? '' : freelancerprofile.social.twitter,
        facebook:loading || !freelancerprofile.social ? '' : freelancerprofile.social.facebook,
        instagram:loading || !freelancerprofile.social ? '' : freelancerprofile.social.instagram,
        skills:loading || !freelancerprofile.skills ? '' : freelancerprofile.skills.join(',')
    })
 },[loading, getcurrentfreelancerprofile])

  const {
    status,
    website,
    company,
    githubusername,
    youtube,
    twitter,
    facebook,
    instagram,
    skills
  } = profiledata;

  const onChange = e => setprofiledata({...profiledata, [e.target.name]: e.target.value});

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
      skills}, true);
      Navigate('/freelancerdashboard')
    }

    const socialMedia = e => {
      e.preventDefault();
      SetSocilamedia(!Socialmedia);
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
    Edit Profile{' '}<Badge bg="success">Details</Badge>
  </h3> 
  <br>
  </br>
    <div>
      <Form onSubmit={e => onSubmit(e)}>
    <Form.Group>
    <Row>
    <Col>
    <Form.Label>Website/portfolio</Form.Label>
      <Form.Control placeholder="Website Link" name='website' value={website} onChange = {e=> onChange(e)}/>
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
    
  <Row className="g-2">
  <Col md>
  <InputGroup>
    <InputGroup.Text style={{backgroundColor:"#246E19", color:"#FFFFFF"}}>Skills</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" placeholder="Enter Skills" name='skills' value={skills} 
     onChange = {e=> onChange(e)}/>
  </InputGroup>
  <p>add Skills seperated by "," (eg.HTML, CSS, JavaScript)</p>
  </Col> 
  </Row>
  </Row>
</Form.Group>

  <Container>
  <Button onClick = {socialMedia} variant="success" type="submit" >
    add Social Media Links
  </Button>
  </Container>
  <br>
  </br>
  {Socialmedia && <Fragment>
    <Container>
    <Row> <Form.Group as={Col} controlId="formGridPassword">
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

  <Col>
  <Button variant="success" type="submit" >
    Submit
  </Button>
  </Col>
  </Container>
</Form>
<Col>
</Col>
    </div>
  </Container>
  </Col>
  </Row>
  </Fragment>);
}

EditFreelancerProfile.propTypes = {
  createfreelancerprofile: PropTypes.func.isRequired,
  FreelancerProfile: PropTypes.object.isRequired,
  getcurrentfreelancerprofile: PropTypes.func.isRequired
};

const mappingstatetoprops = state => ({
FreelancerProfile: state.FreelancerProfile
});
export default connect(mappingstatetoprops,{createfreelancerprofile, getcurrentfreelancerprofile})(EditFreelancerProfile);