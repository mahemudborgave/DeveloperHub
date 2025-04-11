import { SIGNUP_SUCESS, SIGNUP_FAIL, USER_AUTHENTICATED, AUTHENTICATION_ERROR, LOGIN_FAIL, LOGIN_SUCESS, LOGGING_OUT} from '../actions/actiontype';

//const tokenparsed = localStorage.getItem('token');
//JSON.parse(tokenparsed);

const initialState = {
    token : localStorage.getItem('token'),  
    authentication : null,
    user: null,
    loading: true
}


export default function (state = initialState, action) {
    const {payload, type} = action;
    switch(type){
        case SIGNUP_SUCESS:
        case LOGIN_SUCESS:
            //storing the token received into a local storage
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                authentication: true,
                loading: false
            }
            case USER_AUTHENTICATED:
         return {
                ...state,
                authentication: true,
                loading: false,
                user: payload
            }
            case SIGNUP_FAIL:
            case LOGIN_FAIL:
            case AUTHENTICATION_ERROR:
            case LOGGING_OUT:
                //storing the token received into a local storage
                localStorage.removeItem('token');
                return{
                    ...state,
                    token: null,
                    authentication: false,
                    loading: false
                }
                default:
                    return state;
            
    }
}