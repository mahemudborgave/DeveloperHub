import React, {Fragment} from 'react';
import {Card, Button, Row, Col, Badge} from 'react-bootstrap';
import {GiMoneyStack} from 'react-icons/gi'
import {BsFillClockFill, BsFillGeoFill} from 'react-icons/bs'
import {FiCheckSquare} from 'react-icons/fi'
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';    
import { PropTypes } from 'prop-types';
import JobInterested from './JobInterested'
import { IconContext } from "react-icons";

const MyJobView = ({Authentication,
  jobs:{
 business:{
 CompanyName,
 ContactName,
 ContactEmail,
 Location
},
_id,
 jobtitle,
 jobdescription,
 skillsetreq,
 jobbudget,
 jobduration,
 interested,
 date
}}) => {

 
   
    return (
      <Fragment>
      <br>
      </br>
      <Row className="justify-content-md-center">
      <Col xs={2} md={4}>
      <Card style={{width:'25rem'}}className="text-center">
<Card.Header><strong><h6>Company:</h6></strong>{CompanyName}</Card.Header>
<Card.Body style={{backgroundColor:""}}>
<Card.Title><strong>Job: </strong>{jobtitle}</Card.Title>
<Card.Text style={{color:"#606060"}}>
{jobdescription}
</Card.Text>
<Card.Text>
<Card.Text>
   Skills Required: 
   </Card.Text>
{skillsetreq.map((skillsetreq, index) =>(
  <div>
  <Row>
      <Col>
   <i /><IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
           <FiCheckSquare /></IconContext.Provider>{' '}{skillsetreq}
   </Col> 
   </Row>
  </div>
))}
</Card.Text>
<Card.Text>
<IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
<GiMoneyStack /></IconContext.Provider>{' '}{jobbudget}
</Card.Text>
<Card.Text>
<IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
<BsFillClockFill /></IconContext.Provider>{' '}{jobduration}
</Card.Text>
</Card.Body>
<Button variant="outline-success-md4" ><Link style={{color:"#469D30"}} to={`/businessdashboard/myjobs/${_id}`}>View Job Details</Link></Button>
<Card.Footer className="text-muted"><BsFillGeoFill />{' '}{Location}
<br>
</br>
<div><p>Posted On: <Moment format='DD/MM/YYYY'>{date}</Moment></p></div>
</Card.Footer>
</Card>
</Col>
</Row>
</Fragment>
    );
}

MyJobView.propTypes = {
  jobs: PropTypes.object.isRequired
}

const mappingstatetoprops  = state => ({ 
 BusinessAuthentication: state.Authentication
})


export default connect(mappingstatetoprops,{})(MyJobView);