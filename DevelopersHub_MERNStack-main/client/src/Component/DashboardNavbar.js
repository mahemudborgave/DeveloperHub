import {Offcanvas, Nav, Navbar, Container} from 'react-bootstrap';
import Logo from "./logo.svg";
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {loggingout} from '../actions/authentication'
import {useNavigate} from 'react-router-dom'
function DashboardNavBar({loggingout, Authentication:{authentication, loading }}){

  const Navigate = useNavigate();

  const log = e => {
    e.preventDefault();
    loggingout();
    Navigate('/logout')
  }
    return (
<div>
  <Navbar  sticky="top"  bg="success"  variant="dark">
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
          <Nav.Link onClick={log}>Logout</Nav.Link>
          </Nav>
        </Offcanvas.Body>
    </Container>
  </Navbar>
</div>
    )
} 

DashboardNavBar.propTypes = {
  loggingout: propTypes.func.isRequired,
  Authentication : propTypes.object.isRequired
}

const mappingStatetoProps = state => ({
  Authentication : state.Authentication
});
export default connect(mappingStatetoProps,{loggingout})(DashboardNavBar);