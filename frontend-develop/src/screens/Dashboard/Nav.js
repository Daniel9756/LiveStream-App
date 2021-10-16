import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomButton from '../../Components/Button';
import './userprofile.css';


const active = {
    color: "#F55B31",
    borderBottom: "5px solid #F55B31",
    paddingBottom: 25,
}



const Header= () => {
    let location = useLocation();
    return (
        <div>
            <div className='nav'>
                 <div className='_box-containerlogo_container'>
                    <img src={process.env.PUBLIC_URL + '../../assets/image/Group 2896.svg'} 
                    className='dashboard_logo'
                    alt='Logo'
                    />
                 </div>
                 <div className='dash_links' >
                        <ul className='list-link'>
                            <li className='list-link-child'><Link to="/dashboard" style={location.pathname === '/dashboard' ? active: {}}>Dashboard</Link></li>
                            <li className='list-link-child'><Link to='/event' style={location.pathname === '/event' ? active: {}}>Create Event</Link></li>
                            <li className='list-link-child'><Link to="/live-event" style={location.pathname === '/live-event' ? active: {}}>Live Studio</Link></li>
                            <li className='list-link-child'><Link to="/ManageEvent" style={location.pathname === '/ManageEvent' ? active: {}}>Analytics</Link></li>
                           

                        </ul>
                 </div>
                 <div className="dropdown">
                    <div className='image_icon dropbtn'></div>
                    <div className="dropdown-content">
                        <Link to="/" className='drp-link'>Login</Link>
                        <Link to="/" className='drp-link'>Sign out</Link>
                    </div>
                 </div>
                 <CustomButton
                        type="button"
                        btnStyleType="secondaryBtn"
                        icon={<i className="fa fa-bars" ></i>}
                        style={{height: 35}}
                    />
            </div>
        </div>
    );
};

export default Header;