import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../userprofile.css'
import './livestudio.css'

const LiveStreamGuest= () => {
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
                            className='eventbck-image-3'
                        />
                        <div className='poll-hs'>
                            <h6 className='fa-fa-host'>Host </h6>
                        </div>
                        {/* <span className='fgmh'>Host</span>
                        <div className='jig-video'>
                            <span className='jig'><i class="fad fa-microphone"></i></span>
                            <span className='jig'> <i class="fas fa-video"></i></span>
                            <span className='jig'> <i class="fa fa-rectangle-landscape"></i></span>
                        </div> */}
                        </div>
                        <div className='fa-poll-h2'>
                            <img
                            src={process.env.PUBLIC_URL + '../../assets/image/woman-1.png'}
                            alt='logo'
                            className='eventbck-image-4'
                            />
                            <div className='poll-hs'>
                                <h6 className='fa-fa-host'>Guest </h6>
                            </div>
                        </div>
                    </div>
                    
                    <div className='liveevnt-polls'>
                        <div className='fa-poll-h1'>
                            <img
                            src={process.env.PUBLIC_URL + '../../assets/image/woman.png'}
                            alt='logo'
                            className='eventbck-image-5'
                        />
                        <div className='poll-hh'>
                            <h6 className='fa-fa-host'>Guest </h6>
                        </div>
                        {/* <span className='fgmh'>Host</span>
                        <div className='jig-video'>
                            <span className='jig'><i class="fad fa-microphone"></i></span>
                            <span className='jig'> <i class="fas fa-video"></i></span>
                            <span className='jig'> <i class="fa fa-rectangle-landscape"></i></span>
                        </div> */}
                        </div>
                        <div className='fa-poll-h2'>
                            <img
                            src={process.env.PUBLIC_URL + '../../assets/image/woman-1.png'}
                            alt='logo'
                            className='eventbck-image-6'
                            />
                            <div className='poll-hh'>
                                <h6 className='fa-fa-host'>Guest </h6>
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
                        <Link className='liv jks'>Polls</Link>
                        <Link className='liv kl'>People
                        <span className='live-notes'>93</span></Link>
                    </div>
                    <div className='live-header'>
                        <label className='_livechat'>People</label>
                    </div>

                    <div className='chat_ss'>
                        <div className='_chtx'>
                            <span className='c-timex'>Host</span>
                            <div className='partitonx'>
                            <h2 className='event-hosts'>
                                <img
                                    src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                    alt='logo'
                                    className='chatterx'
                                    />
                                    Mart
                            </h2>
                            </div>
                        </div>
                        <div className='_chtxx'>
                            <span className='c-timex'>Guest(s)</span>
                            <div className='partitonx'>
                            <h2 className='event-hosts'>
                                <img
                                    src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                    alt='logo'
                                    className='chatterx'
                                    />
                                    Mart
                            </h2>
                            </div>
                        </div>
                        <div className='_chtxx'>
                            <div className='_chtxx-gh'>
                            <span className='c-timex'>Attendees</span>
                            <span className='b-timex'>35</span>
                            </div>
                            <div className='partitonx'>
                                <h2 className='event-hosts'>
                                    <img
                                        src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                        alt='logo'
                                        className='chatterx'
                                        />
                                        Mart
                                </h2>
                            </div>
                             <div className='partitonxx'>
                                <h2 className='event-hosts'>
                                    <img
                                        src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                        alt='logo'
                                        className='chatterx'
                                        />
                                        Mart
                                </h2>
                            </div>
                            <div className='partitonxx'>
                                <h2 className='event-hosts'>
                                    <img
                                        src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                        alt='logo'
                                        className='chatterx'
                                        />
                                        Mart
                                </h2>
                            </div>
                             <div className='partitonxx'>
                                <h2 className='event-hosts'>
                                    <img
                                        src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                        alt='logo'
                                        className='chatterx'
                                        />
                                        Mart
                                </h2>
                            </div>
                             <div className='partitonxx'>
                                <h2 className='event-hosts'>
                                    <img
                                        src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                        alt='logo'
                                        className='chatterx'
                                        />
                                        Mart
                                </h2>
                            </div>
                            <div className='partitonxx'>
                                <h2 className='event-hosts'>
                                    <img
                                        src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                        alt='logo'
                                        className='chatterx'
                                        />
                                        Mart
                                </h2>
                            </div>
                            <div className='partitonxx'>
                                <h2 className='event-hosts'>
                                    <img
                                        src={process.env.PUBLIC_URL + '../../assets/image/3.png'}
                                        alt='logo'
                                        className='chatterx'
                                        />
                                        Mart
                                </h2>
                            </div>
                        </div>
                        
                    </div>

                </div>
           </div>
        </div>
    );
};

export default LiveStreamGuest;