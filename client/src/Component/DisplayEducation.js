import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {Button, Table, Badge} from 'react-bootstrap';
import {removeeducation} from '../actions/FreelancerProfile'
//import './DisplayExperience.css'

const DisplayEducation = ({ education, removeeducation }) => {
  const alleducation = education.map(edu => (
    <tr key={edu._id}>
        <td>{edu.university}</td>
        <td >{edu.courseofstudy}</td>
        <td>
            <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - 
            <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        </td>
        <td>
        <Button  onClick = {()=> removeeducation(edu.id)} variant="success" type="" >
    Delete
  </Button>
        </td>
    </tr>
  ));

  return (
      
          <Fragment>
            { alleducation.length > 0 ? (
          <Fragment>
  <div className="d-flex justify-content-around">
          <Table striped bordered hover className = 'table' variant = "success">
              <thead>
                  <tr>
                      <th >University</th>
                      <th >Course Of Study</th>
                      <th >Duration</th>
                      <th />
                  </tr>
              </thead>
              <tbody>{alleducation}</tbody>
          </Table>
          </div></Fragment>):(<p></p>) }
      </Fragment>

  );


}



DisplayEducation.propTypes  = {
  education: PropTypes.array.isRequired,
  removeeducation: PropTypes.func.isRequired
}


export default connect(null, {removeeducation})(DisplayEducation);