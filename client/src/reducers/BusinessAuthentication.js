import { BUSINESSSIGNUP_SUCESS, BUSINESSSIGNUP_FAIL, BUSINESS_AUTHENTICATED, BUSINESSAUTHENTICATION_ERROR, BUSINESSLOGIN_SUCESS, BUSINESSLOGIN_FAIL, BUSINESSLOGGING_OUT} from '../actions/actiontype';

//const tokenparsed = localStorage.getItem('token');
//JSON.parse(tokenparsed);

const initialState = {
    token : localStorage.getItem('token'),  
    authentication : null,
    business: null,
    loading: true
}


export default function (state = initialState, action) {
    const {payload, type} = action;
    switch(type){
        case BUSINESSSIGNUP_SUCESS:
        case BUSINESSLOGIN_SUCESS:
            //storing the token received into a local storage
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                authentication: true,
                loading: false
            }
            case BUSINESS_AUTHENTICATED:
            return {
                ...state,
                authentication: true,
                loading: false,
                business: payload
            }
            case BUSINESSSIGNUP_FAIL:
            case BUSINESSLOGIN_FAIL:
            case BUSINESSAUTHENTICATION_ERROR:
            case BUSINESSLOGGING_OUT:
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