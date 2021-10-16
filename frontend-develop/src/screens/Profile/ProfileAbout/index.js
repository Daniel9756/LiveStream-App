import React from "react";
import "./style.css";

import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../../Components/ErrorMessage/errorMessage";
import CustomTextInput from "../../../Components/TextInput";
import CustomTitleText from "../../../Components/Title";
import CustomTextArea from "../../../Components/TextArea";
import CustomLabelText from "../../../Components/Label";
import UIBottom from "../../../Components/UIBottom";

const validationSchema = Yup.object().shape({
  title: Yup.string().label("Title").required("Title is required"),
  bio: Yup.string().label("Bio").required("Bio is required"),
});

function Profile(props) {
  const initialValues = {
    title:  "",
    bio: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => props.getProfileData(values)}
        validationSchema={validationSchema}
      >
        {(formikProps) => {
          console.log(formikProps);
          return (
            <form onSubmit={formikProps.handleSubmit}>
              <div className="profileTitle">
                <CustomTitleText
                  text="Tell us about yourself"
                  size="sm"
                  style={{
                    textAlign: "center",
                    marginTop: 40,
                    marginBottom: 20,
                    fontSize: 25,
                  }}
                />
              </div>
              <div className="_profile_box">
                <div className="profile_label">
                  <CustomLabelText
                    forlabel="title"
                    text="Title"
                    style={{ fontSize: 15, fontWeight: "bold" }}
                  />
                  <br />

                  <CustomTextInput
                    type="text"
                    name="title"
                    placeholder="Enter your title here"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.title}
                    style={{ width: "100%" }}
                    autoComplete="off"
                  />

                  <ErrorMessage errorValue={formikProps.errors.title} />
                </div>
                <div className="text_label">
                  <CustomLabelText
                    forlabel="bio"
                    text="Bio"
                    style={{ fontSize: 15, fontWeight: "bold" }}
                  />
                  <br />
                  <CustomTextArea
                    name="bio"
                    placeholder="Enter your bio information"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.bio}
                  />
                  <ErrorMessage errorValue={formikProps.errors.bio} />
                </div>
                {/* <div>
                  <UIBottom
                    type="submit"
                    // className={classes.btn}
                    text="Next"
                    style={{
                      padding: 8,
                      float: "Right",
                      width: "120px",
                      textDecoration: "none",
                      backgroundColor: "#CA6144",
                      marginRight: "100px",
                      color: "#FFFFFF",
                      width: "80px",
                      disableRipple: true,
                    }}
                  ></UIBottom>
                </div> */}
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
}
export default Profile;
