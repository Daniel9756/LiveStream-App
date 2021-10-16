import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../Auth/style.css';
const CongratMessage = () => {
    return (
       <>  
           <body class="_body">
               <section class="_box-container">
                    <div class="img-box">
                        <img
                            src={process.env.PUBLIC_URL + '../../assets/image/Group 2895.svg'}
                            className='profile_logo'
                            alt='Logo'
                        />
                    </div>  
                    <div class="progress-bar">
                      <div class="step">
                           <div class="bullet--1">
                               <span class="_span"><i class="fa fa-check"></i></span>
                            </div>
                            <p class="_step1">About You</p>
                       </div>
                      <div class="step">
                            <div class="bullet--2">
                              <span class="_span"><i class="fa fa-check"></i></span>
                            </div>
                              <p class="_step2">Association</p>
                       </div>
                       <div class="step">
                            <div class="bullet--3">
                                <span class="_span"><i class="fa fa-check"></i></span>
                            </div>
                            <p  class="_step3">Select Plan</p>
                       </div>
                      <div class="step">
                            <div class="bullet-4">
                                <span class="_span">4</span>
                            </div>
                            <p class="_step4">Done</p>
                       </div>
                  </div>
                   <div class="svg_title">
                      <img 
                      src={ process.env.PUBLIC_URL + ' ../../assets/image/Group 4123.svg'}
                      alt=""
                      class="marked-svg"/>
                   </div>
                    <div class="_svg_box">
                       <p class="svg-title">Congratulations!<br/><span class="_svg">Your profile has been created!</span></p>
                    </div>
                    <div class="svg_btn">
                        <button class="overlay_btnz">Start Hosting Events</button>
                    </div>
             </section>
            </body>
       </>
    );
};

export default CongratMessage;