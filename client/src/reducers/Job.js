import {
    GET_JOBS,
    JOBS_ERROR,
    UPDATE_INTERESTED,
    ADD_JOBS,
    UPDATE_JOBS,
    GET_JOB
} from '../actions/actiontype'

const State = {
    job : null,
    jobs: [],
    loading : true,
    error:{}
}


export default function (state = State, action) {
    const {payload, type} = action;

    switch(type) {
        case GET_JOBS : 
        case UPDATE_JOBS:
        return {
            ...state,
            jobs : payload,
            loading: false

        };

        case GET_JOB: 
        return {
            ...state,
            job: payload,
            loading: false
        };
            
        case ADD_JOBS : 
        return {
            ...state,
            jobs: [...state.jobs, payload],
            loading: false
        };

        case JOBS_ERROR: 
        return {
            ...state,
            errors: payload,
            loading: false

        };

        case UPDATE_INTERESTED :    
        return {
            ...state,
            jobs : state.jobs.map(job => job._id === payload.id ? {
                ...job, 
                interested: payload.interested } : job),
               loading: false   
        };

        default:
            return{
                ...state
            }
    }
}