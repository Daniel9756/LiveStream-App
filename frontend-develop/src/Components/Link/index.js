import React from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import './style.css';


const CustomLink = props => {

    return (
      <Link to={props.page} className='linkclass' style={props.style}>
        {props.text}
      </Link>
    )
}

CustomLink.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.shape({}),
    page: PropTypes.string.isRequired
}

CustomLink.defaultProps = {
    text: null,
    style: null,
    page: "#"
}

export default CustomLink;