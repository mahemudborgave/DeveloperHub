import {Fragment} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {Container, Col, Row, Card, Image, Button} from 'react-bootstrap';
import {FiCheckSquare} from 'react-icons/fi'
import {BsYoutube, BsLinkedin, BsGlobe2, BsFillGeoFill, BsMailbox2} from 'react-icons/bs'

const JobInterested = ({
    interested: {
       FirstName,
       Email,
        Linkdeln,
        Location,
        Description
    },
    
    // <Button  size="sm" variant="outline-secondary"><Link to={`/user/${_id}`}>View Profile</Link></Button>
    
}) =>{
    const Mailto = ({ email, subject, body, children }) => {
        return (
          <a style={{color:"#000000"}}href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}
          &body=${encodeURIComponent(body) || ''}`}>{children}</a>
       )
      };
    return(
        <Fragment>
        <Container>
        <Row className="g-2">
    <Col>
        <Card>
  <Card.Header className="text-center" as="h5"><p>{FirstName}</p></Card.Header>
  <Card.Body className="text-center">
    <p><BsMailbox2 />{' '}{Email}</p>
    <p>
    <BsFillGeoFill />{' '}{Location}
    </p>
    <p>
    <BsLinkedin />{' '}{Linkdeln}
    </p>    
    <br>
    </br>
    <Mailto style={{color:"#000000"}}email={Email} subject={"Developer's Hub"} body={"since you showed insterest, Would you like to work on a Job with use"}
    >
    Send a Message to {FirstName}
  </Mailto>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
<br>
</br>
    </Fragment>
    )
}

JobInterested.propTypes = {
 interested: PropTypes.array.isRequired
}

export default JobInterested;