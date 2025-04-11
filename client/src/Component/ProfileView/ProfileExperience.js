import {Fragment} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {Container, Col, Row, Card, Image} from 'react-bootstrap';

const ProfileExperience = ({
    experience: {
        company,
        title,
        location,
        from,
        to,
        current,
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
        <Card.Title>Experience's</Card.Title>
        <br>
        </br>
    <Card.Text Style={{color:"#606060"}}><strong>Company :</strong> {company}</Card.Text>
    <Card.Text>
    <strong>Role :</strong> {title}
    </Card.Text>
    <p>
        <Moment format = 'YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
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
        </Fragment>
    )
}

ProfileExperience.propTypes = {
 experience: PropTypes.array.isRequired
}

export default ProfileExperience;