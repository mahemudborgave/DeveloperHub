import axios from 'axios';
import {GET_BUSINESSPROFILE, BUSINESSPROFILE_ERROR, GET_JOBS } from '../actions/actiontype';
import {DoAlert} from './alert'
import {useNavigate} from 'react-router-dom';
//import AuthToken from '../utilities/AuthToken'


//get current freelancer profile
export const getbusinessprofile = () => async dispatch => {

    try{
    const response = await axios.get('http://localhost:4000/api/businessprofile/me');
    const responsess = await axios.get('http://localhost:4000/api/job');

    dispatch({
        type: GET_JOBS,
        payload: responsess.data
    });
   
    dispatch({
        type: GET_BUSINESSPROFILE,
        payload: response.data
    });
    }
    catch(err){
       dispatch({
           type: BUSINESSPROFILE_ERROR,
           payload: {msg: err.response.statusText, status: err.response.status}
       });
    }
   }

   //create or update the freelancer profile
   

   export const createbusinessprofile = ({website,
    status,
    employeecount,
    established,
    clients,
    companycategory
    }, modify=false) => async dispatch => {
       
      // const Navigate = useNavigate();  
        
        const Configuration = {
            headers:{
              'Content-Type':'application/json'
            }
          }
          const Content_Body = JSON.stringify({website,
            status,
            employeecount,
            established,
            clients,
            companycategory});
            
    try{
        
        const response = await axios.post('http://localhost:4000/api/businessprofile',Content_Body, Configuration);
       
        dispatch({
            type: GET_BUSINESSPROFILE,
            payload: response.data
        });

        dispatch(DoAlert(modify ? 'Profile Updated' : 'Profile Created'))
        
       // if(!modify){
          //  Navigate('/businessdashboard')
     //   }
    }
        catch(err){
            //console.log(err.response.msg)
             //console.log({msg: err.response.statusText});
             //Problem is Here!
            const errors = await err.response.data.errors;
            console.log(errors);
           if(errors){
            Array.from(errors).forEach(error => dispatch(DoAlert(error.msg, 'primary')));
           }
           dispatch({
               type: BUSINESSPROFILE_ERROR,
               payload: {msg: err.response.statusText, status: err.response.status}
           });
        }
    }

