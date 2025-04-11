import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';




const PrivateRoute = ({children, Authentication:{authentication, loading}}) => {
  if(!authentication && !loading) {
      return <Navigate to={'/login'} />
 }

 return children;
}

PrivateRoute.propTypes = {
    Authentication: PropTypes.object.isRequired
}

const mappingStatetoProps = state => ({
    Authentication: state.Authentication
});

export default connect(mappingStatetoProps)(PrivateRoute);
