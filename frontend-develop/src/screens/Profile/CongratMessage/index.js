import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../../Auth/style.css'
const CongratMessage = () => {
    return (
       <div>
           <div className="svg_title">
                <img 
                    src={ process.env.PUBLIC_URL + '../../../assets/image/Group 4123.svg'}
                    alt=""
                    className="marked-svg"/>
            </div>
            <div className="_svg_box">
                <p className="svg-title">Congratulations!<br/><span className="_svg">Your profile has been created!</span></p>
            </div>
          
       </div>
    );
};

export default CongratMessage;