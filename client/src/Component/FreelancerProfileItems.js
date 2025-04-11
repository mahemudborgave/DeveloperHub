import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Container, Toast, Image } from 'react-bootstrap';

const FreelancerProfileItems = ({ freelancerprofile }) => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  // Fully validate freelancerprofile and nested user object
  if (
    !freelancerprofile ||
    !freelancerprofile.user ||
    !freelancerprofile.user._id
  ) {
    return <div>Loading...</div>;
  }

  const {
    user: {
      _id,
      FirstName,
      UserName,
      Description,
      Location,
      icon
    },
    company,
    status,
    skills
  } = freelancerprofile;

  return (
    <Fragment>
      <div><br /></div>
      <Container>
        {status === 'Available' && (
          <Row className="justify-content-md-center">
            <Col xs={12} md={10} lg={8}>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Image style={{ width: 120, height: 120 }} src={icon} roundedCircle />
                    <div style={{ paddingLeft: 20 }}>
                      <p><strong>@UserName:</strong> {UserName}</p>
                      <p><strong>@Status:</strong> {status}</p>
                    </div>
                  </div>
                  <Card.Title><strong>Name:</strong> {FirstName}</Card.Title>

                  <Col md={6} className="mb-2">
                    <Button size="sm" variant="outline-success" onClick={toggleShowA}>
                      Skills
                    </Button>
                    <Toast show={showA} onClose={toggleShowA}>
                      <Toast.Body>
                        {skills && skills.slice(0, 4).map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </Toast.Body>
                    </Toast>
                  </Col>

                  <Card.Text>
                    <strong>About:</strong> {Description}
                  </Card.Text>
                </Card.Body>

                <Col md={6} className="mb-2">
                  <Button size="sm" variant="success">
                    <Link style={{ color: "#FFFFFF", textDecoration: 'none' }} to={`/user/${_id}`}>View Profile</Link>
                  </Button>
                </Col>

                <Card.Footer>
                  <small className="text-muted"><strong>Location:</strong> {Location}</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
};

FreelancerProfileItems.propTypes = {
  freelancerprofile: PropTypes.object.isRequired
};

export default FreelancerProfileItems;
