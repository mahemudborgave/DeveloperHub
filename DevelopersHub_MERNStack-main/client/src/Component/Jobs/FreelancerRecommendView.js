import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate, Link} from 'react-router-dom';

import {Button, Card, Badge, Row, Col, Container, Toast, ListGroup, Alert, Image} from 'react-bootstrap'


const FreelancerRecommendView = ({freelancerprofile: {
    user: {_id, FirstName,
        UserName,
        Description,
        Location,icon},
    company,
    status,
    skills,
    githubusername,
    social,
    experience,
    education,
    Student,
    website

}}) => {
    const [showA, setShowA] = useState(false);
  
    const toggleShowA = () => setShowA(!showA);


    return (
        <Fragment>
            <div><br>
        </br></div>
        <Container>
  {status === 'Available' &&
  <Row className="justify-content-md-center">
<Col xs={3} md={4}>
  <Card  className="block-example border border-dark" style={{ width: '35rem' }}>
    <Card.Body>
        <div className="d-flex justify-content-around" >
        <Image style={{width:250, padding: 30 }} src={icon} roundedCircle responsive />
      <p>
         <strong>@UserName: </strong>  {UserName}
      </p>
      <p> <strong>@Status: </strong>  {status}</p>
      </div>
      <Card.Title><strong>Name: </strong>  {FirstName}</Card.Title>
      <Col md={6} className="mb-2">
    <Button size="sm" variant="outline-dark" onClick={toggleShowA} className="mb-1">
        Skills
    </Button>
    <Toast show={showA} onClose={toggleShowA}>
      <Toast.Body> {skills.slice(0, 4).map((skill, index) => (
          <li key={index} >
              {skill}
          </li>
      ))}</Toast.Body>
    </Toast>
  </Col>
      <Card.Text>
      <strong>About :</strong> {Description}
      </Card.Text>
    </Card.Body>
    <Col md={6} className="mb-2">
    <Button  size="sm" variant="outline-secondary"><Link to={`user/${_id}`}>View Profile</Link></Button>
    </Col>
    <br>
    </br>
    <Card.Footer>
  <small className="text-muted"> <strong>Location:</strong> {Location}</small>
</Card.Footer>
  </Card>
</Col>
</Row>
}
</Container>
</Fragment>
    )
}

FreelancerRecommendView.propTypes = {
    freelancerprofile: PropTypes.object.isRequired
}

export default FreelancerRecommendView;