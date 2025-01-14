import React, {Fragment, useEffect} from 'react'
import {Badge,Container} from 'react-bootstrap'
import {connect} from 'react-redux';
import {getallprofiles} from '../actions/FreelancerProfile';
import PropTypes from 'prop-types';
import FreelancerProfileItems from './FreelancerProfileItems'
import SimpleNav from './SimpleNav'
const AllFreelancers = ({getallprofiles, FreelancerProfile:{freelancerprofiles, loading}}) => {

  
  useEffect(() => {
    getallprofiles()
  },[loading, getallprofiles])

    return(
        <Fragment>
            <div>
           < SimpleNav />
            </div>
            <br>
            </br>
            <h3 className="text-center">
    Our <Badge bg="success">Freelancers</Badge>
  </h3>
            <br>
            </br>
            <p className="text-center" bg="Primary">Browse and Connect with Freelancers</p>
            <br>
          </br>
        <Container>
          {freelancerprofiles.length > 0 ? (
            freelancerprofiles.map(freelancerprofile => (
              <FreelancerProfileItems key={freelancerprofile._id} freelancerprofile = {freelancerprofile} />
            ))
          ): <h4 variant="success">
          No Freelancers, come and check back later
          </h4>
          }
          </Container>   
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

AllFreelancers.propTypes = {
  getallprofiles : PropTypes.func.isRequired,
  freelancerprofile: PropTypes.object.isRequired
}

const mappingstatetoprops = state => ({
  FreelancerProfile : state.FreelancerProfile
});

export default connect(mappingstatetoprops, {getallprofiles})(AllFreelancers);