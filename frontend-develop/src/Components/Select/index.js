import React from "react";
import PropTypes from "prop-types";
import "./style.css";
// import Select from "react-select";

const CustomSelect = (props) => {
  const { options } = props;
  return (
    <select
      name={props.name}
      className="gen-select"
      style={props.style}
      onChange={props.onChange}
      value={props.value}
      key={props.title}
    >
      <option value="">Select Categories</option>
      {options.map((data) => (
        <option key={data.id} value={data.value}>{data.value}</option>
      ))}
    </select>
  );
};

CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  options: PropTypes.array.isRequired,
};

CustomSelect.defaultProps = {
  name: null,
  style: null,
};

export default CustomSelect;
