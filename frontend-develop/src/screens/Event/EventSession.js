import React from "react";
import Header from "../Dashboard/Header";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../Components/ErrorMessage/errorMessage";
import CustomLabelText from "../../Components/Label";
import CustomTextInput from "../../Components/TextInput";
import CustomSelect from "../../Components/Select";

import "./event.css";
const options = [
  { value: "free", label: "free" },
  { value: "burial", label: "burial" },
];
const EventSession = (props) => {
  const eventsession = [
    {
      inputname: `sessionname ${props.item}`,
     price: `ticketprice ${props.item}`,
      startdate: `startdate ${props.item}`,
      starttime: `starttime ${props.item}`,
      enddate: `enddate ${props.item}`,
      endtime: `endtime ${props.item}`,
    },
  ];

  return (
    <div className="" style={props.style}>
      <div className="row">
        <div className="col-md-6">
          <CustomLabelText
            forlabel={eventsession[0].inputname}
            text={`Session ${props.item}`}
            style={{
              fontSize: 13,
              marginLeft: "5%",
              marginTop: 5,
              color: "#0000005e",
            }}
          />
          <br />
          <CustomTextInput
            type="text"
            name={eventsession[0].inputname}
            placeholder="Enter your session name"
            onChange={props.formikProps.handleChange}
            value={props.formikProps.values.inputname}
            style={{
              marginLeft: "5%",
              marginTop: 0,
              width: "95%",
              height: 40,
              padding: 10,
            }}
          />
        </div>
        <div className="col-md-6">
          <CustomLabelText
            forlabel={eventsession[0].price}
            text={`Ticket Price ${props.item}`}
            style={{
              fontSize: 13,
              marginLeft: "5%",
              marginTop: 5,
              color: "#0000005e",
            }}
          />
          <br />
          <CustomSelect
            name={eventsession[0].price}
            options={options}
            style={{ marginLeft: "5%", marginTop: 0, width: "86%" }}
            onChange={props.formikProps.handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <CustomLabelText
                forlabel={eventsession[0].startdate}
                text="Start Date"
                style={{ fontSize: 13, marginTop: 5, color: "#0000005e" }}
              />
              <br />
              <CustomTextInput
                type="date"
                name={eventsession[0].startdate}
                onChange={props.formikProps.handleChange}
                value={props.formikProps.values.startdate}
                style={{
                  marginTop: 0,
                  height: 40,
                  width: 134,
                  paddingLeft: 13,
                  paddingRight: 0,
                }}
                min="2018-01-01"
                max="2050-12-31"
              />
            </div>
            <div className="col-md-6">
              <CustomLabelText
                forlabel={eventsession[0].starttime}
                text="Start Time"
                style={{ fontSize: 13, marginTop: 5, color: "#0000005e" }}
              />
              <br />
              <CustomTextInput
                type="time"
                name={eventsession[0].starttime}
                onChange={props.formikProps.handleChange}
                value={props.formikProps.values.starttime}
                style={{ marginTop: 0, height: 40, padding: 10 }}
                min="09:00"
                max="18:00"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <CustomLabelText
                forlabel={eventsession[0].enddate}
                text="End Date"
                style={{ fontSize: 13, marginTop: 5, color: "#0000005e" }}
              />
              <br />
              <CustomTextInput
                type="date"
                name={eventsession[0].enddate}
                onChange={props.formikProps.handleChange}
                value={props.formikProps.values.enddate}
                style={{
                  marginTop: 0,
                  height: 40,
                  width: 134,
                  paddingLeft: 13,
                  paddingRight: 0,
                }}
                min="2018-01-01"
                max="2050-12-31"
              />
            </div>
            <div className="col-md-6">
              <CustomLabelText
                forlabel={eventsession[0].endtime}
                text="End Time"
                style={{ fontSize: 13, marginTop: 5, color: "#0000005e" }}
              />
              <br />
              <CustomTextInput
                type="time"
                name={eventsession[0].endtime}
                onChange={props.formikProps.handleChange}
                value={props.formikProps.values.endtime}
                style={{ marginTop: 0, height: 40, padding: 10, width: "68%" }}
                min="09:00"
                max="18:00"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSession;
