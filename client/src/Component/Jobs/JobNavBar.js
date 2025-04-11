import {Offcanvas, Nav, Navbar, Container, Button} from 'react-bootstrap';
import Logo from "../../Component/logo.svg";
import {useNavigate} from 'react-router-dom';

function JobNavBar(){
    const Navigate = useNavigate();

    const clickhandler1 = () => {
        Navigate('/businessdashboard/myjobs');
    }
    return (

<div>
  <Navbar sticky="top" bg="success" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Developer's Hub
      </Navbar.Brand>
      <Offcanvas.Body>
      <Button size="sm" variant="outline-dark" onClick={clickhandler1} className="mb-1">
        Go back
    </Button>
        </Offcanvas.Body>
    </Container>
  </Navbar>
</div>
    )
}

export default JobNavBar;