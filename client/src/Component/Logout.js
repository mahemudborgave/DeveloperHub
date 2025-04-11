import SimpleNav from './SimpleNav'
import {Fragment} from 'react';
import logout from "./LandingImages/logout.png";
import {Link} from 'react-router-dom'
import {Image} from "react-bootstrap"

const Logout = () => {
return(
    <Fragment>
    <center>
    <Image style={{width:"550px", paddingLeft:"100px"}}src={logout} />
    <br></br>
    Logout Successful 
    <br></br>
    <p  className="text-center">Click<Link  style={{color:"#000000"}} to="/">Here!</Link></p>
    </center>
    </Fragment>
)
}

export default Logout;