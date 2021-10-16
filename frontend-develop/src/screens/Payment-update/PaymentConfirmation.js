import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../Auth/style.css';
import './pay.css'


const BankTransfer = () => {
    return (
       <Fragment>
           <body className="_confirmpay">
               <div className='event-nav'>
                    <div className='E-img-wrapper'>
                        <img src={process.env.PUBLIC_URL + '../../assets/image/Group5.svg'}
                            alt='logo'
                            className='view-logo'
                        />
                    </div>
                    <div className='e-sign'>
                       <img
                            src={process.env.PUBLIC_URL + '../../assets/image/2.png'}
                            alt='logo'
                            className='chatter-card'
                       />
                    </div>
                </div>
               <div class="overlayed">
                    <div class="overlay-content-s">
                        <div className='checkedd'>
                            <span className='check-icon'><i class="fa fa-check-circle"></i></span>
                        </div>
                        <div className='checked-div'>
                            <h3 className='checked-h3'>Payment Successful </h3><br/>
                            <p className='checked-p'>Your event code has been sent to your email</p>
                        </div>
                        <div className='checked-lnnk'>
                             <Link to='/' className='checkd-lnk'>Enter Event Studio</Link>
                        </div>
                   </div>
               </div>
           </body>  
       </Fragment>
    );
};

export default BankTransfer;