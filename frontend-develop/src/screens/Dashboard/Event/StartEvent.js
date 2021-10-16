import React from "react";

export default ({ close }) => (
  <div className="modal">
    <div className="start-event">
        <div className='person-image'>
        <img src={process.env.PUBLIC_URL + '../../assets/image/Group 4107.svg'} 
                    className='event-owner'
                    alt='user'
                    />
        </div>
        <div>
            <h2 className='start-title'>Lets Create Your Event<br/> With You </h2>
            <p className='start-desc'>Nowadays, Modals are one of the
               most used components in React Application, 
              having an easy way 
            </p>
        </div>
    </div>
    <div className='start-btn'>
      <button className='_bttn'>Lets go</button>
    </div>
  </div>
);