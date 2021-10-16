import React from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import './style.css';


const CustomLoader = props => {

    return (
      <div className="customloader">
            <img 
                src={ process.env.PUBLIC_URL + '../../../assets/image/loader.gif'}
                alt=""
                className="loader-img"/>
      </div>
    )
}



export default CustomLoader;