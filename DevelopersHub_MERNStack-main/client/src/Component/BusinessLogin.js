import {Button,Form, Badge, Container, Row, Image, Col} from 'react-bootstrap'
import FooterNav from "./FooterNav"
import SimpleNav from "./SimpleNav"
import {loginBusiness} from '../actions/businessauthentication';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../Component/LandingImages/log.png'

function BusinessLogin({loginBusiness, authentication}){
  const navigate = useNavigate();

  const [formdetails, setFormDetails] = useState({
    ContactEmail:'',
    Password: ''
  });
    const {ContactEmail, Password} = formdetails;
      
    const onChange = e => setFormDetails({...formdetails, [e.target.name]: e.target.value})

    const onSubmit =  e =>{
      e.preventDefault();
      loginBusiness({ContactEmail, Password});
      
  }
  if(authentication){
    navigate('/businessdashboard')
  }
  
  return(
    <div>
    <SimpleNav />
    <br>
    </br>
    <br>
    </br>
    <div className="d-flex justify-content-around">
            <h1 className="text-center">
            Business <Badge bg="success">Login</Badge>
      </h1>
      </div>
    <Container>
    <Row>
    <Col>
    <br>
    </br>
    <Image style={{width:"400px"}}src={Image1} />
    </Col>
    <Col>
    <br>
    </br>
    <br>
    </br>
      <Form onSubmit = {onSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="ContactEmail" value={ContactEmail} onChange = {e=> onChange(e)} />
    <Form.Text className="text-muted"  >
      Enter the Email used for registration
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="Password" value={Password} onChange = {e=> onChange(e)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>
</Col>
</Row>
</Container>
    </div>
    );

}

BusinessLogin.propTypes = {
  loginBusiness:PropTypes.func.isRequired,
  authentication : PropTypes.bool
}

const mappingStatetoProps = state => ({
  authentication : state.BusinessAuthentication.authentication
});

export default connect(mappingStatetoProps,{loginBusiness})(BusinessLogin);