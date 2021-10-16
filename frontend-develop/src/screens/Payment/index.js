import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Components/Modal';
import PaymentByCard from './Card';
import PaymentByBankTransfer from './BankTransfer';
import PaymentByUssd from './Ussd';




class PaymentModal extends Component{

    constructor(props) {
        super(props);
        this.selectPaymentMethod = this.selectPaymentMethod.bind(this);
        this.state = {
            selectedMethod: 'card'
        }
    }

    active = {
        color: '#393E51',
    }



    selectPaymentMethod = selected => {
        this.setState({ selectedMethod: selected});
    }

    render(){
        return (
            <Modal>
                <div className="overlay-text">
                    <div className="overlay-pay">
                        <label className="overlay-label">Pay <span className="overlay-price"> N40,000</span></label>
                        <p className="overlay-desc">Select payment options</p>
                    </div>
                    <div className="overlay-mail">
                        <p className="overlay-email">sample@email.com</p>
                    </div>
                </div> 
                <div className="overlay-icon">
                    <span className="overlay-card" onClick={() => this.selectPaymentMethod('card')}
                    style={ this.state.selectedMethod === 'card' ? this.active : {}}>
                        <i className="fa fa-credit-card vbv"></i> Card</span>
                    <span className="overlay-transfer" onClick={() => this.selectPaymentMethod('banktransfer')}
                    style={ this.state.selectedMethod === 'banktransfer' ? this.active : {}}>
                        <i className="fa fa-university bvv"></i> Bank Transfer</span>
                    <span className="overlay-ussd" onClick={() => this.selectPaymentMethod('ussd')}
                    style={ this.state.selectedMethod === 'ussd' ? this.active : {}}>
                        <i className="fa fa-calculator vvb"></i>USSD</span>
                </div>
                
                { this.state.selectedMethod === 'card' && 
                    <PaymentByCard/>
                }
                { this.state.selectedMethod === 'banktransfer' && 
                    <PaymentByBankTransfer/>
                }
                { this.state.selectedMethod === 'ussd' && 
                    <PaymentByUssd/>
                }
                
            </Modal>
            
        )
    }
};

PaymentModal.propTypes = {
    price: PropTypes.string,
}


export default PaymentModal;