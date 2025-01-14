import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getJobs} from '../../actions/Job';
import { startTransition } from 'react';
import JobView from './JobView'
import {Badge, Carousel, Card, Row, Col} from 'react-bootstrap'
import FreelancerViewNav from '../FreelancerViewNav'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//import{Card, Container, Row, Col} from 'react-bootstrap';
//import {BsYoutube, BsLinkedin, BsGlobe2, BsFillGeoFill} from 'react-icons/bs'
//import { Link } from "react-router-dom"; 

const Jobs = ({getJobs, Job:{jobs, loading}}) => {

    useEffect(() => {
        getJobs();
    },[getJobs]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

   return(
    <Fragment>
        <div>
        <FreelancerViewNav />
        </div>
        <br>
        </br>
        <div>
        <h4 className="text-center">
    View<Badge bg="success" >All Jobs </Badge>
  </h4>
        </div>
    <center>
      <div>
      {jobs.map(jobs => (
                <JobView key={jobs._id} jobs= {jobs}/>
                )
                )}
      </div>
    </center>           
       </Fragment>
   )
}


Jobs.propTypes = {
    getJobs: PropTypes.func.isRequired,
    Job:PropTypes.object.isRequired,
};  

const mappingstatetoprops = state => ({
    Job: state.Job,
})


export default connect(mappingstatetoprops,{getJobs})(Jobs); 