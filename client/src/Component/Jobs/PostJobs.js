import React, { Fragment, useState } from 'react';
import { Button, Container, Form, Row, InputGroup, Col, Badge, FormControl, Image} from 'react-bootstrap'
//import FooterNav from "./FooterNav";
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import {createfreelancerprofile} from '../actions/FreelancerProfile'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillClockFill} from 'react-icons/bs';
import {addJob} from '../../actions/Job'
import { Link } from "react-router-dom"; 
import BusinessViewNav from '../BusinessViewNav'
import edit from "../LandingImages/edit.png";
import experience from "../LandingImages/experience.png";

const PostJobs = ({addJob}) => {

  const Navigate = useNavigate();

  const [jobdata, setjobdata] = useState({
    jobtitle:'',
  jobdescription:'',
  skillsetreq:'',
  jobbudget: '',
  jobduration: ''});

  const {
    jobtitle,
    jobdescription,
    skillsetreq,
    jobbudget,
    jobduration
 } = jobdata;
    
  const onChange = e => setjobdata({...jobdata, [e.target.name]: e.target.value})

   const onSubmit= e => {
     e.preventDefault();
    addJob({
      jobtitle,
    jobdescription,
    skillsetreq,
    jobbudget,
    jobduration
    });
    Navigate('/businessdashboard')
  } 
  
    
    return(
        <Fragment>
            <div>
                <BusinessViewNav />
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
  <Image style={{width:"500px", paddingLeft:"100px"}}src={experience} />
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
        <Container><h3 className="text-center">
    Post{' '}<Badge bg="success">Jobs</Badge>
  </h3> 
  <br>
  </br>
        <Form onSubmit = {onSubmit}>
    <Form.Group>
    <Row>
    <Row>
        <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Job Title</InputGroup.Text>
    <FormControl name='jobtitle' value={jobtitle} onChange = {e=> onChange(e)}/>
  </InputGroup>
  </Row>
  <br />
  <Col>
  <InputGroup className="mb-3">
    <InputGroup.Text>Budget</InputGroup.Text>
    <FormControl  name='jobbudget' value={jobbudget} onChange = {e=> onChange(e)}/>
    <InputGroup.Text><strong>£</strong></InputGroup.Text>
  </InputGroup>
  </Col>
  <Col>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-lg">Duration in Months</InputGroup.Text>
    <FormControl name='jobduration' value={jobduration} onChange = {e=> onChange(e)}/>
    <InputGroup.Text><BsFillClockFill /></InputGroup.Text>
  </InputGroup>
  </Col>
  <Row>
  <InputGroup>
    <InputGroup.Text>Skills Required</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" placeholder="Enter Skills" 
    name='skillsetreq'  value={skillsetreq} onChange = {e=> onChange(e)} />
  </InputGroup> 
  <p>add Skills seperated by "," (eg.HTML, CSS, JavaScript)</p>
  </Row>
  <br />
  <Row>
  <InputGroup>
    <InputGroup.Text>Job Description</InputGroup.Text>
    <FormControl  as="textarea" aria-label="With textarea" placeholder="Enter description" 
    name='jobdescription'  value={jobdescription} onChange = {e=> onChange(e)} />
  </InputGroup>
  </Row>
  
  <Col>
  <br>
  </br>
  <br>
  </br>
  <Button variant="success" type="submit" style={{color:"#FFFFFF"}} >
  Send Job to Freelancers
  </Button>
  </Col>
  
  </Row>
  </Form.Group>
  </Form>
        </Container>
        </Col>
        </Row>
        </Fragment>
      )
}

PostJobs.propTypes = {
  addJob: PropTypes.func.isRequired
}

export default connect(null, {addJob})(PostJobs);