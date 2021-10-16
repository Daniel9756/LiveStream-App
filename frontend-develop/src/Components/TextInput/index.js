import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { prepareDataForValidation } from 'formik';


const CustomTextInput = (props) => (
    <input
        
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className='inputcss'
        onChange={props.onChange}
        value={props.value}
        style={props.style}
        min={props.min}
        max={props.max}
        id={props.myid}
    />
)

CustomTextInput.propTypes = {
    focus: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    style: PropTypes.shape({}),
    min: PropTypes.string,
    max: PropTypes.string,
    myid: PropTypes.string,
}

CustomTextInput.defaultProps = {
    focus: false,
    type: 'text',
    placeholder: null,
    style: null,
    max: null,
    min: null,
    myid: null,
}

export default CustomTextInput;