import {Navbar,Container, Nav} from 'react-bootstrap'
import Logo from "./logo.svg"

function SimpleNav() {
    return (
        <div>
    <Navbar sticky="top" bg="success" variant="dark" >
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Developer's Hub
      </Navbar.Brand>
      </Container>
      </Navbar>
      </div>
    )
}

export default SimpleNav;