import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { defaults } from 'lodash';


const ErrorMessage = (props) => (
    <div>
        <p className="error"> {props.errorValue} </p>
    </div>
)

ErrorMessage.propTypes = {
    errorValue: PropTypes.string
}

ErrorMessage.defaultProps = {
    errorText: null
}

export default ErrorMessage;