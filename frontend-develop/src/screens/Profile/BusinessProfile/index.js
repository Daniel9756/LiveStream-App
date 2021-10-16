import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../../Components/ErrorMessage/errorMessage";
import CustomTextInput from "../../../Components/TextInput";
import CustomButton from "../../../Components/Button";
import CustomTitleText from "../../../Components/Title";
import CustomLabelText from "../../../Components/Label";
import UIBottom from "../../../Components/UIBottom";

const validationSchema = Yup.object().shape({
  businessname: Yup.string()
    .label("Business Name")
    .required("Business Name is required"),
  location: Yup.string()
    .label("Business Location")
    .required("Business Name is required"),
});

function BusinessProfile(props) {
  const { aboutData } = props;
  console.log(props.aboutData, "business");
  const initialValues = {
    title: props.aboutData.title,
    bio: props.aboutData.bio,
    businessname: "",
    location: props.location ? props.user?.location : "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, aboutData) => props.onSubmit(values, aboutData)}
        validationSchema={validationSchema}
      >
        {(formikProps) => {
          return (
            <form onSubmit={formikProps.handleSubmit}>
              <div className="profileTitle">
                <CustomTitleText
                  text="Tell us about your business"
                  size="sm"
                  style={{
                    textAlign: "center",
                    marginTop: 30,
                    marginBottom: 20,
                    fontSize: 25,
                  }}
                />
              </div>
              <div className="_profile_box" style={{ marginTop: 20 }}>
                <div className="profile_label">
                  <CustomLabelText
                    forlabel="businessname"
                    text="What is the name of your business? "
                    style={{ fontSize: 15, fontWeight: "bold" }}
                  />
                  <br />
                  <CustomTextInput
                    type="text"
                    name="businessname"
                    placeholder="Enter your business name"
                    style={{ width: 350 }}
                    onChange={formikProps.handleChange}
                    value={formikProps.values.businessname}
                    style={{ width: 350 }}
                  />
                  <ErrorMessage errorValue={formikProps.errors.businessname} />
                </div>
                <div className="text_label" style={{ marginTop: 10 }}>
                  <CustomLabelText
                    forlabel="location"
                    text="Where is it located?"
                    style={{ fontSize: 15, fontWeight: "bold" }}
                  />
                  <br />
                  <CustomTextInput
                    type="text"
                    name="location"
                    placeholder="Enter business location"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.location}
                    style={{ width: 350 }}
                    style={{ width: 350 }}
                  />
                  <ErrorMessage errorValue={formikProps.errors.location} />
                </div>
              </div>
            
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default BusinessProfile;
