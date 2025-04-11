import { InputGroup,Container, Form, Row, Col, Button, Badge, FormControl, Image} from 'react-bootstrap';
import FreelancerViewNav from './FreelancerViewNav';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {addeducation} from '../actions/FreelancerProfile';
import React, {useState} from 'react';
import add from "./LandingImages/add.png";

function AddEducation ({addeducation}) {

    //const Navigate = useNavigate();

    const [educationdata, seteducationdata] = useState({
        courseofstudy : ' ',
        university: ' ',
        location: ' ',
        from: '',
        to: '',
        description: ' '
    
    })


    const {
        courseofstudy, university, location, from, to, description
    } = educationdata;

    const onChange = e => seteducationdata({...educationdata, [e.target.name]: e.target.value});

    const Navigate = useNavigate();


    const onSubmit= e => {
        e.preventDefault();
        addeducation({
            courseofstudy,
            university,
            location,
            from,
            to,
            description
        })
       Navigate('/freelancerdashboard')
      }

return ( <div>
    <FreelancerViewNav />
    <Row>
    <Col>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <Image style={{width:"500px", paddingLeft:"50px"}}src={add} />
</Col>
<Col style={{paddingRight:"100px"}}>
    <Container >
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <div>
    <h3 className="text-center">
Add <Badge bg="success">Education</Badge>
</h3>
</div>
    <Form.Group>
    <Form onSubmit = {onSubmit}>
        <Row>
<Col>
<Form.Label>Course Of Study</Form.Label>
<Form.Control placeholder="Tittle" name='courseofstudy' value={courseofstudy} onChange = {e=> onChange(e)}/>
</Col>
</Row>
<Col className="mb-3">
<Form.Group as={Col} controlId="formGridPassword">
<Form.Label>University</Form.Label>
<Form.Control  placeholder="university" 
name='university' value = {university}  onChange = {e=> onChange(e)}/>
</Form.Group>

<Form.Group as={Col} controlId="formGridPassword">
<Form.Label>Location </Form.Label>
<Form.Control type="location" placeholder="Location" 
name='location' value = {location} onChange = {e=> onChange(e)} />
</Form.Group>

<Form.Group as={Col} className="mb-3">
<Form.Label>From(YYYY-MM-DD)</Form.Label>
<Form.Control placeholder="yyyy-MM-dd"
name='from' value = {from}  onChange = {e=> onChange(e)}/>
</Form.Group>

<Form.Group as={Col} className="mb-3">
<Form.Label>To(YYYY-MM-DD)</Form.Label>
<Form.Control placeholder="yyyy-MM-dd"
name='to'  value = {to} onChange = {e=> onChange(e)} />
</Form.Group>
</Col>

<Row className="g-2">
<Col md>
<InputGroup>
<InputGroup.Text  style={{backgroundColor:"#246E19", color:"#FFFFFF"}}>Course Description</InputGroup.Text>
<FormControl as="textarea" aria-label="With textarea" 
name='description' value = {description} onChange = {e=> onChange(e)}/>
</InputGroup>
</Col>
</Row>
<br>
</br>
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

AddEducation.propTypes = {
    addeducation: PropTypes.func.isRequired
}

export default connect(null,{addeducation})(AddEducation);