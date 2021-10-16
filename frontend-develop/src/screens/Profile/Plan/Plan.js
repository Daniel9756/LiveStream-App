import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const active = { 
    background: "#ca6144",
    color: "white"
  }


const Plan = props => {
    return (
        <article onClick={() => props.onClick()} className="card" style={props.selectPlanState === props.title ? active : {}}>
            <div className="text-card">
            <h3 className="card-title" style={props.selectPlanState === props.title ? active : {}}>{props.title}</h3>
            <label className="card-fig" style={props.selectPlanState === props.title ? active : {}}><sup>N</sup>{props.price}</label>
            <ul className="plan-title">
                <li className="plan-child">{props.attendance}</li>
                <li className="plan-child">{props.time}</li>
                <li className="plan-child">{props.guest}</li>
                <li className="plan-child">{props.percent}</li>
            </ul>
            </div>
        </article>
    )
}

Plan.propTypes = {
    onClick: PropTypes.func,
}



export default Plan;
