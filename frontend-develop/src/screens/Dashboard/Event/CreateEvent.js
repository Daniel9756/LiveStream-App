import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import StartEvent from "./StartEvent.js"; 
import '../userprofile.css'
import './event.css'


const CreateEvent= () => {
    return (
        <div className='eventpage'>
           <Header/> 
          <div className='event-details'>
             <div className='event-title'>
                <h2 className='_eventH'>Create your event</h2>
                <p className='_eventP'>Create your event in less than 5 minutes</p>
             </div>
             <div className='event-form'>
                <div className='input-box'>
                    <form>
                        <div className='event-txt'>
                           <input type="text"  className='txtarea'/>
                        </div>
                        <div className='event-label'>
                            <select name="cars" id="cars" className='event-option'>
                                <option value="volvo">Select Categories</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className='event-ttarea'>
                          <textarea  className='tetarea'/>
                        </div>
                        <div className='kalend'>
                           <label className='tartdate' >
                              Start Date: <br/>
                              <input type="date" id="start" name="start" value="Start Date" min="2018-01-01" max="2050-12-31" required/>
                        </label>
                        <label className='tartdates'>
                              End Date: <br/>
                           <input type="date" id="end" name="endstart" value="End Date " min="2018-01-01" max="2050-12-31" required/>
                        </label>
                        </div>
                        <div className='ttime'>
                        <label className='tartdate'>
                              Start time: <br/>
                              <input type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
                           </label>
                           <label className='tartdates'>
                              End time: <br/>
                              <input type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
                           </label>
                        </div>
                   </form>
                   <div className='evntbtn'>
                        <form>
                           <label className='evnticket'>
                              Ticket
                              <br/>
                              <input type="text"  className='ttarea' placeholder="₦ 0.0"/>
                           </label>
                        </form>
                        <div className='bbtn-evnt'>
                           <button className='bbtn-1'>Paid</button>
                           <button className='bbtn-2'>Free</button>
                        </div>
                   </div>
                </div>
                <div className='left-text'>
                    <div className='event-upload'>
                        <span className='upload-icon'><i class="fa fa-upload"></i></span>
                        <div className='sub-upload'>
                           <p className='upload-txt'>Drag & Drop or click to add event image</p>
                           <div className='upload_sub-txt'>JPEG or PNG (2160x1920px)</div>
                        </div>
                    </div>
                    <div className='event-guest'>
                       <div className='gust-acc'>
                           <div className='gust'>
                                 <h2 className='gust-ttile'>Guest/Co-host</h2>
                                 <p className='gust-desc'>Your maximum guest is 2 <span className='gust-link'><Link>View Subscription Plan</Link></span></p>
                           </div>
                           <div className='gust-form'>
                                 <form className='gus_form'>
                                       <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value" style="border-top-left-radius: 8px;">-</div>
                                       <input type="number" id="numbers" value="0" />
                                       <div class="value-buttons" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                 </form>
                           </div>
                       </div>
                       <div className='gust-form'>
                          <form className='guest-form'>
                             <div className='gst1'>
                               <input type="text" placeholder='Guest Name 1' className='txtareas'/> 
                             </div>
                             <div className='gst-1'>
                               <input type="text" placeholder='Guest Email 1' className='txtareas'/>
                             </div>
                          </form>
                          <form className='guest-form'>
                             <div className='gst1'>
                               <input type="text" placeholder='Guest Name 2' className='txtareas'/> 
                             </div>
                             <div className='gst-1'>
                               <input type="text" placeholder='Guest Email 2' className='txtareas'/>
                             </div>
                          </form>
                       </div>
                       <div className='gust-acc'>
                           <div className='gust'>
                                 <h2 className='gust-ttile'>Sponsors</h2>
                                 <p className='gust-descs'>This enables attendees know who is sponsoring the event</p>
                           </div>
                           <div className='gust-form'>
                                 <form className='gus_forms'>
                                       <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                       <input type="number" id="numbers" value="0" />
                                       <div class="value-buttonx" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                 </form>
                           </div>
                       </div>
                       <div className='spnsor-field'>
                           <input type="text" placeholder='Sponsor Name' className='txtareass'/>
                        </div>
                        <div className='guess-btn'>
                           <button className='guss-btn-1'>Save</button>
                           <Popup modal trigger={<button className='guss-btn-2'>Publish</button>}>
                              {close => <StartEvent close={close} />} 
                           </Popup>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
    );
};

export default CreateEvent;