import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getgithubdata} from '../../actions/FreelancerProfile';
import{Card, Container, Row, Col} from 'react-bootstrap';
import {BsYoutube, BsLinkedin, BsGlobe2, BsFillGeoFill} from 'react-icons/bs'
import { Link } from "react-router-dom"; 
import { IconContext } from "react-icons";

const GitHubProfile = ({githubusername, githubrepository}) => {

   return(
    <Fragment>
   <Container >
    <Col >
        <Row className="justify-content-md-center">
       <Card style={{ width: '40rem' }}>
           <Card.Title>Git Hub Repository Link</Card.Title>
           <Card.Text><IconContext.Provider value={{ color: "#246E19", className: "global-class-name" }}>
               <BsGlobe2 /></IconContext.Provider>:{`https://github.com/${githubusername}`}</Card.Text>
       </Card>
       </Row>
       </Col>
       </Container>
       </Fragment>
   )
}


GitHubProfile.propTypes = {
    getgithubdata: PropTypes.func.isRequired,
    githubrepository: PropTypes.array.isRequired,
    githubusername: PropTypes.string.isRequired
};

const mappingstatetoprops = state => ({
    githubrepository: state.FreelancerProfile.githubrepository
})


export default connect(mappingstatetoprops,{getgithubdata})(GitHubProfile); 