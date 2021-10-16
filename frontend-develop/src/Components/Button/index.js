
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';




const CustomButton = (props) => {
    
    let selectedButton;
    if (props.btnStyleType === "secondaryBtn") {
        selectedButton = "primary secondaryBtn";
    }else{
        selectedButton = props.btnStyleType;
    }
    

    return (
        <button
            type={props.type}
            className={selectedButton}
            style={props.style}
            onClick={props.onClick}

        >{props.text != null ? props.text : props.icon }</button> 
    )
}

CustomButton.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.shape({}),
    value: PropTypes.func,
    btnStyleType: PropTypes.string.isRequired,
    icon: PropTypes.shape({}),
}

CustomButton.defaultProps = {
    value: null,
    focus: false,
    type: 'submit',
    placeholder: null,
    style: null,
    btnStyleType: "primary primaryBtn",
    icon: null
}

export default CustomButton;