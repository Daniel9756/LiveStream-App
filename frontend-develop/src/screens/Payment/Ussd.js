import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';



const PaymentByUssd = () => {
    return (
       <Fragment>  
           <div className="overlay-gray">
                <div className="ussd-des">
                    <p className="ussd-desc">Choose your bank to start payment</p>
                </div>
                <div class="ussd">
                    <label className="ussd-gt">Guaranty Trust Bank <span className="ussd-gtb_code">*737#</span></label>
                    <label className="ussd-zb">Zenith Bank <span className="ussd-zenb_code">*966#</span></label>
                </div>
                <div className="ussd-1">
                    <label className="ussd-gt">United Bank of Africa<span className="ussd-zenb_code">*919#</span></label>
                    <label className="ussd-zb">Sterling Bank <span className="ussd-zenb_code">*822#</span></label>
                </div>
                <div className="overlay_btn">
                    <button className="overlay_btnz">Next</button>
                </div>
            </div>
       </Fragment>
    );
};

export default PaymentByUssd;