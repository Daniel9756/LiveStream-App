
import React from 'react';
import './style.css';


const Modal = props => {
    return (
        <div class="overlay">
            <div class="overlay">
                <div class="overlay-content">
                    {props.children}
                </div>
            </div>
        </div>
        
    );
};


export default Modal;