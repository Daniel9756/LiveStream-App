import React from "react";
import Header from "../Dashboard/Header";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../Components/ErrorMessage/errorMessage";
import CustomButton from "../../Components/Button";
import CustomTitleText from "../../Components/Title";
import CustomLabelText from "../../Components/Label";
import CustomTextInput from "../../Components/TextInput";

import "./event.css";

const GuestSpeakers = (props) => {
  const guestspeaker = [
    {
      inputname: `guest ${props.item}`,
      email: `email ${props.item}`,
    },
  ];
  return (
    <div className="row" style={props.style}>
      <div className="col-md-6">
        <CustomLabelText
          forlabel={guestspeaker[0].inputname}
          text={`Guest ${props.item}`}
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
          name={guestspeaker[0].inputname}
          placeholder="Enter guest name"
          onChange={props.formikProps.handleChange}
          value={props.formikProps.values.inputname}
          style={{
            marginLeft: "5%",
            marginTop: 0,
            width: "86%",
            height: 40,
            padding: 10,
          }}
        />
      </div>
      <div className="col-md-6">
        <CustomLabelText
          forlabel={guestspeaker[0].email}
          text="Email"
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
          name={guestspeaker[0].email}
          placeholder="Enter guest email address"
          onChange={props.formikProps.handleChange}
          value={props.formikProps.values.email}
          style={{
            marginLeft: "5%",
            marginTop: 0,
            width: "86%",
            height: 40,
            padding: 10,
          }}
        />
      </div>
    </div>
  );
};

export default GuestSpeakers;
