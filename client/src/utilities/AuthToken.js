import axios from 'axios';

const AuthToken = (token) => {
    if(token){
        axios.defaults.headers.common['AuthenticationToken'] = token;
    } else {
        delete axios.defaults.headers.common['AuthenticationToken'];

    }
}

export default AuthToken;