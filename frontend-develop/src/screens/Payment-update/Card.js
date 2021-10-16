import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../Auth/style.css';
import './card.css'

const Card = () => {
    return (
       <Fragment>
           <body class="cardbody">
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
                  <div class="overlay-contents">
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
                        <span class="overlay-card underline-card"><i class="fa fa-credit-card vbv"></i> Card</span>
                        <span class="overlay-transfer"><i class="fa fa-university bvv"></i> Bank Transfer</span>
                        <span class="overlay-ussd"><i class="fa fa-calculator vvb"></i>USSD</span>
                     </div>
                     <div className='_enterdetails'>
                        <p className='_enterdetails-child'>Enter your card details</p>
                     </div>
                     <div class="overlay-grays">
                            <div class="overlay_details">
                            <label htmlFor='Password' className='_passe'>
                               Card Number
                            </label><br/>
                               <input type="number" name="card-num" placeholder=" Card number" class="overlay-card_dtails"/> 
                           </div>
                            <div class="overlay-card_number">
                                <input type="text" name="month" placeholder="Month" class="_months"/>
                                <input type="number" name="date" placeholder="Date" class="_dates"/>
                                <input type="number" name="cvv" placeholder="CVV" class="_cvvs"/>
                            </div>
                            <div class="overlay_btn">
                                <button class="overlay_btnzs">Pay</button>
                            </div>
                     </div>
                     <div className='_below'>
                        <p className='_below-child'><i class="fa fa-lock"></i> Secured by <strong>Paystack</strong></p>
                     </div>
                   </div>
           </body>       
       </Fragment>
    );
};

export default Card;