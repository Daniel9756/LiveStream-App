import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../userprofile.css'
import './waitingroom.css'
const WaitingRoomPoll= () => {
    return (
        <div className='liveeventpage'>
           <Header/> 
           <div className='_waiting'>
                <div className='liveevent-details'>
                    <div className='_liveevent'>
                            <div>
                                <button className='_empty'></button>
                            </div>
                            <div className='_live-title'>
                                <h3 className='_live-header'>Tech & Post COVID-19</h3>
                                <span className='_live-date'>23 April 2020 | 3:00PM</span>
                            </div>
                            <div>
                                <button className='_live-btn'>Going live in</button>
                            </div>
                    </div>
                    <div className='_live-countdown'>
                        <div className='_live001'>
                            <h1 className='xy01'>00</h1>
                            <span className='xy_01'>Days</span>
                        </div>
                        <div className='_live002'>
                            <h1 className='xy02'>05</h1>
                            <span className='xy_02'>Hours</span>
                        </div>
                        <div className='_live003'>
                            <h1 className='xy03'>50</h1>
                            <span className='xy_03'>Minutes</span>
                        </div>
                        <div className='_live004'>
                            <h1 className='xy04'>28</h1>
                            <span className='xy_04'>Seconds</span>
                        </div>
                    </div>
                    <div className='live_link'>
                        <Link className='avs'>Audio & Video Settings</Link>
                        <Link className='gli'>Go Live </Link>
                    </div>
                </div>
                <div className='_waiting-box'>
                    <div className='waiting-header'>
                        <h3 className='xycy-12'>Chat</h3>
                        <h2 className='xxcy-122'>Waiting Room Polls</h2>
                        <span className='ttimes'><i class="fa fa-times"></i></span>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default WaitingRoomPoll;