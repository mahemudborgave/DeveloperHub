import {Fragment} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {Container, Col, Row, Card, Image} from 'react-bootstrap';

const ProfileEducation = ({
    education: {
        courseofstudy,
        university,
        location,
        from,
        to,
        description
    }
}) =>{
    return(
        <Fragment>
             <Container >
             <Col >
                 <Row className="justify-content-md-center">
            <Card style={{ width: '40rem'}}>
  <Card.Body>
        <Card.Title>Education's</Card.Title>
        <br>
        </br>
    <Card.Text Style={{color:"#606060"}}><strong>University :</strong> {university}</Card.Text>
    <Card.Text>
    <strong>Course Of Study :</strong> {courseofstudy}
    </Card.Text>
    
    <Card.Text>
   <strong>Duration:</strong> <Moment format = 'YYYY/MM/DD'>{from}</Moment> - {' '}
    <Moment format='YYYY/MM/DD'>{to}</Moment>
    </Card.Text>
    <Card.Text>
    <strong>Description :</strong> {description}
    </Card.Text>
    <Card.Text>
    <strong>Location :</strong> {location}
    </Card.Text>
  </Card.Body>
</Card> 
</Row> 
</Col>
</Container>
        </Fragment> )}

ProfileEducation.propTypes = {
 education: PropTypes.array.isRequired
}

export default ProfileEducation;