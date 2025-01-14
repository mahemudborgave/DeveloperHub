import {GET_FREELANCERPROFILE, FREELANCERPROFILE_ERROR, UPDATE_FREELANCERPROFILE, GET_ALLPROFILES, GITHUB_DATA, CLEAR_FREELANCERPROFILE } from './actiontype';
import axios from 'axios';
import {DoAlert} from './alert'
import {useNavigate} from 'react-router-dom';
//import AuthToken from '../utilities/AuthToken'


//get current freelancer profile
export const getcurrentfreelancerprofile = () => async dispatch => {


    try{
    const response = await axios.get('http://localhost:4000/api/freelancerprofile/me');
    
   
    dispatch({
        type: GET_FREELANCERPROFILE,
        payload: response.data
    });
    }
    catch(err){
       dispatch({
           type: FREELANCERPROFILE_ERROR,
           payload: {msg: err.response.statusText, status: err.response.status}
       });
    }
   }

   //create or update the freelancer profile
   

   export const createfreelancerprofile = ({
    status,
    website,
    company,
    githubusername,
    youtube,
    twitter,
    facebook,
    instagram,
    skills,
Student}, modify=false) => async dispatch => {
       
        //const Navigate = useNavigate();
        
        const Configuration = {
            headers:{
              'Content-Type':'application/json'
            }
          }
          const Content_Body = JSON.stringify({
            status,
            website,
            company,
            githubusername,
            youtube,
            twitter,
            facebook,
            instagram,
            skills,
        Student});
            
    try{
        
        const response = await axios.post('http://localhost:4000/api/freelancerprofile',Content_Body, Configuration);
       
        dispatch({
            type: GET_FREELANCERPROFILE,
            payload: response.data
        });

        dispatch(DoAlert(modify ? 'Profile Updated' : 'Profile Created'))

        // if(!modify){       //   Navigate('/freelancerdashboard')
        //}
    }
        catch(err){
            //console.log(err.response.msg)
             //console.log({msg: err.response.statusText});
             //Problem is Here!
            const errors = await err.response.data.errors;
            console.log(errors);
           if(errors){
            Array.from(errors).forEach(error => dispatch(
                DoAlert(error.msg, 'primary')));
            }
           dispatch({
               type: FREELANCERPROFILE_ERROR,
               payload: {msg: err.response.statusText, status: err.response.status}
           });
        }
    }


//add freelancer experience

export const addexperience = ({
    title,
company,
from,
current,
to,
description,
location}) =>  async dispatch => {

    try{
        const Configuration = {
            headers:{
              'Content-Type':'application/json'
            }
          }
          
          const Content_Body = JSON.stringify({
            title,
        company,
        from,
        current,
        to,
        description,
        location});
          
        
        const response = await axios.put('http://localhost:4000/api/freelancerprofile/experience',Content_Body, Configuration);
       
        dispatch({
            type: UPDATE_FREELANCERPROFILE,
            payload: response.data
        });

        dispatch({
            type: GET_FREELANCERPROFILE,
            payload: response.data
        });

        dispatch(DoAlert('Experience Added!'));


        // if(!modify){       //   Navigate('/freelancerdashboard')
        //}
    }
        catch(err){
            //console.log(err.response.msg)
             //console.log({msg: err.response.statusText});
             //Problem is Here!
            const errors = await err.response.data.errors;
           if(errors){
            Array.from(errors).forEach(error => dispatch(DoAlert(error.msg, 'primary')));
            }
           dispatch({
               type: FREELANCERPROFILE_ERROR,
               payload: {msg: err.response.statusText, status: err.response.status}
           });
        }
    }


    export const addeducation = ({
        courseofstudy,
        university,
        location,
        from,
        to,
        description}) =>  async dispatch => {
        
            try{
                const Configuration = {
                    headers:{
                      'Content-Type':'application/json'
                    }
                  }
                  
                  const Content_Body = JSON.stringify({
                    courseofstudy,
                    university,
                    location,
                    from,
                    to,
                    description});
                  
                
                const response = await axios.put('http://localhost:4000/api/freelancerprofile/education',Content_Body, Configuration);
               
                dispatch({
                    type: UPDATE_FREELANCERPROFILE,
                    payload: response.data
                });
        
                dispatch({
                    type: GET_FREELANCERPROFILE,
                    payload: response.data
                });
        
                dispatch(DoAlert('Education Added!'));
        
    
            }
                catch(err){
                    const errors = await err.response.data.errors;
                   if(errors){
                    Array.from(errors).forEach(error => dispatch(DoAlert(error.msg, 'primary')));
                    }
                   dispatch({
                       type: FREELANCERPROFILE_ERROR,
                       payload: {msg: err.response.statusText, status: err.response.status}
                   });
                }
            }

            export const removeeducation = id => async dispatch => {
                try{
                    const response = await axios.delete(`http://localhost:4000/api/freelancerprofile/education/${id}`);
            
                    dispatch ({
                           type : UPDATE_FREELANCERPROFILE,
                           payload : response.data
                    })
            
                }
                catch(err){
                    dispatch({
                        type: FREELANCERPROFILE_ERROR,
                        payload: {msg: err.response.statusText, status: err.response.status}
                    });
                    
                    dispatch(DoAlert('Education Removed'))
            
                }
            }
        

export const removeexperience = id => async dispatch => {
    try{
        const response = await axios.delete(`http://localhost:4000/api/freelancerprofile/experience/${id}`);

        dispatch ({
               type : UPDATE_FREELANCERPROFILE,
               payload : response.data       

        })

    }
    catch(err){
        dispatch({
            type: FREELANCERPROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });

        dispatch(DoAlert('experience Removed'))

    }
}

export const getallprofiles = () => async dispatch => {

    dispatch({type: CLEAR_FREELANCERPROFILE})
    
    try{
        const response = await axios.get('http://localhost:4000/api/freelancerprofile');

        dispatch ({
               type : GET_ALLPROFILES,
               payload : response.data       

        })

    }
    catch(err){
        dispatch({
            type: FREELANCERPROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });

    }
}

export const getfreelancerprofilebyid = id => async dispatch => {

    try{
        const response = await axios.get(`http://localhost:4000/api/freelancerprofile/${id}`);

        dispatch ({
               type : GET_FREELANCERPROFILE,
               payload : response.data       

        });
    }
    
    catch(err)
    {
        dispatch({
            type: FREELANCERPROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });

    }
}


export const getgithubdata = githubusername => async dispatch => {

    try{
        const response = await axios.get(`http://localhost:4000/api/freelancerprofile/github/${githubusername}`);

        dispatch ({
               type : GITHUB_DATA,
               payload : response.data       

        });

    }
    catch(err)
    {
        dispatch({
            type: FREELANCERPROFILE_ERROR,
            payload: "No Git hub Profile"
        });

    }
}

