import  React, {Fragment} from 'react';
import {CardGroup,Container, Badge, Card, Row, Col, Button, Image} from 'react-bootstrap'
import NavBar from './NavBar'
import frame from "./LandingImages/Frame.png"
import bg from "./LandingImages/landi.jpg"
import team from "./LandingImages/Team.png"
import unique from "./LandingImages/unique.png"
import how from "./LandingImages/How.png"
import Thumb from './LandingImages/thumbs.png'
import Student from './LandingImages/student.png'
import slide2 from "./LandingImages/slide2.png"
import freelancer from './LandingImages/freelancer.png'
//import FooterNav from "./FooterNav"
//import LandingCarousel from "./LandingCarousel"
import {BsFillPersonFill, BsQuestionCircleFill} from 'react-icons/bs'
import {FiCheckSquare} from 'react-icons/fi'
import {MdSecurity} from 'react-icons/md'
import {useNavigate} from 'react-router'


function Landing()  {

  const navigate = useNavigate();
  
  const ClickHandler1 = () => {
    navigate('/login')
  }

  const ClickHandler2 = () => {
    navigate('/register')
  }

  const ClickHandler3 = () => {
    navigate('/allfreelancers')
  }

  return (
    <Fragment>
      <NavBar />
      <Row style={{backgroundColor:"#BCFFE7", height:"600px"}}> 
  <Col style={{paddingLeft:"85px", paddingTop:"100px"}}>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <h4  style={{color:"#000000", textAlign:'left'}}>Welcome to</h4>
  <h1  style={{color:"#000000"}}>Developer's Hub</h1>
  <br>
  </br>
  <br>
  </br>
  <Button className = "col-md-3 text-center" variant="success" onClick = {ClickHandler1}  >Login</Button> 
  {' '}{' '}{'    '}
  <Button className = "col-md-3 text-center" variant="outline-success"onClick = {ClickHandler2}  >Register</Button> 
  </Col>
  <Col>
  <img style={{width:"600px", paddingTop:"100px"}}src={frame} alt="" />
  </Col>
</Row>
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
<br>
</br>
<br>
</br>
<h3 className="text-center">
       Our <Badge className = "text-center" bg="success">Team</Badge>
      </h3>
<br>
</br>
      <Row>
      <center>
        <img src={team} style={{width:"600px"}} />
        <br>
      </br>
      <br>
      </br>
      </center>
      <Col >
        <h4 className="text-center" style={{paddingLeft:"400px"}}>Developer's</h4>
        <p className="text-center" style={{paddingLeft:"400px"}}>Find developers with skills which perfectly match your business requirements.</p>
        </Col>
        <Col style={{paddingRight:"50px"}}>
        <h4 className="text-center" style={{paddingRight:"400px"}}>Student's</h4>
        <p className="text-center" style={{paddingRight:"430px"}}>Find university student's who can help you grow your business with their skill sets.</p>
        </Col>
      <center>
      <br>
      </br>
      <br>
      </br>
    <Button style={{color:"#FFFFFF"}}
     className = "col-md-2 text-center"
      variant="success" 
      onClick = {ClickHandler3} >View Freelancers</Button> 
    </center>
</Row>
<br>
</br>
<br>
</br>
<Row>
<Col>
<img style={{width:"550px"}} src={unique}/>
</Col>
<Col>
<Row>
  <Col style={{paddingRight:"100px", width:"20rem", height:"10rem"}} >
  <h5><BsFillPersonFill /> Freelancers</h5> 
    <p> 
    <FiCheckSquare /> Register as freelancers and help businesses grow. 
    </p>
    </Col>
    <Col style={{paddingRight:"100px"}} >
    <h5><BsFillPersonFill /> Business Providers</h5> 
    <p> 
    <FiCheckSquare /> Help in finding developers with skills which perfectly match your business requirements.</p> 
    </Col>
</Row>
<Row>
  <Col style={{paddingRight:"100px"}}>
  <h4>< MdSecurity /> Security</h4> 
    <p> 
    <FiCheckSquare /> We protect your business related information.</p> 
  </Col>
  <Col style={{paddingRight:"100px"}}>
    <Card className="text-center" bg="success" style={{color:"#FFFFFF"}}>
      <br>
      </br>
    <h6><BsQuestionCircleFill /> What makes use Unique</h6> 
    <p> 
    <FiCheckSquare /> No more biding on jobs, Hassle free development.</p> 
    </Card>
  </Col>
</Row>
</Col>
</Row>
<Row style={{backgroundColor:"#BCFFE7"}}>
 
</Row>
<Container>
<br>
</br>
<h3 className = "text-center"> How <Badge className = "text-center" bg="success">it works</Badge></h3>
<br>
</br>
<Row>
<Col>
<img style={{width:"500px"}} src={slide2}/>
</Col>
<Col>
<h4 className = "text-center"><BsFillPersonFill /> Freelancers</h4>
<div className="text-center">
<FiCheckSquare /> Register
<br>
</br>
<FiCheckSquare /> Create profile
<br>
</br>
<FiCheckSquare /> View jobs posted by business
<br>
</br>
<FiCheckSquare /> Show Interest in Job
<br>
</br>
<FiCheckSquare /> Communicate with Business(If business selects you for the job)
</div>
<br>
</br>
<h4 className = "text-center"><BsFillPersonFill /> Business</h4>
<div className="text-center">
<FiCheckSquare /> Register
<br>
</br>
<FiCheckSquare /> Create profile
<br>
</br>
<FiCheckSquare /> Post Jobs
<br>
</br>
<FiCheckSquare /> View Available Freelancers
<br>
</br>
<FiCheckSquare /> View interested freelancers for your jobs
<br>
</br>
<FiCheckSquare /> Get the list of recommended freelancers for your job
<br>
</br>
<FiCheckSquare /> Communicate with freelancers
</div>
</Col>
</Row>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
</Container>
</Fragment>
  )
}

export default Landing;