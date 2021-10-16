import React from 'react';
import { Link } from 'react-router-dom';
import CustomTitleText from '../../Components/Title';
import './userprofile.css'
const LeftRow= () => {
    return (
        <div className='leftbar'>
                 <CustomTitleText
                      text="News & Tips"
                      size="sm"
                      style={{paddingTop: 40,lineHeight: 0}}
                  />
               <div className='left-container'>
                    <div className="left-card-1">
                        <CustomTitleText
                            text="Fully Responsive"
                            size="sm"
                            style={{paddingTop: 10,lineHeight: 0, fontSize: 15}}
                        />
                        <p className='lefy-par'>Am excited to introduce to you our newest publication. </p>
                        <Link  to="#" className="_pay_leftrow">READ MORE</Link>
                    </div>
                    <div className="left-card-1">
                        <CustomTitleText
                            text="Fully Responsive"
                            size="sm"
                            style={{paddingTop: 10,lineHeight: 0, fontSize: 15}}
                        />
                        <p className='lefy-par'>Am excited to introduce to you our newest publication. </p>
                        <Link  to="#" className="_pay_leftrow">READ MORE</Link>
                    </div>
                    <div className="left-card-1">
                        <CustomTitleText
                            text="Fully Responsive"
                            size="sm"
                            style={{paddingTop: 10,lineHeight: 0, fontSize: 15}}
                        />
                        <p className='lefy-par'>Am excited to introduce to you our newest publication. </p>
                        <Link  to="#" className="_pay_leftrow">READ MORE</Link>
                    </div>
                </div>
           </div>
    );
};

export default LeftRow;