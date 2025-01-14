import {GET_BUSINESSPROFILE, BUSINESSPROFILE_ERROR, EMPTY_BUSINESSPROFILE } from '../actions/actiontype';


const State = {
    businessprofile: null,
    businessprofiles: [],
    todashboard: false,
    loading : true,
    errors:{}
}

export default function (state = State, action) {
    const {payload, type} = action;

    switch(type) {
        case GET_BUSINESSPROFILE: 
        return {
            ...state,
            businessprofile : payload,
            loading: false,
            todashboard: true

        }
        case BUSINESSPROFILE_ERROR: 
        return {
            ...state,
            errors : payload,
            loading: false,
            todashboard: false

        }   
        case EMPTY_BUSINESSPROFILE : 
        return {
            ...state,
            businessprofile : null,
            loading: false
        }   

        default:
        return state
    }
}
