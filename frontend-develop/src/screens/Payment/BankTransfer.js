import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const PaymentByBankTransfer = () => {
    return (
       <Fragment>
           <div className="overlay-gray">
                <div className="overlay-txt">
                    <label className="overlay-bank">First Bank</label><br/>
                    <span className="overlay-acc">0123456789 <i class="fa fa-paste acc"></i></span><br/>
                    <span className="overlay-time">Expires in 23:14</span>
                </div>
                <div className="overlay_btn">
                    <button className="overlay_btnz">Money Sent</button>
                </div>
            </div>
       </Fragment>
    );
};

export default PaymentByBankTransfer;