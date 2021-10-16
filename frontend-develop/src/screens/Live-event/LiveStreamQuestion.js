import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../userprofile.css'
import './livestudio.css'
const LiveStreamQuestion= () => {
    return (
        <div className='livestudiopage'>
           <Header/> 
           <div className='_waiting'>
                <div className='livestudio-details'>
                  <div className='livestudio-header'>
                    <div className='holder'>
                       <h1 className='img-title'>
                       <img
                            src={process.env.PUBLIC_URL + '../../assets/image/1.png'}
                            alt='logo'
                            className='chatterss'
                        />
                         Tech & Post-COVID-19
                       </h1>
                       <span className='by-os'>By Josh Osazuwa</span>
                    </div>  
                    <div className='icon-box'>
                        <label className='timer'>00:20</label>
                        <label className='status'>Live</label>
                        <span className='icon-event'><i class="fa fa-expand-wide"></i></span>
                        <span className='icon-event'><i class="fa fa-volume-up"></i></span>
                        <span className='icon-event'><i class="fa fa-cog"></i></span>
                    </div>   
                 </div>
                  <div>
                  <img
                    src={process.env.PUBLIC_URL + '../../assets/image/woman.png'}
                    alt='logo'
                    className='eventbck-image'
                   />
                    <span className='fgmh'>Host</span>
                    <div className='jig-video'>
                        <span className='jig'><i class="fad fa-microphone"></i></span>
                        <span className='jig'> <i class="fas fa-video"></i></span>
                        <span className='jig'> <i class="fa fa-rectangle-landscape"></i></span>
                    </div>
                  </div>
                </div>
                <div className='_waiting-box'>
                    <div className='__livestudio'>
                        <Link className='liv jjx'>Chats</Link>
                        <Link className='liv hj'>Questions
                        <span className='live-note'>20</span></Link>
                        <Link className='liv jkx'>Polls
                        <span className='live-not-e'>30</span></Link>
                        <Link className='liv kls'>People
                        <span className='live-notes'>93</span></Link>
                    </div>
                    <div className='live-header'>
                        <label className='_livechat'>Questions</label>
                    </div>
                    <div className='chat_s'>
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
                        
                    </div>
                </div>
           </div>
        </div>
    );
};

export default LiveStreamQuestion;