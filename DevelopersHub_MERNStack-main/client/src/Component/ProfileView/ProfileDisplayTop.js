import React, {Fragment} from 'react';
import {Container, Col, Row, Card, Image} from 'react-bootstrap';
import FreelancerProfileDisplayNav from './FreelancerProfileDisplayNav'
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import {BsYoutube, BsLinkedin, BsGlobe2, BsFillGeoFill} from 'react-icons/bs'
import PropTypes from 'prop-types'
import {TiSocialInstagram} from 'react-icons/ti';
import {FiCheckSquare} from 'react-icons/fi'
import { IconContext } from "react-icons";
import ReactStars from "react-rating-stars-component";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ProfileDisplayTop = ({
  freelancerprofile : {
  user: {FirstName,
     Email, 
     Linkdeln, 
     Description,
     Location, 
     UserName, icon},
  status,
  company,
  website,  
  skills,
  social,
  experience,
  githubusername
    } 
}) => {
  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a style={{color:"#000000"}} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
   );
  };

    return (
        <Fragment>
                <br>
                </br>
                <br>
                </br>
            <Container style={{align:"center"}}>
                <Col>
                    <Row className="justify-content-md-center">
                    <Card style={{ width: '40rem' }}>
  <Card.Body>
  <Image style={{width:250, padding: 30 }} src={icon} roundedCircle responsive />
    <br>
    </br>
    <br>
    </br>
    <Card.Title>{FirstName}</Card.Title>
    <br>
    </br>
    <Card.Subtitle className="mb-2 text-muted"><strong>Current Freelancing Status :</strong>{status}</Card.Subtitle>
    <a>
    <IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
      <BsLinkedin />
      </IconContext.Provider>{' '}{Linkdeln}</a>
    <br>
    </br>
    <br>
    </br>
    <a> <IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
      <BsFillGeoFill /></IconContext.Provider>
    {' '}{Location}</a>
     <br>
    </br>
    <br>
    </br>
    <a><IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
      <BsGlobe2 /></IconContext.Provider>{' '}{website}</a>
    <br>
    </br>
    <br>
    </br>
    <strong>Skills Based Rating:</strong> 
    <br>
    </br>
    <Rating name="disabled" value={skills.length} readOnly />
    <br>
    </br> <br>
    </br>
    <Mailto style={{color:"#000000"}}email={Email} subject={"Developer's Hub"} body={
        "your Profile looks interesting are you interested in working on a Job with us!"}
    >
      Send a Message!
  </Mailto>
  <br>
  </br>
  <br>
    </br>
    {social && social.twitter && (
             <a href={social.twitter}>
               <IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
               <FaTwitter /></IconContext.Provider></a>
    )} {' '}
     {social && social.facebook && (
      <a href={social.facebook}>
         <IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}><FaFacebookSquare />
         </IconContext.Provider></a>
    )}{' '}
    {social && social.instagram && (
      <a href={social.instagram}><IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
      <TiSocialInstagram /></IconContext.Provider></a>
    )}{' '}
     {social && social.youtube && (
      <a href={social.youtube}><IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
        <BsYoutube /></IconContext.Provider></a>
    )}
  </Card.Body>
</Card>
                    </Row>
                    <br>
                    </br>
                    <Row className="justify-content-md-center">
                    <Card style={{ width: '40rem' }}>
                    <Card.Body>
    <Card.Title className="justify-content-md-center">{FirstName}'s Bio</Card.Title>
    <br>
    </br>
   <p>{Description}</p>
    <br>
    </br>
  </Card.Body>
  </Card>
                    </Row>
                    <br>
                    </br>
                    <Row className="justify-content-md-center">
                    <Card style={{ width: '40rem' }}>
                    <Card.Body>
    <Card.Title>Skill Sets</Card.Title>
    <br>
    </br>
    <div>
      {skills.map((skill, index) =>(
        <div>
          <i /><IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
            <FiCheckSquare /></IconContext.Provider >
            {' '}{skill}
          </div>
      ))}
      </div>
  </Card.Body>
  </Card>
                    </Row>
                </Col>
            </Container>
            <br>
            </br>

        </Fragment>
    )
}

ProfileDisplayTop.propTypes = {
 freelancerprofile: PropTypes.object.isRequired
}

export default ProfileDisplayTop;