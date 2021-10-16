import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../Auth/style.css';
import './transfer.css'
import './card.css'

const BankTransfer = () => {
    return (
       <Fragment>
           <body className="_banktansfer">
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
                            <span class="overlay-transfers underline-cardd"><i class="fa fa-university blay"></i> Bank Transfer</span>
                            <span class="overlay-ussd"><i class="fa fa-calculator vvb"></i>USSD</span>
                        </div>
                         <div className='_enterdtails'>
                            <p className='_enterdetails-child'>Pay to account number below</p>
                         </div>
                        <div class="overlay-grayed">
                            <div class="overlay-txt">
                                <label class="overlay-bank">First Bank</label><br/>
                                <span class="overlay-acc">0123456789 <i class="fa fa-paste acc"></i></span><br/>
                                <span class="overlay-time">Expires in 23:14</span>
                            </div>
                            <div class="overlay_btn">
                                <button class="overlay_btnzs">Pay</button>
                            </div>
                        </div>
                        <div className='_belows'>
                           <p className='_below-child'><i class="fa fa-lock"></i> Secured by <strong>Paystack</strong></p>
                        </div>
                   </div>
               </div>
           </body>  
       </Fragment>
    );
};

export default BankTransfer;