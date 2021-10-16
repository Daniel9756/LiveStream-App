import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const CustomTextArea = (props) => (
    
    <textarea 
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        style={props.style}
        className='_textarea'
        cols={props.cols}
        rows={props.rows}
    />
)

CustomTextArea.propTypes = {
    focus: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    style: PropTypes.shape({}),
    cols: PropTypes.number,
    rows: PropTypes.number,
}

CustomTextArea.defaultProps = {
    focus: false,
    placeholder: null,
    style: null,
    cols: 42,
    rows: 4,
}

export default CustomTextArea;