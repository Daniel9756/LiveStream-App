 import React from 'react';
 import './userprofile.css'
 import { Link, useHistory, useLocation } from 'react-router-dom';
 import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Header from'./Header';
import SideBar from'./SideBar';
import MiddleRow from'./MiddleRow';
import LeftRow from'./LeftRow';



const UserProfile= (props) => {
    let history = useHistory();
    window.localStorage.removeItem('profile_page');
    if (!props.isAuthenticated) {
      history.replace('/'); 
    }
    return (
      <div className='UseProfile'>
          <div className='content' style={{ overflowY: 'scroll', height: 'calc(100vh - 50px)',width: '96%' }}>
            <SideBar 
            {...props}
            />
            <MiddleRow/>
            <LeftRow/>
          </div>
      </div>
    );
};


UserProfile.protoTypes = {
  user: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  user: state.user.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(UserProfile);