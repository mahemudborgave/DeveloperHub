import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { React, Fragment, useEffect } from 'react';
import Landing from "./Component/Landing";
import Register from "./Component/Register";
import BusinessSignUp from "./Component/BusinessSignUp";
import FreelancerSignUp from "./Component/FreelancerSignUp";
import Login from "./Component/Login"
import FreelancerLogin from "./Component/FreelancerLogin"
import BusinessLogin from "./Component/BusinessLogin"
import Alert from './Component/alert'
//Redux Imports
import {loadFreelancer} from './actions/authentication'
import {Provider} from 'react-redux';
import store from "./Store";
import AuthToken from './utilities/AuthToken'
import { loadBusiness } from './actions/businessauthentication';
import FreelancerDashboard from './Component/FreelancerDashboard';
import BusinessDashboard from './Component/BusinessDashboard';
//import PrivateRoute from "./Component/PrivateRoute/PrivateRoute"
import './App.css'
import CreateProfile from './Component/CreateProfile';
import CreateBusinessProfile from './Component/CreateBusinessProfile';
import EditFreelancerProfile from './Component/EditFreelancerProfile';
import EditBusinessProfile from './Component/EditBusinessProfile';
import AddExperience from './Component/AddExperience';
import AddEducation from './Component/AddEducation';
import AllFreelancers from './Component/AllFreelancers';
import AllFreelancersBusiness from './Component/AllFreelancersBusiness';
import AllFreelancersfor from './Component/AllFreelancersfor'
import FreelancerProfileDisplay from './Component/ProfileView/FreelancerProfileDisplay';
import FreelancerProfileDisplayUser from './Component/ProfileView/FreelancerProfileDisplayUser';
import FreelancerProfileDisplayBusiness from './Component/ProfileView/FreelancerProfileDisplayBusiness'
import Jobs from './Component/Jobs/Jobs';
import MyJobs from './Component/Jobs/MyJobs';
import PostJobs from './Component/Jobs/PostJobs';
import Job from './Component/Jobs/Job';
import Logout from './Component/Logout'

if (localStorage.token) {
  AuthToken(localStorage.token);
}
const  App = () => {
  useEffect(() => {
    store.dispatch(loadFreelancer());
    store.dispatch(loadBusiness());
  },[]);

  //useEffect(() => {
    
  //}, []);



  return (
      <div>
      <Provider store={store}>
        <Fragment>
        <Alert />
        </Fragment>
      <Router>
      <Fragment>
        <Routes>
          <Route path='/' element= {<Landing />}></Route>
          <Route path='/register' element= {<Register />}></Route>
          <Route path='/freelancerregistration' element= {<FreelancerSignUp />}></Route>
          <Route path='/businessregistration' element= {<BusinessSignUp />}></Route>
          <Route path='/login' element= {<Login />}></Route>
          <Route path='/freelancerlogin' element= {<FreelancerLogin />}></Route>
          <Route path='/businesslogin' element= {<BusinessLogin />}></Route>
          <Route path='/freelancerdashboard' element= {<FreelancerDashboard />} />
          <Route path='/businessdashboard' element= {<BusinessDashboard />} />
          <Route path='/createprofile' element= {<CreateProfile />}></Route>
          <Route path='/createbusinessprofile' element= {<CreateBusinessProfile />}></Route>
          <Route path='/editfreelancerprofile' element= {<EditFreelancerProfile />}></Route>
          <Route path='/editbusinessprofile' element= {<EditBusinessProfile />}></Route>
          <Route path='/addexperience' element= {<AddExperience />}></Route>
          <Route path='/freelancerdashboard/addeducation' element= {<AddEducation />}></Route>
          <Route path='/allfreelancers' element= {<AllFreelancers />}></Route>
          <Route path='/allfreelancersbusiness' element = {<AllFreelancersBusiness />}></Route>
          <Route path='/allfreelancersbusiness/user/:id' element = {<FreelancerProfileDisplayBusiness />}></Route>
          <Route path='/userallfreelancers' element = {<AllFreelancersfor />}></Route>
          <Route path='/userallfreelancers/user/:id' element = {<FreelancerProfileDisplayUser />}></Route>
          <Route path='/allfreelancers/user/:id' element= {<FreelancerProfileDisplay />}></Route> 
          <Route path='/businessdashboard/myjobs/:id' element= {<Job />}></Route>       
          <Route path='/freelancerdashboard/jobs' element = {<Jobs />}> </Route>
          <Route path='/businessdashboard/postjobs' element = {<PostJobs />}></Route>
          <Route path='/businessdashboard/myjobs' element = {<MyJobs />}> </Route>
          <Route path='/logout' element = {<Logout />}> </Route>
        </Routes>
      </Fragment>
    </Router>
    </Provider>
    </div>
  );
}
// <Route path='/allfreelancersbusiness/user/:id' element = {<FreelancerProfileDisplayUser />}></Route>
// <Route path='/userallfreelancers/user/:id' element = {<FreelancerProfileDisplayBusiness />}></Route>


export default App;
