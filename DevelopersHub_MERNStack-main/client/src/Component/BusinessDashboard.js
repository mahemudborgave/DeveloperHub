import FooterNav from "./FooterNav";
import BusinessDashboardNav from "./BusinessDashboardNav";
import {Button, Container, Badge, Col,Image, Row, Card} from 'react-bootstrap'
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getbusinessprofile} from "../actions/BusinessProfile";
import wel from "./LandingImages/wel.png";
import edit from "./LandingImages/edit.png";
import search from "./LandingImages/search.png";
import experience from "./LandingImages/experience.png";
import free from "./LandingImages/free.png";

const BusinessDashboard = ({getbusinessprofile,
  BusinessAuthentication:{business},
  BusinessProfile:{businessprofile, loading}}) => {

    const Navigate = useNavigate();

    const ClickHandler1 = () =>{
        Navigate('/createbusinessprofile')
    }

    const ClickHandler2 = () =>{
        Navigate('/editbusinessprofile')
    }

    const freelancerView = () =>{
      Navigate('/allfreelancersbusiness')
  }

    const postjobView = () => {
      Navigate('/businessdashboard/postjobs')
    }
   
    const myjobview = () => {
      Navigate('/businessdashboard/myjobs')

    }

  useEffect(() => {
    getbusinessprofile();
 }, [getbusinessprofile, loading]);


    return (
      <Fragment>
      <div>
          <BusinessDashboardNav />
<div>
  <Fragment>
  <br>
  </br>
  <h3 className="text-center">
  Business <Badge bg="success">Dashboard</Badge>
    </h3>
    </Fragment>
    <Fragment>
    <br>
    </br>
  < Container>
    <h2>
  Welcome     <Badge bg="success"> {business && business.ContactName}</Badge>
</h2>
<br>
  </br>
  <br>
  </br>
{businessprofile !== null ? (<Fragment>
  <div className="text-center">
  <Row>
  <Col>
  <Card.Img variant="top" style={{width:"230px"}} src={experience}/>
  <Card.Body>
    <Card.Text>
    Post Jobs and see our recommended list of freelancers
    </Card.Text>
    <Button variant="success" type="submit" onClick ={postjobView} >
  Post Jobs
</Button>
  </Card.Body>
</Col>
<Col>
  <Card.Img variant="top" style={{width:"200px"}} src={free}/>
  <Card.Body>
    <Card.Text>
    View our available freelancers
    </Card.Text>
    <Button variant="success" type="submit" onClick ={freelancerView} >
  Freelancers
</Button>
  </Card.Body>
</Col>
</Row>
<br>
</br>
<br>
</br>
<Row>
{'  '}<Col>
  <Card.Img variant="top" style={{width:"200px"}} src={edit}/>
  <Card.Body>
    <Card.Text>
    You can edit your profile details by clicking below!
    </Card.Text>
    <Button variant="success" type="submit" onClick ={ClickHandler2} >
  Edit Profile
</Button>
  </Card.Body>
</Col>
<Col>
  <Card.Img variant="top" style={{width:"230px"}} src={search}/>
  <Card.Body>
    <Card.Text>
    View the list of Jobs you have posted
    </Card.Text>
    <Button variant="success" type="submit" onClick ={myjobview} >
  My Jobs
</Button>
  </Card.Body>
</Col>
</Row>
</div>
  </ Fragment>):
  (<Fragment><center>
    <Image style={{width:"400px"}}src={wel} />
    <p>Setup your Profile to get started</p>
  <Button variant="success" type="submit" onClick ={ClickHandler1}>
    Create Profile
  </Button>
  </center>
  </ Fragment >)
  }
</Container>

</Fragment>
</div>
</div>

</Fragment>
)
    }
    BusinessDashboard.propTypes = {
      getbusinessprofile: PropTypes.func.isRequired,
      BusinessAuthentication: PropTypes.object.isRequired,
      BusinessProfile : PropTypes.object.isRequired
  };
  
  const mappingstatetoprops = state =>({
    BusinessAuthentication : state.BusinessAuthentication,
    BusinessProfile : state.BusinessProfile
  })

export default connect(mappingstatetoprops,{getbusinessprofile})(BusinessDashboard);
