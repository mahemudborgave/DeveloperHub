import {Container, Navbar} from 'react-bootstrap'
import Logo from "./logo.svg"

function FooterNav() {
    return (
        <div>
        <Navbar bg="secondary" fixed="bottom" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        </Container>
        </Navbar>
        </div>
    )
}

export default FooterNav;