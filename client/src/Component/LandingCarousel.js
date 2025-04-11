import {Carousel, Container, Row, Col} from 'react-bootstrap'
import slide1 from "./LandingImages/slide1.png"
import slide2 from "./LandingImages/slide2.png"
import slide3 from "./LandingImages/slide3.png"
import slide4 from "./LandingImages/slide4.png"


function LandingCarousel() {
    return (
        <div>
    <Container>
        <Carousel >
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"#000000"}}>Register</h3>
      <p style={{color:"#000000"}}> whether you are a freelancer or a business provider you begin with our registration process.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h4 style={{color:"#000000"}}>Post Job</h4>
      <p style={{color:"#000000"}}>Business Providers post their job requirements and all the necessary details.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"#000000"}}>Auto Matching</h3>
      <p style={{color:"#000000"}}>Based on the job's skill requirements, business providers get a list of freelancers with the ability to complete the job. The pricing and the duration is controlled by business provider.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={slide4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"#000000"}}>Agile Development Approach</h3>
      <p style={{color:"#000000"}}> Instead of betting everything on the "End Product", an agile approach helps in diving the jobs into small tasks. The freelancers will update the progress of development in regular basis.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br>
    </br>
</Container>
</div>
    )
}
export default LandingCarousel;