import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../userprofile.css'
import './livestudio.css'
const LivePoll= () => {
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
                    <div className='liveevnt-poll'>
                        <div className='fa-poll-h1'>
                            <img
                            src={process.env.PUBLIC_URL + '../../assets/image/woman.png'}
                            alt='logo'
                            className='eventbck-image-1'
                        />
                        <div className='poll-h'>
                            <h6 className='fa-fa-host'>Host </h6>
                            <span className='host_xy'>Josh Osazuwa</span>
                        </div>
                        <span className='fgmh'>Host</span>
                        <div className='jig-video'>
                            <span className='jig'><i class="fad fa-microphone"></i></span>
                            <span className='jig'> <i class="fas fa-video"></i></span>
                            <span className='jig'> <i class="fa fa-rectangle-landscape"></i></span>
                        </div>
                        </div>
                        <div className='fa-poll-h2'>
                            <img
                            src={process.env.PUBLIC_URL + '../../assets/image/woman-1.png'}
                            alt='logo'
                            className='eventbck-image-2'
                            />
                            <div className='poll-h'>
                                <h6 className='fa-fa-host'>Guest </h6>
                                <span className='host_xy'>Josh Osazuwa</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='_waiting-box'>
                    <div className='__livestudio'>
                        <Link className='liv jjx'>Chats
                        <span className='live-note'>20</span></Link>
                        <Link className='liv hjs'>Questions
                        <span className='live-note'>20</span></Link>
                        <Link className='liv jk'>Polls</Link>
                        <Link className='liv kls'>People
                        <span className='live-notes'>93</span></Link>
                    </div>
                    <div className='live-header'>
                        <label className='_livechat'>Polls</label>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default LivePoll;