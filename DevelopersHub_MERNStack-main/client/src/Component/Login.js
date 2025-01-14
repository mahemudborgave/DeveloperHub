import {Card, Button, Container, CardGroup,Col ,Row, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import FooterNav from "./FooterNav"
import SimpleNav from "./SimpleNav"
import { useNavigate } from 'react-router-dom';
import frame from "./LandingImages/Frame.png"

function Login(){
  const navigate = useNavigate();


  const ClickHandler1 = () => {
    navigate('/freelancerlogin')
  }

  const ClickHandler2 = () => {
    navigate('/businesslogin')
  }
   return( <div>
    <SimpleNav />
    <br>
    </br>
    <br>
    </br>
    <div>
            <h3 className="text-center">
        Welcome to <Badge bg="success">Login</Badge>
      </h3>
      </div>
    <br>
    </br>
    <Col>
    <center>
    <img src={frame} style={{width:"300px"}} />
    </center> 
    </Col>
    <Col>
    <br>
    </br>
    <br>
    </br>
   <div className="d-flex justify-content-around">
    <Card className='text-center'style={{ width: '40rem' , padding_left:"700px" }}>
  <Card.Body>
    <Card.Text>
      If you are a freelancer with an account. Click Below!
    </Card.Text>
    <Button className = "col-md-4 text-center"variant="success" onClick = {ClickHandler1}  >Login as Freelancer</Button> 
  </Card.Body>
</Card>
{' '}
    <Card className='text-center'  style={{ width: '40rem' }}>
  <Card.Body>
    <Card.Text>
    If you are a Business Provider with an account. Click Below!
    </Card.Text>
    <Button className = "col-md-4 text-center"variant="success" onClick = {ClickHandler2}  >Login as Business</Button> 
  </Card.Body>
</Card>
</div>
<br>
</br>
<p  className="text-center">If you don't have an account register <Link  style={{color:"#000000"}} to="/register">Here!</Link></p>
</Col>
</div>
   )
};

export default Login;