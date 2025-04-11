import {GET_FREELANCERPROFILE, FREELANCERPROFILE_ERROR, EMPTY_PROFILE, UPDATE_FREELANCERPROFILE, GET_ALLPROFILES,CLEAR_FREELANCERPROFILE, GITHUB_DATA } from '../actions/actiontype';


const State = {
    freelancerprofile: null,
    freelancerprofiles: [],
    githubrepository:[],
    loading : true,
    errors:{}
}

export default function (state = State, action) {
    const {payload, type} = action;

    switch(type) {
        case GET_FREELANCERPROFILE : 
        case UPDATE_FREELANCERPROFILE:
        return {
            ...state,   
            freelancerprofile : payload,
            loading: false

        }
        case GET_ALLPROFILES:
            return{
                ...state,
                freelancerprofiles: payload,
                loading: false

            }
        case FREELANCERPROFILE_ERROR : 
        return {
            ...state,
            errors : payload,
            loading: false

        }
        
        case EMPTY_PROFILE : 
        case CLEAR_FREELANCERPROFILE:
        return {
            ...state,
            freelancerprofile : null,
            githubrepository: [],
            loading: false
        }   

        case GITHUB_DATA:
            return {
                ...state,
                githubrepository: payload,
                loading: false
            }

        default:
        return state
    }
}
