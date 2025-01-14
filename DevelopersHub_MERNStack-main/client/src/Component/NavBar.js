import {Offcanvas, Nav, Navbar, Container} from 'react-bootstrap';
import Logo from "./logo.svg";

function NavBar(){
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
        <Nav className="justify-content-end">
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link  href="/login">Login</Nav.Link>
          <Nav.Link href="/allfreelancers">Freelancers</Nav.Link>
          </Nav>
        </Offcanvas.Body>
    </Container>
  </Navbar>
</div>
    )
}

export default NavBar;