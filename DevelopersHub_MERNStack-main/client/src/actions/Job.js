import axios from 'axios';
import {DoAlert} from './alert';
import {
    GET_ALLPROFILES,
    GET_JOBS,
    JOBS_ERROR,
    UPDATE_INTERESTED,
    ADD_JOBS,
    GET_JOB
} from './actiontype'

//get Jobs

export const getJobs = () => async dispatch =>{
    try{
        const response = await axios.get('http://localhost:4000/api/job');


        dispatch({
            type: GET_JOBS,
            payload: response.data
        });
        }
        catch(err){
            const errors = await err.response.data.errors;
            if(errors){
             Array.from(errors).forEach(error => dispatch(DoAlert(error.msg, 'primary')));
             }
           dispatch({
               type: JOBS_ERROR,
               payload: {msg: err.response.statusText, status: err.response.status}
           });
        }
       }


//add interested

export const addInterested = _id => async dispatch =>{
    try{
        const response = await axios.put(`http://localhost:4000/api/job/interested/${_id}`);

        dispatch({
            type: UPDATE_INTERESTED,
            payload:{_id,interested: response.data }
        });

        const responses = await axios.get('http://localhost:4000/api/job');


        dispatch({
            type: GET_JOBS,
            payload: responses.data
        });

        dispatch(DoAlert('Business can how see that youre interested in the job'))
        
    }
    
        catch(err){
            const errors = await err.response.data.errors;
            if(errors){
             Array.from(errors).forEach(error => dispatch(DoAlert(error.msg, 'primary')));
             }
             else{
           dispatch({
               type: JOBS_ERROR,
               payload: {msg: err.response.statusText, status: err.response.status}
           });
        }
        }
       };

       export const removeInterested = (id) => async dispatch =>{
        try{
            const response = await axios.put(`http://localhost:4000/api/job/uninterested/${id}`);
    
            dispatch({
                type: UPDATE_INTERESTED,
                payload:{id, interested: response.data }
            });
            }
            catch(err){
                const errors = await err.response.data.errors;
                if(errors){
                 Array.from(errors).forEach(error => dispatch(DoAlert(error.msg, 'primary')));
                 }
               dispatch({
                   type: JOBS_ERROR,
                   payload: {msg: err.response.statusText, status: err.response.status}
               });
            }
           }
    
           export const addJob = ({jobtitle,
            jobdescription,
            skillsetreq,
            jobbudget,
            jobduration
            }) => async dispatch =>{

            const config ={
                headers:{
                    'Content-Type':'application/json'
                }
            }

            const Content_Body = JSON.stringify({
                jobtitle,
                jobdescription,
                skillsetreq,
                jobbudget,
                jobduration 
            });
            
            try{
                const responses = await axios.post('http://localhost:4000/api/job', Content_Body, config);

                const response = await axios.get('http://localhost:4000/api/freelancerprofile');

                const responsess = await axios.get('http://localhost:4000/api/job');

        
                dispatch({
                    type: GET_JOBS,
                    payload: responsess.data
                     });
                 

                dispatch({
                    type: GET_ALLPROFILES,
                    payload: response.data
                })

                dispatch({
                    type: ADD_JOBS,
                    payload: responses.data
                });

                dispatch(DoAlert('Post Created'));
                }             

                    catch(err){
                        const errors = await err.response.data.errors;
                       if(errors){
                        Array.from(errors).forEach(error => dispatch(DoAlert(error.msg, 'primary')));
                        }
                   dispatch({
                       type: JOBS_ERROR,
                       payload: {msg: err.response.statusText, status: err.response.status}
                   });
                }
               }

    export const getJob = id => async dispatch =>{
                try{
                    const response = await axios.get(`http://localhost:4000/api/job/${id}`);
            
            
                    dispatch({
                        type: GET_JOB,
                        payload: response.data
                    });
                    }
                    catch(err){
                       dispatch({
                           type: JOBS_ERROR,
                           payload: {msg: err.response.statusText, status: err.response.status}
                       });
                    }
                   }
            



    