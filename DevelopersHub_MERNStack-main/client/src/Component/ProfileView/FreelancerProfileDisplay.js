import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import {getfreelancerprofilebyid} from '../../actions/FreelancerProfile'
import { useMatch } from 'react-router'
import FreelancerProfileDisplayNav from './FreelancerProfileDisplayNav'
import ProfileDisplayTop from './ProfileDisplayTop';
import ProfileExperience from './ProfileExperience'
import { Card, Row, Container, Col, Image, Badge} from 'react-bootstrap';
import GitHubProfile from './GitHubProfile';
import ProfileEducation from './ProfileEducation'
import wel from "../LandingImages/wel.png";


const FreelancerProfileDisplay = ({ getfreelancerprofilebyid, FreelancerProfile:{freelancerprofile, loading}}) => {
    

    const match = useMatch('allfreelancers/user/:id');

      
    useEffect (() => {
        getfreelancerprofilebyid(match.params.id);
    },[getfreelancerprofilebyid, match.params.id])
    
    return(
        <Fragment>
        <div>
        <FreelancerProfileDisplayNav />
        </div>
       
        {freelancerprofile!== null &&
        <div>
            <center>
                <Row>
                    <Col style={{paddingLeft:"250px"}}>
                    <Image style={{width:"400px", paddingLeft:"100px"}}src={wel} />
                    </Col>
                    <Col style={{paddingRight:"500px"}}>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
    <Card.Text>
     <h3> View Our<Badge bg="success">{freelancerprofile.user.FirstName}'s</Badge></h3>Profile below!
    </Card.Text>
  
                    </Col>
                </Row>
            </center>
        <ProfileDisplayTop freelancerprofile={freelancerprofile} />
         <div>
         {freelancerprofile.education.length > 0 ? (<Fragment>
                 {freelancerprofile.education.map(education => (
                     <ProfileEducation key={education._id} education = {education} />
                 ))}
             </Fragment>):(<Fragment>
                 {freelancerprofile.experience.map(experience => (
                     <ProfileExperience key={experience._id} experience = {experience} />
                 ))}
             </Fragment>)}
         </div>
         <br>
             </br>
         <Fragment>
             <GitHubProfile githubusername={freelancerprofile.githubusername}/> 
         </Fragment>
                       </div>

         }
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
     </Fragment>
    )
}

FreelancerProfileDisplay.propTypes = {
    getfreelancerprofilebyid: PropTypes.func.isRequired,
    freelancerprofile : PropTypes.object.isRequired,
    //match: PropTypes.object.isRequired,

}

const mappingStatetoProps = state =>({
    FreelancerProfile : state.FreelancerProfile
})

export default connect(mappingStatetoProps, {getfreelancerprofilebyid})(FreelancerProfileDisplay);