import React from 'react';
import { Link } from 'react-router-dom';
import './userlogin.css'
const UserLogin= () => {
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
          <div className='userlogin'>
                <div className='subuser'>
                        <h2 className='_userheading'>Welcome back!</h2> 
                        <p className='_userps'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br/> diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                        <span className='_userspans'>Are you new to Hocast? <Link to='/' className='_usrlnk'>Sign in</Link></span>
                </div>
                <div className='userlogin-form'>
                   <form className='_form-childx'>
                       <div className='klh'>
                            <label for="email" className='mail'>Email</label><br/>
                            <input type="text" id="email" name="email" value="" placeholder='Your email'/>
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
                        <div className='login_link'>
                            <div className='logged-in_boxs'>
                                <input type='radio' name='' className='_login-radio' />
                                <Link to='#' className='logged-ins'>
                                    Keep me logged in
                                </Link>
                            </div>
                            <div className='fgot-boxs'>
                                <Link to='#' className='fgot'>
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                        <input type='submit' value='Join event' className='_btnx' />
                    </form>
                </div>
          </div>
        </div> 
    );
};

export default UserLogin;