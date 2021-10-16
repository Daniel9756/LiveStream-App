import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const ProgressBar = props => {

    return (
        
        <div className='myprogress-bar'>
            <div className="phase">
                <div className='bullet active' >
                <span className='_span'>1</span>
                </div>
                <hr className="bar generalStatebar" />
                <p className="title">About You</p>
            </div>
            
            <div className="phase">
                <div className='bullet generalState'>
                <span className='_span'>2</span>
                </div>
                <hr className="bar generalStatebar"/>
                <p className="title ">Association</p>
            </div>
            <div className="phase">
                <div className='bullet generalState'>
                <span className='_span'>3</span>
                </div>
                <hr className="bar generalStatebar"/>
                <p className="title">Select Plan</p>
            </div>
            <div className="phase" style={{width: 25}}>
                <div className='bullet generalState' >
                <span className='_span'>4</span>
                </div>
                <p className="title" style={{marginLeft: 0}}>Done</p>
            </div>
        </div>
       
    )
}


export default ProgressBar;