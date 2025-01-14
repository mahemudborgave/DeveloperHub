import axios from 'axios';

const AuthTokenBusiness = (token) => {
    if(token){
        axios.defaults.headers.common['AuthenticationToken'] = token;
    } else {
        delete axios.defaults.headers.common['AuthenticationToken'];

    }
}

export default AuthTokenBusiness;