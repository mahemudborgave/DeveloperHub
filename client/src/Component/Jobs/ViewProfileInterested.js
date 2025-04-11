import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import {getfreelancerprofilebyid} from '../../actions/FreelancerProfile'
import { useMatch } from 'react-router'
//import FreelancerProfileDisplayNav from './FreelancerProfileDisplayNav'
import ProfileDisplayTop from '../ProfileView/ProfileDisplayTop';
import ProfileExperience from '../ProfileView/ProfileExperience'
import { Card, Row, Container } from 'react-bootstrap';
import GitHubProfile from '../ProfileView/GitHubProfile';
import ProfileEducation from '../ProfileView/ProfileEducation';


const ViewProfileInterested = ({ getfreelancerprofilebyid, FreelancerProfile:{freelancerprofile, loading}}) => {
    

    const match = useMatch('allfreelancers/user/:id');

      
    useEffect (() => {
        getfreelancerprofilebyid(match.params.id);
    },[getfreelancerprofilebyid, match.params.id])
    
    return(
        <Fragment>
           <div>
           </div>
           {freelancerprofile!== null &&
           <div>
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