import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../Auth/style.css';

const PaymentbyCard = () => {
    return (
       <Fragment>
           <div className="overlay-gray">
                <div className="overlay_details">
                    <input type="number" name="card-num" placeholder=" Card number" className="overlay-card_details"/> 
                </div>
                <div className="overlay-card_number">
                    <input type="text" name="month" placeholder="Month" className="_month"/>
                    <input type="number" name="date" placeholder="Date" className="_date"/>
                    <input type="number" name="cvv" placeholder="CVV" className="_cvv"/>
                </div>
                <div className="overlay_btn">
                    <button className="overlay_btnz">Pay</button>
                </div>
            </div>
       </Fragment>
    );
};

export default PaymentbyCard;