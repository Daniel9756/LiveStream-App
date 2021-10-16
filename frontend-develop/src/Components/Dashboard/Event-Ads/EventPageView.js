import React from 'react';
import { Link } from 'react-router-dom';
import './eventpage.css'

const EventPageView= () => {
    return (
       <div className='event_pageview'>
          <div className='event-nav'>
              <div className='E-img-wrapper'>
                  <img src={process.env.PUBLIC_URL + '../../assets/image/Group5.svg'}
                    alt='logo'
                    className='view-logo'
                  />
              </div>
              <div className='e-sign'>
                  <span className='e-icon'>
                  <i class="fa fa-bars"></i>
                  </span>
              </div>
          </div>
          <div className='eventview-wrapper'>
               <div className='viewpage-1'>
                  <div className='view-header'>
                      <h1 className='view-h1'>Tech & Post COVID-19</h1>
                      <p className='view-desc'>23 April, 2020 - 24 April, 2020</p>
                  </div>
                  <div className='image-view'>
                      <img
                        src={process.env.PUBLIC_URL + '../../assets/image/woman.png'}
                        alt='logo'
                        className='event-img'
                     />
                      <div className='image-dec'>
                         <h4 className='img-header'>DESCRIPTION</h4>
                         <p className='image-descr-w'>
                         Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                          sed<br/> diam nonumy eirmod tempor invidunt ut labore et 
                          dolore<br/> magna aliquyam erat, sed diam voluptua. 
                          At vero eos et<br/> accusam et justo duo dolores et ea
                          rebum. Stet clita kasd<br/> gubergren, no sea takimata 
                          sanctus est Lorem ipsum dolor sit<br/> amet. 
                         Lorem ipsum dolor sit amet, consetetur sadipscing
                         </p>
                      </div>
                  </div>
                  <div className='event-link'>
                    <label className='link-link'>SHARE EVENT LINK</label><br/>
                    <Link to='/' className='lnk'>hocast/joshmart/tech&postcovid19</Link>
                  </div>
                  <div className='host'>
                      <h3 className='abt'>About the host</h3>
                      <div className='n-name'>
                        <label className='abt-name'>Name</label>
                        <h1 className='author'>Josh Osazuwa</h1>
                      </div>
                      <div className='bio-details'>
                        <label className='bio-name'>Bio</label>
                        <p className='about-bio'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/>
                         sed diam nonumy eirmod tempor invidunt ut labore et<br/> dolore
                          magna aliquyam erat, sed diam voluptua. 
                        At vero<br/> eos et accusam et justo duo dolores et ea rebum. Stet
                        </p>
                      </div>
                      <div className='org'>
                         <label className='org-name'>Organization</label>
                         <p className='org-details'>Social Media Week</p>
                      </div>

                  </div>
               </div>
               <div className='viewpage-2'>
                   <div className='event-btn'>
                       <button className='view-btn'>Going live in</button>
                   </div>
                   <div className='_event-countdown'>
                        <div className='e_live002'>
                            <h1 className='eventy02'>00</h1>
                            <span className='e-xy_02'>Days</span>
                        </div>
                        <div className='e_live03'>
                            <h1 className='eventy03'>05</h1>
                            <span className='e-xy_03'>Hours</span>
                        </div>
                        <div className='e_live04'>
                            <h1 className='eventy04'>50</h1>
                            <span className='e-xy_04'>Minutes</span>
                        </div>
                        <div className='e_live05'>
                            <h1 className='eventy05'>28</h1>
                            <span className='e-xy_05'>Seconds</span>
                        </div>
                    </div>
                    <div className='event-owner'>
                        <div className='owner_live001'>
                            <label className='event-tt'>Host</label>
                            <h1 className='e-xy01'>Josh Osazuwa</h1>
                            <span className='e_xy_01'>Brand Designer & Strategist</span>
                        </div>
                        <div className='own_live002'>
                            <label className='event-tt'>Guest1</label>
                            <h1 className='e-xy02'>Josh Osazuwa</h1>
                            <span className='e_xy_01'>Identity Designer</span>
                        </div>
                        <div className='onwer_live003'>
                            <label className='event-tt'>Guest2</label>
                            <h1 className='e-xy03'>Josh Osazuwa</h1>
                            <span className='e_xy_01'>Inventor</span>
                        </div>
                    </div>
                    <div className='event-ticketing'>
                       <h2 className='tt-head'>Ticket(s)</h2>
                       <p className='tt-p'>Select event sessions you wish to attend</p>
                       <div className='session-wrapper'>
                            <div className='sess-1'>
                                <div className='sess-child'>
                                    <input type="radio" id="first-session" name="first-session"/>
                                    <label className='ses-label'>
                                        Session 1 - Introduction
                                    </label><br/>
                                    <span className='sess-pan'>21 Nov, 12:00PM–1:00PM</span>
                                </div>
                                <label className='sess-free'>Free</label>
                            </div>
                            <div className='sess-1'>
                                <div className='sess-child'>
                                    <input type="radio" id="first-session" name="first-session"/>
                                    <label className='ses-label'>
                                       Session 2 - Design Strategy
                                    </label><br/>
                                    <span className='sess-pan'>21 Nov, 2:00PM–3:00AM</span>
                                </div>
                                <label className='sess-free'>NGN 3000.00</label>
                            </div>
                            <div className='sess-1'>
                                <div className='sess-child'>
                                    <input type="radio" id="first-session" name="first-session"/>
                                    <label className='ses-label'>
                                      Session 3 - Design Strategy
                                    </label><br/>
                                    <span className='sess-pan'>21 Nov, 12:00PM–1:00PM</span>
                                </div>
                                <label className='sess-free'>NGN 3000.00</label>
                            </div>
                            <div className='btn-sess'>
                                <button className='sess-btn'>Checkout</button>
                            </div>
                       </div>
                    </div>

                    <div className='upcoming-e'>
                         <h3 className='coming-event-tt'>Upcoming events by host</h3>
                         <div className='upcoming-event_display'>
                            <div className='event-display-img'>
                                <img
                                src={process.env.PUBLIC_URL + '../../assets/image/woman-1.png'}
                                alt='logo'
                                className='img-display-e'
                                />
                            </div>
                             <div className='abt-event'>
                                <h2 className='upcoming-tt'>Future of Digital World</h2>
                                <span className='event-author'>By Josh Osazuwa</span><br/>
                                <label className='event-date'>1 June 2020 | 7:00PM</label>
                                <p className='event-dsc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam<br/> nonumy eirmod tempor invidunt ut labore et dolore
                                     magna aliquyam
                                </p>
                             </div>
                         </div>
                    </div>
               </div>
          </div>
       </div>
    );
};

export default EventPageView;