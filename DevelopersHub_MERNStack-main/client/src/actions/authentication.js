import axios from 'axios';
import { SIGNUP_SUCESS,SIGNUP_FAIL, USER_AUTHENTICATED, AUTHENTICATION_ERROR, LOGIN_FAIL, LOGIN_SUCESS, LOGGING_OUT, EMPTY_PROFILE } from './actiontype';
import {DoAlert} from './alert'
import AuthToken from '../utilities/AuthToken'
//import { Navigate } from 'react-router';


 //load freelancer
 export const loadFreelancer = () => async dispatch => {
    if (localStorage.token) {
        AuthToken(localStorage.token);
    }
   
    try{
    const response = await axios.get('http://localhost:4000/api/auth/freelancer');
   
    dispatch({
        type: USER_AUTHENTICATED,
        payload: response.data
    });
    }
    catch(err){
       dispatch({
           type: AUTHENTICATION_ERROR
       });
    }
   }

//register freelancer
export const freelancersignup = ({UserName, FirstName, LastName,Email, Password, 
    confirmpassword, Linkdeln, Location, Age, Description}) => async dispatch => {
        const Configuration = {
            headers:{
              'Content-Type':'application/json'
            }
          }

          const Content_Body = JSON.stringify({UserName, FirstName, LastName, Email, Password, 
            confirmpassword, Linkdeln, Location, Age, Description});

        try{
           const response = await axios.post('http://localhost:4000/api/users', Content_Body, Configuration);

           dispatch({
                type:SIGNUP_SUCESS,
                payload: response.data 
           });

           dispatch(loadFreelancer());

        }
       catch(err){
           const errors = err.response.data.errors;

           if(errors){
               errors.forEach(error => dispatch(DoAlert(error.msg, 'primary')));
           }
        dispatch({
            type:SIGNUP_FAIL
       });
      }

    }

//Login Freelancer
 export const loginFreelancer = ({Email, Password}) => async dispatch => {
            const Configuration = {
                headers:{
                  'Content-Type':'application/json'
                }
              }
    
              const Content_Body = JSON.stringify({Email, Password});
    
            try{
               const response = await axios.post('http://localhost:4000/api/auth/freelancer', Content_Body, Configuration);
               dispatch({
                    type:LOGIN_SUCESS,
                    payload: response.data 
               });

               dispatch(loadFreelancer());
            }
           catch(err){
               const errors = await err.response.data.errors;
               if(errors){
                Array.from(errors).forEach(error => dispatch(DoAlert(error.msg, 'primary')));
               }
            dispatch({
                type:LOGIN_FAIL
           });
          }
    
        }

    //freelancer logout
    export const loggingout = () => async dispatch => {
        dispatch({
            type:EMPTY_PROFILE
           });
        dispatch({
            type:LOGGING_OUT
       });
       
    }