import React, {Fragment} from 'react';
import loader from '../Component/RegisterImages/spinner.gif';

const LoadingIcon = () => {
    <Fragment>
        <img src={loader}
        style={{width:'200px', margin: 'auto', display: 'block',}} alt='please wait! Loading...'>
        </img>
    </Fragment>
}

export default LoadingIcon;