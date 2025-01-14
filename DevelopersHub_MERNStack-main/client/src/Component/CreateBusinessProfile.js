import React, { Fragment, useState } from 'react';
import { Button, Container, Form, Row, InputGroup, Col, Badge, FormControl, Image} from 'react-bootstrap'
//import FooterNav from "./FooterNav";
import BusinessViewNav from "./BusinessViewNav";
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createbusinessprofile} from '../actions/BusinessProfile'
import 'bootstrap/dist/css/bootstrap.min.css';
import edit from "./LandingImages/edit.png";

const CreateBusinessProfile = ({createbusinessprofile, BusinessProfile: todashboard}) => {

  const Navigate = useNavigate();

  //const Navigate = useNavigate();

  const [profiledata, setprofiledata] = useState({
    website:'',
    status:'',
    employeecount:'',
    established:'',
    clients:'',
    companycategory:''
  });

  const {
    website,
    status,
    employeecount,
    established,
    clients,
    companycategory
  } = profiledata;

  const onChange = e => setprofiledata({...profiledata, [e.target.name]: e.target.value});

  const onSubmit= e => {
    e.preventDefault();
    createbusinessprofile({ website,
        status,
        employeecount,
        established,
        clients,
        companycategory});
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
      <Form onSubmit={e => onSubmit(e)}>
    <Form.Group>
    <Form >
    <Row>
    <Col>
    <Form.Label>Company Website</Form.Label>
      <Form.Control placeholder="Company's Website Link" name='website' value={website} onChange = {e=> onChange(e)} />
    </Col>
    <Col>
    <Form.Label>No of Employees</Form.Label>
      <Form.Control placeholder="No of Employees" name='employeecount' value={employeecount} onChange = {e=> onChange(e)}/>
    </Col>
    <Col>
    <Form.Label>Established Year</Form.Label>
      <Form.Control placeholder="Year of Establishment" name='established' value={established} onChange = {e=> onChange(e)} />
    </Col>
  </Row>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridStatus" >
      <Form.Label>Company Status</Form.Label>
      <Form.Select value={status} name="status" defaultValue="Choose..." onChange = {e=> onChange(e)}  >
        <option value='0'>Choose...</option>
        <option value='Holding Company'>Holding Company</option>
        <option value='Associate Company'>Associate Company</option>
        <option value='Company Limited by Shares'>Company Limited by Shares</option>
        <option value='Company Limited by Guarantee'>Company Limited by Guarantee</option>
        <option value='Unlimited Liability Company'>Unlimited Liability Company</option>
        <option value='Unlisted Company'>Unlisted Company</option>
        <option value='Listed Company'>Listed Company</option>
        <option value='Government Company'>Government Company</option>


      </Form.Select>
    </Form.Group>

    <Col className="mb-3">
    <Form.Group as={Col} controlId="formGridStatus" >
      <Form.Label>Company's Category</Form.Label>
      <Form.Select value={companycategory} name="companycategory" defaultValue="Choose..." onChange = {e=> onChange(e)}  >
        <option value='0'>Choose...</option>
        <option value='Service Company'>Service Company</option>
        <option value='Retailers'>Retailers</option>
        <option value='Manufacturers'>Manufacturers</option>
      </Form.Select>
    </Form.Group>
    </Col>

  <Row className="g-2">
  <Col md>
  <InputGroup>
    <InputGroup.Text>Major Clients</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" placeholder="Enter Clients" name='clients' value={clients}
     onChange = {e=> onChange(e)}/>
  </InputGroup>
  <p>add Clients seperated by "," (eg.Google, Amazon, Tesla)</p>
  </Col>
  </Row>
  </Row>
  </Form>
</Form.Group>
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

CreateBusinessProfile.propTypes = {
  createbusinessprofile: PropTypes.func.isRequired,
};


export default connect(null,{createbusinessprofile})(CreateBusinessProfile);
