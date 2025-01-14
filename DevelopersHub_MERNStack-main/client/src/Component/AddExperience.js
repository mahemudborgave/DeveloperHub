import { InputGroup,Container, Form, Row, Col, Button, Badge, FormControl, Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {addexperience} from '../actions/FreelancerProfile';
import {useState} from 'react';
import FreelancerViewNav from './FreelancerViewNav'
import add from "./LandingImages/add.png";


function AddExperience ({addexperience}) {

    //const Navigate = useNavigate();

    const [experiencedata, setexperiencedata] = useState({
        title : ' ',
        company: ' ',
        location: ' ',
        from: ' ',
        to: '',
        current: false,
        description: ' '
    
    })

    const [disabletodate, setdisabletodate ] = useState(false);

    const {
        title, company, location, from, to , current, description
    } = experiencedata;

    const onChange = e => setexperiencedata({...experiencedata, [e.target.name]: e.target.value});

    const Navigate = useNavigate();


    const onSubmit= e => {
        e.preventDefault();
        addexperience({
            title,
            company,
            location,
            from,
            to,
            current,
            description
        })
       Navigate('/freelancerdashboard')
      }

return (  <div>
    <FreelancerViewNav />
    <Row>
    <Col>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <Image style={{width:"600px", paddingLeft:"50px"}}src={add} />
</Col>
<Col style={{paddingRight:"100px"}}>
    <Container>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <div>
    <h3 className="text-center">
Add <Badge bg="success">Experience</Badge>
</h3>
</div>
    <Form.Group>
    <Form onSubmit = {onSubmit}>
        <Row>
<Col>
<Form.Label>Tittle</Form.Label>
<Form.Control placeholder="Tittle" name='title' value={title} onChange = {e=> onChange(e)}/>
</Col>
</Row>
<Col className="mb-3">
<Form.Group as={Col} controlId="formGridPassword">
<Form.Label>Company</Form.Label>
<Form.Control  placeholder="Company" 
name='company' value = {company}  onChange = {e=> onChange(e)}/>
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

<Form.Group className="mb-3" id="formGridCheckbox">
<Form.Check type="checkbox" label="Present" name='current' value = {current} onChange = {
    e=> {setexperiencedata({...experiencedata, current: !current});
    setdisabletodate(!disabletodate);
    }
} />
</Form.Group>

<Form.Group as={Col} className="mb-3">
<Form.Label>To(YYYY-MM-DD)</Form.Label>
<Form.Control placeholder="yyyy-MM-dd"
name='to'  value = {to} onChange = {e=> onChange(e)} disabled = {disabletodate ? 'disabled':''}/>
</Form.Group>
</Col>

<Row className="g-2">
<Col md>
<InputGroup>
<InputGroup.Text>Job Description</InputGroup.Text>
<FormControl as="textarea" aria-label="With textarea" 
name='description' value = {description} onChange = {e=> onChange(e)}/>
</InputGroup>
</Col>
</Row>
<br>
</br>
<Button variant="success" bg="success"type="submit">
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

AddExperience.propTypes = {
    addexperience: PropTypes.func.isRequired
}

export default connect(null,{addexperience})(AddExperience);