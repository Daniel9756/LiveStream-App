import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const CustomTitleText = props => {
    let size;
    switch(props.size) {
        case 'xs':
            size = 'title-xs';
            break;
        case 'sm':
            size = 'title-sm';
            break;
        case 'md':
            size = 'title-md';
            break;
        case 'lg':
            size = 'title-lg';
            break;
    }

    return (
        <h2 className={size} style={props.style}>
            {props.text}
        </h2>
    )
}

CustomTitleText.propTypes = {
    text: PropTypes.string,
    style: PropTypes.shape({}),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']).isRequired,
}

CustomTitleText.defaultProps = {
    text: null,
    style: null
}

export default CustomTitleText;