import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {Button, Table, Badge} from 'react-bootstrap';
import {removeexperience} from '../actions/FreelancerProfile'
//import './DisplayExperience.css'

const DisplayExperience = ({ experience, removeexperience }) => {
  const allexperience = experience.map(expri => (
    <tr key={expri._id}>
        <td>{expri.company}</td>
        <td >{expri.title}</td>
        <td>
            <Moment format='YYYY/MM/DD'>{expri.from}</Moment> - {
                expri.to === null ? ('Present'): (<Moment format='YYYY/MM/DD'>{expri.to}</Moment>)
            }
        </td>
        <td>
        <Button  onClick = {()=> removeexperience(expri.id)} variant="success" type="" >
    Delete
  </Button>
        </td>
    </tr>
  ));

  return (
          <Fragment>
             {allexperience.length > 0 ? (
          <Fragment>
  <div className="d-flex justify-content-around">
          <Table striped bordered hover className = 'table' variant = "success">
              <thead>
                  <tr>
                      <th >Company</th>
                      <th >Title</th>
                      <th >Duration</th>
                      <th />
                  </tr>
              </thead>
              <tbody>{allexperience}</tbody>
          </Table>
          </div> 
          </Fragment>): (<p></p>) }
      </Fragment>

  );


}



DisplayExperience.propTypes  = {
  experience: PropTypes.array.isRequired,
  removeexperience: PropTypes.func.isRequired
}


export default connect(null, {removeexperience})(DisplayExperience);