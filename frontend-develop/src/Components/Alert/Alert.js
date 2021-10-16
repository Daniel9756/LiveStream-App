
import { toast } from 'react-toastify';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Alert.css';

const Alert = (props) =>{
  const alerts = props.alerts
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} style={{ display: 'none' }}>
        ${toast(alert.msg)};
      </div>
    ))
  )
}
Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

export default Alert;



