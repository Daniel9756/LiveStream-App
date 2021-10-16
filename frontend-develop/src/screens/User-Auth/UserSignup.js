import React from 'react';
import { Link } from 'react-router-dom';
import './usersign.css'

const UserSignup= () => {
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
          
          <div className='user-wrapper'>
               <div className='subuser'>
                  <h2 className='_userheading'>Join the evolution of virtual events</h2> 
                  <p className='_userp'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br/> diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                  <span className='_userspan'>Already have an account? <Link to='/' className='_usrlnk'>Log in</Link></span>
               </div>
               <div className='_userform'>
                   <form>
                    <div className='-hgh'>
                        <label for="fname" className='fname-s'>Full Name</label><br/>
                        <input type="text" id="fname" name="fname" value="" placeholder='Full name'/>
                    </div>
                    <div className='klh'>
                        <label for="email" className='mail'>Email</label><br/>
                        <input type="text" id="email" name="email" value="" placeholder='Your email'/>
                    </div>
                    <div class="ynum">
                       <label className='_fone'>
                            Phone Number
                        </label><br/>
                        <input type="tel" class="form-control" placeholder='Enter your phone number'/>
                    </div>
                    <div className='_labell-child'>
                        <label htmlFor='Password' className='_passe'>
                            Password
                        </label><br/>
                        <input type='password' name='password' value=''placeholder='Enter your password'
                            className='_passed'
                            required
                        />
                   </div>
                    <span className='_iconx'>
                    {' '}
                    <i className='fa fa-eye'></i>
                    </span>
                   </form>
               </div>
               <div className='user-term'>
               <form>
                    <p className='_terms'><input type="checkbox" name="terms"/> I agree to the <u>Terms</u> & <u>Privacy Policy</u>
                    <br/>  I agree to share my contact details with the host.</p>
                    <button className='user-btn'>Join event</button>                
               </form>     
            </div>
          </div>
        </div> 
    );
};

export default UserSignup;