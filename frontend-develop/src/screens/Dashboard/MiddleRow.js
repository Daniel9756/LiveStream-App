import React from 'react';
import CustomTitleText from '../../Components/Title';
import CustomButton from '../../Components/Button';
import CustomLink from '../../Components/Link';


import './userprofile.css';
const MiddleRow= () => {
    return (
        <div className='middle-row'>
            <CustomTitleText
                text="Start creating your virtual events."
                size="sm"
                style={{marginTop: 32}}
            />
            <div className='middle-container'>
                <div className="card-1">
                    <h5 className='_ttle'>Tech & Post COVID-19</h5>
                    <div className="container-12">
                        <div className='_dd-state'>
                            <span className='md-date'>23 April 2020 | 03:00PM</span>
                            <div className='mdd-shift'>
                                <div className='mmd-12'>
                                    <label className='mmd-title'>Registered Attendee's</label> 
                                    <CustomTitleText
                                        text="150"
                                        size="sm"
                                        style={{fontSize: 25,}}
                                    />
                                </div>
                                <div className='mmd-13'>
                                    <label className='mmd-title'>Invited Guest</label> 
                                    <CustomTitleText
                                        text="20"
                                        size="sm"
                                        style={{fontSize: 25}}
                                    />
                                </div>
                            </div>
                        </div>                            
                        <div className='_dd-link'>
                            <CustomLink 
                                text="Live Studio"
                                page="#"

                            />
                        </div>
                    </div>
                </div>
                <div className="card-2">
                    <CustomTitleText
                        text="Create Event"
                        size="sm"
                        style={{paddingTop: 20,paddingBottom: 10, fontSize: 20, textAlign: 'center'}}
                    />
                    <p className='pp-title'> am excited to introduce to you our newest publication. </p>
                    <CustomLink 
                        text="+"
                        page="/event"
                        style={{  
                            paddingTop: 0, 
                            fontWeight: "100",
                            fontSize: 30,
                            marginLeft: '37%',
                        }}  
                    />
                </div>
            </div>
            <div className='ftu-title'>
                    <h1  className='ftu-ev'>Future Events</h1>
                    <h2  className='ftu-mn'>Manage Events</h2>
            </div>
            <br></br>
            <hr></hr>
            <div className='future-event'>
                <div className="card-md">
                    <img
                        src={process.env.PUBLIC_URL + '../../assets/image/image-computer.png'}
                        className='future'
                        alt='Logo'
                    />
                    <div className="container-md">
                        <h4 className='lower'><i className="fa fa-clock"></i> 1 June 2020 | 7:00PM</h4> 
                        <p className='lower-p'>Future of Digital World</p> 
                        <button className='lower-b'>Edit</button>
                    </div>
                </div>
                <div className="card-mds">
                    <img
                        src={process.env.PUBLIC_URL + '../../assets/image/image-computer.png'}
                        className='future'
                        alt='Logo'
                    />
                    <div className="container-md">
                        <h4 className='lower'>1 June 2020 | 7:00PM</h4> 
                        <p className='lower-p'>Future of Digital World</p> 
                        <button className='lower-b'>Edit</button>
                    </div>
                </div>
                <div className="card-mds">
                    <img
                        src={process.env.PUBLIC_URL + '../../assets/image/image-computer.png'}
                        className='future'
                        alt='Logo'
                    />
                    <div className="container-md">
                        <h4 className='lower'>1 June 2020 | 7:00PM</h4> 
                        <p className='lower-p'>Future of Digital World</p> 
                        <button className='lower-b'>Edit</button>
                    </div>
                </div>
                <div className="card-mds">
                    <img
                        src={process.env.PUBLIC_URL + '../../assets/image/image-computer.png'}
                        className='future'
                        alt='Logo'
                    />
                    <div className="container-md">
                        <h4 className='lower'>1 June 2020 | 7:00PM</h4> 
                        <p className='lower-p'>Future of Digital World</p> 
                        <button className='lower-b'>Edit</button>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default MiddleRow;