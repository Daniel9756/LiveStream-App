import React from 'react';
import Header from '../Dashboard/Header';
import { Link } from 'react-router-dom';
import './waitingroom.css'
const WaitingRoom= () => {
    return (
        <div className='liveeventpage'>
       
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
                        <Link className='cha'>Chat
                        <span className='top-num'>3</span>
                        </Link>
                    </div>
                    <div className='live-event-des'>
                        <p className='dmws'>Say hello to your attendees</p> 
                    </div>
                </div>
                <div className='_waiting-box'>
                    <div className='waiting-header'>
                        <h2 className='xxcy-12'>Waiting Room Chat</h2>
                        <h3 className='xycy-12'>Poll</h3>
                    </div>
                    <div className='chats'>
                        <div className='_chts'>
                            <span className='c-time'>12:00PM</span>
                            <div className='partiton'>
                                <h2 className='event-host'>Josh(host)
                                 <img
                                    src={process.env.PUBLIC_URL + '../../assets/image/2.png'}
                                    alt='logo'
                                    className='chatter'
                                    />
                               </h2>
                                <p className='chat-text'>Hello guys, glad you could join me. Really excited about the event. See you guys in a bit.</p>
                            </div>
                        </div>
                        <div className='_chtss'>
                            <span className='c-times'>12:00PM</span>
                            <div className='partitons'>
                            <h2 className='event-hosts'>
                                <img
                                    src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                    alt='logo'
                                    className='chatters'
                                    />
                                    Mart
                            </h2>
                            <p className='chat-texts'>Really excited about the event.</p>
                            </div>
                        </div>
                        <div className='_chtsss'>
                            <span className='c-times'>12:00PM</span>
                            <div className='partitons'>
                            <h2 className='event-hostx'>
                                <img
                                    src={process.env.PUBLIC_URL + '../../assets/image/1.png'}
                                    alt='logo'
                                    className='chatters'
                                    />
                                    Obass(Guest)
                            </h2>
                            <p className='chat-texts'>What happens when you cross a singer and a rocking chair? — you rock to the beat. Can’t wait.</p>
                            </div>
                        </div>
                        <div className='cht-input'>
                           <input type='text' placeholder='Say something to your attendees' className='typing'/>
                           <Link className='submt'>Send</Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default WaitingRoom;