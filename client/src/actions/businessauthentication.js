import axios from 'axios';
import { BUSINESSSIGNUP_SUCESS,BUSINESSSIGNUP_FAIL, BUSINESS_AUTHENTICATED, BUSINESSAUTHENTICATION_ERROR, BUSINESSLOGIN_FAIL, BUSINESSLOGIN_SUCESS, BUSINESSLOGGING_OUT, EMPTY_BUSINESSPROFILE } from './actiontype';
import {DoAlert} from './alert'
import AuthTokenBusiness from '../utilities/AuthTokenBusiness'



export const loadBusiness = () => async dispatch => {
  if (localStorage.token) {
    AuthTokenBusiness(localStorage.token);
  }
 
  try{
  const response = await axios.get('http://localhost:4000/api/auth/business');
 
  dispatch({
      type: BUSINESS_AUTHENTICATED,
      payload: response.data
  });
  }
  catch(err){
     dispatch({
         type: BUSINESSAUTHENTICATION_ERROR,
     });
  }
 }

export const businesssignup = ({
    CompanyName,ContactName,ContactEmail, 
    Password, confirmpassword, Location, CompanyDescription
 }) => async dispatch => {
        const Configuration = {
            headers:{
              'Content-Type':'application/json'
            }
          }

          const Content_Body = JSON.stringify({
            CompanyName,ContactName,ContactEmail, 
            Password, confirmpassword, Location, CompanyDescription
         });

        try{
           const response = await axios.post('http://localhost:4000/api/business', Content_Body, Configuration);

           dispatch({
                type:BUSINESSSIGNUP_SUCESS,
                payload: response.data 
           });

           dispatch(loadBusiness());

        }
       catch(err){
           const errors = err.response.data.errors;

           if(errors){
               errors.forEach(error => dispatch(DoAlert(error.msg, 'primary')));
           }
        dispatch({
            type:BUSINESSSIGNUP_FAIL
       });
      }

    }

   export const loginBusiness = ({ContactEmail, Password}) => async dispatch => {
      const Configuration = {
          headers:{
            'Content-Type':'application/json'
          }
        }

        const Content_Body = JSON.stringify({ContactEmail, Password});

      try{
         const response = await axios.post('http://localhost:4000/api/auth/business', Content_Body, Configuration);
         dispatch({
              type:BUSINESSLOGIN_SUCESS,
              payload: response.data 
         });

         dispatch(loadBusiness());
      }
     catch(err){
         const errors = await err.response.data.errors;
         console.log(errors)
         
         if(errors){
          Array.from(errors).forEach(error => dispatch(DoAlert(error.msg, 'primary')));
         }
      dispatch({
          type:BUSINESSLOGIN_FAIL
     });
    }

  }
  export const loggingout = () => async dispatch => {
    dispatch({
        type:EMPTY_BUSINESSPROFILE
       });
    dispatch({
        type:BUSINESSLOGGING_OUT
   });
}
