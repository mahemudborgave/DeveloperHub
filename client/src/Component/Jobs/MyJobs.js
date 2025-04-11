import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { startTransition } from 'react';
import BusinessViewNav from '../BusinessViewNav'
import MyJobView from './MyJobView'
import {getallprofiles} from '../../actions/FreelancerProfile'
import {Badge} from 'react-bootstrap'
//import{Card, Container, Row, Col} from 'react-bootstrap';
//import {BsYoutube, BsLinkedin, BsGlobe2, BsFillGeoFill} from 'react-icons/bs'
//import { Link } from "react-router-dom"; 

const MyJobs = ({getallprofiles, Job:{jobs, loading}, BusinessAuthentication:{
    business:{
        _id
    }
}}) => {

    useEffect(() => {
        getallprofiles()
      },[loading, getallprofiles])

   return(
    <Fragment>
        <div>
        <BusinessViewNav />
        </div>
        <br>
        </br>
        <div>
        <h4 className="text-center">
    View<Badge bg="success" >My Jobs </Badge>
  </h4>
        </div>
        <div>
        {jobs.map(job => job.business && job.business._id === _id ? (<MyJobView key={jobs._id} jobs= {job}/>):
        (<Fragment></Fragment>))}

           {/* {jobs.map(job => job.business._id === _id ? (<MyJobView key={jobs._id} jobs= {job}/>):
           (<Fragment></Fragment>))} */}
           <br>
           </br>        </div>
       </Fragment>
   )
}


MyJobs.propTypes = {
    Job:PropTypes.object.isRequired,
    BusinessAuthentication:PropTypes.object.isRequired,
    getallprofiles: PropTypes.func.isRequired
};  

const mappingstatetoprops = state => ({
    Job: state.Job,
    BusinessAuthentication: state.BusinessAuthentication
})


export default connect(mappingstatetoprops,{getallprofiles})(MyJobs); 