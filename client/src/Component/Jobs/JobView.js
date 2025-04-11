import React, { Fragment, useState } from "react";
import { Card, Button, Row, Col, Badge, Alert, Toast } from "react-bootstrap";
import { GiMoneyStack } from "react-icons/gi";
import { BsFillClockFill, BsFillGeoFill } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addInterested, removeInterested } from "../../actions/Job";
import { IconContext } from "react-icons";

const JobView = ({ addInterested, removeInterested, Authentication, jobs }) => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const business = jobs.business || {};

  return (
    <div>
      <br />
      <Card style={{ width: "50rem" }} className="text-center">
        <Card.Header>
          <strong>
            <h6>Company:</h6>
          </strong>
          {business.CompanyName}
        </Card.Header>
        <Card.Body style={{ backgroundColor: "" }}>
          <Card.Title>
            <strong>Job: </strong>
            {jobs.jobtitle}
          </Card.Title>
          <Card.Text style={{ color: "#606060" }}>
            {jobs.jobdescription}
          </Card.Text>
          <center>
            <Col md={6} className="mb-2">
              <Button
                onClick={toggleShowA}
                variant="outline-success"
                className="mb-2"
              >
                View Business details
              </Button>
              <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                  <strong className="me-auto">
                    <strong>Company Name:</strong> {business.CompanyName}
                  </strong>
                </Toast.Header>
                <Toast.Body>
                  <strong>Contact Name:</strong> {business.ContactName}
                </Toast.Body>
                <Toast.Body>
                  <strong>Email:</strong> {business.ContactEmail}
                </Toast.Body>
                <Toast.Body>
                  <BsFillGeoFill />
                  {business.Location}
                </Toast.Body>
              </Toast>
            </Col>
          </center>
          <Card.Text>
            <Card.Text>Skills Required:</Card.Text>
            {jobs.skillsetreq.map((skillsetreq, index) => (
              <div key={index}>
                <Row>
                  <Col>
                    <i />
                    <IconContext.Provider
                      value={{
                        color: "#246E19",
                        className: "global-class-name",
                      }}
                    >
                      <FiCheckSquare />
                    </IconContext.Provider>{" "}
                    {skillsetreq}
                  </Col>
                </Row>
              </div>
            ))}
          </Card.Text>
          <Card.Text>
            <IconContext.Provider
              value={{ color: "#246E19", className: "global-class-name" }}
            >
              <GiMoneyStack />
            </IconContext.Provider>{" "}
            {jobs.jobbudget}
          </Card.Text>
          <Card.Text>
            <BsFillClockFill /> {jobs.jobduration}
          </Card.Text>
          <Button onClick={(e) => addInterested(jobs._id)} variant="success">
            Interested{" "}
            <Badge bg="secondary">
              <span>
                {jobs.interested.length > 0 && (
                  <span>{jobs.interested.length}</span>
                )}
              </span>
            </Badge>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          <BsFillGeoFill /> {business.Location}
          <br />
          <br></br>
          <div>
            <p>
              Posted On: <Moment format="DD/MM/YYYY">{jobs.date}</Moment>
            </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

JobView.propTypes = {
  jobs: PropTypes.object.isRequired,
  Authentication: PropTypes.object.isRequired,
};

const mappingstatetoprops = (state) => ({
  Authentication: state.Authentication,
});
export default connect(mappingstatetoprops, {
  addInterested,
  removeInterested,
})(JobView);
