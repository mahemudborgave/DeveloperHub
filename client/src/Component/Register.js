import FooterNav from "./FooterNav"
import SimpleNav from "./SimpleNav"
import {Card, Button, Container, CardGroup, Badge, Row, Col} from 'react-bootstrap'
import Image1 from "./LandingImages/registernobackground.png"
//import Image2 from "./RegisterImages/image2.jpg"
//import { createBrowserHistory as history} from 'history';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const ClickHandler1 = () => {
    navigate('/freelancerregistration')
  }

  const ClickHandler2 = () => {
    navigate('/businessregistration')
  }
    return (
        <div>
            <SimpleNav />
            <br>
            </br>
            <h4 className="text-center">Registeration</h4>
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
              <img style ={{width:"600px"}}src={Image1} />
              </Col>
              <Col>
              <br>
              </br>
              <br>
              </br>
              <Row style={{paddingRight:"100px"}}>
              <Card className="text-center">
  <Card.Body>
    <Card.Title>Register as Freelancer</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button onClick={ClickHandler1} variant="success">Register</Button>
  </Card.Body>
</Card>
                </Row>
                <br>
              </br>
              <br>
              </br>
                <Row style={{paddingRight:"100px"}}>
              <Card bg="success" style={{color:"#FFFFFF"}}className="text-center">
  <Card.Body>
    <Card.Title>Register as Business</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="success" onClick={ClickHandler2} style={{color:"#FFFFFF"}}>Register</Button>
  </Card.Body>
</Card>
                </Row>
              </Col>
              </Row>
       
</div>
)
}
export default Register;