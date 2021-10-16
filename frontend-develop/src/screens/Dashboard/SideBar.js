import React from 'react';
import CustomTitleText from '../../Components/Title';
import CustomButton from '../../Components/Button';

import './userprofile.css'
const SideBar= (props) => {
    return (
        <div className='profile-body'>
          <div className='_sidebar'>
              <div className='sidebar-content'>
                  <CustomTitleText
                      // text={props.user.user.firstname + " " + props.user.user.lastname}
                      size="sm"
                      style={{paddingTop: 20,paddingBottom: 10, fontSize: 25}}
                  />
                  <p className='_sidebar-decription'>Brand Designer & Strategist</p>
                  <span className='_sidebar-span'>Creatosh Design Studio</span>
              </div>
              <hr></hr>
              <div className='side-figure'>
                  <div className='side-figure_content'>
                    <label className='lable-title'>Event Created</label>
                    <CustomTitleText
                        text="50"
                        size="sm"
                        style={{fontSize: 25}}
                    />
                  </div>
                  <div className='side-figure_content'>
                    <label className='lable-title'>Total Attendees</label>
                    <CustomTitleText
                        text="2.4k"
                        size="sm"
                        style={{fontSize: 25}}
                    />
                  </div>
                  <div className='side-figure_content'>
                    <label className='lable-title'>Total Guest</label>
                    <CustomTitleText text="239" size="sm" style={{fontSize: 25}}/>
                  </div>
              </div>
              <hr></hr>
              <div className='side-bottom'>
                <CustomTitleText text="Revenues Insight" size="sm" style={{fontSize: 11}}/>
                <div className='side-last'>
                  <label className='lable-title' style={{}}>Last Event</label> 
                  <CustomTitleText text="N 200,000" size="sm" style={{fontSize: 23, float: 'right'}}/>
                </div> 
                <div className='side-last'>
                  <label className='lable-title' style={{}}>Total</label> 
                  <CustomTitleText text="N 3,000,000" size="sm" style={{fontSize: 23, float: 'right'}}/>
                </div> 
              </div>
              <hr></hr>
              <div className='premium'>
                <CustomTitleText text="Go Premium" size="sm" style={{fontSize: 23}}/>
                <p>this is a story of a very very very dirty boy this is a story of a very very very dirty boy</p>
                <CustomButton 
                  type="submit"
                  value="Upgrade your Plan"  
                  style={{ width: '100%'}}  
                />
              </div>
              
          </div>
        </div>
    );
};

export default SideBar;