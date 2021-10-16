import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../Auth/style.css';
import './ussd.css';
import './card.css';

const Ussd = () => {
    return (
       <Fragment>  
           <body class="_ussdbody">
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
               <div class="overlay-sd">
                    <div class="overlay-content-usd">
                        <div class="overlay-text">
                            <div class="overlay-pay">
                                <label class="overlay-label">Pay <span class="overlay-price"> #40,000</span></label>
                                <p class="overlay-desc">Select payment options</p>
                            </div>
                            <div class="overlay-mail">
                               <label class="overlay-label-login">Josh Osazuwa</label>
                                <p class="overlay-email-sample">sample@email.com</p>
                            </div>
                       </div> 
                        <div class="overlay-icon">
                            <span class="overlay-cards"><i class="fa fa-credit-card vlay"></i> Card</span>
                            <span class="overlay-transferss"><i class="fa fa-university blayy"></i> Bank Transfer</span>
                            <span class="overlay-ussd-num underline-card-us"><i class="fa fa-calculator layb"></i>USSD</span>
                        </div>
                        <div className='_enterdtails'>
                            <p className='_enterdetails-child'>Choose your bank to start payment</p>
                         </div>
                        <div class="overlay-gray-d">
                            <div class="ussd">
                                <label class="ussd-gt">Guaranty Trust Bank <span class="ussd-gtb_code">*737#</span></label>
                                <label class="ussd-zb">Zenith Bank <span class="ussd-zenb_code">*966#</span></label>
                            </div>
                            <div class="ussd-1">
                                <label class="ussd-gt">United Bank of Africa<span class="ussd-zenb_code">*919#</span></label>
                                <label class="ussd-zb">Sterling Bank <span class="ussd-zenb_code">*822#</span></label>
                            </div>
                            <div class="overlay_btn">
                                <button class="overlay_btnzus">Pay</button>
                            </div>
                        </div>
                        <div className='_below-us'>
                           <p className='_below-child'><i class="fa fa-lock"></i> Secured by <strong>Paystack</strong></p>
                        </div>
                    </div>
                </div>
            </body>
       </Fragment>
    );
};

export default Ussd;