import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const CustomLabelText = props => {

    return (
        
        <label htmlFor={props.forlabel} style={props.style} className='labelclass'>
            {props.text}
      </label>
    )
}

CustomLabelText.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.shape({}),
    forlabel: PropTypes.string.isRequired,
}

CustomLabelText.defaultProps = {
    text: null,
    style: null
}

export default CustomLabelText;