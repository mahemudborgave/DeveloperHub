import {combineReducers} from 'redux';
import alert from './alert';
import Authentication from './Authentication'
import FreelancerProfile from './FreelancerProfile'
import BusinessProfile from './BusinessProfile'
import BusinessAuthentication from './BusinessAuthentication'
import Job from './Job'

export default combineReducers({
    alert,
    Authentication,
    FreelancerProfile,
    BusinessProfile,
    BusinessAuthentication,
    Job
});
