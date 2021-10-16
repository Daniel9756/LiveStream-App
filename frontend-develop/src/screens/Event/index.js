import React, { useReducer } from "react";
import Header from "../Dashboard/Header";
import { withFormik, Formik, useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../Components/ErrorMessage/errorMessage";
import CustomButton from "../../Components/Button";
import CustomTitleText from "../../Components/Title";
import CustomLabelText from "../../Components/Label";
import CustomTextInput from "../../Components/TextInput";
import CustomTextArea from "../../Components/TextArea";
import CustomSelect from "../../Components/Select";
import { Link, useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Creators } from "../../services/redux/event/actions";
import "./event.css";

const options = [
  { value: "free", id: 1 },
  { value: "3500", id: 2 },
];
const dynamicSessionInitialState = [1];
const dynamicSessionReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, 1];
    case "REMOVE":
      return state.filter((_, index, arr) => index !== arr.length - 1);
    default:
      return dynamicSessionInitialState;
  }
};

const dynamicSpeakerInitialState = [1];
const dynamicSpeakerReducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "REMOVE":
      return state.filter((_, index, arr) => index !== arr.length - 1);
    case "ADD":
      return [...state, 1];
    default:
      return dynamicSpeakerInitialState;
  }
};

function CreateEvent(props) {
  const [dynamicSession, dynamicSessionDispatch] = useReducer(
    dynamicSessionReducer,
    dynamicSessionInitialState
  );

  const [dynamicSpeaker, dynamicSpeakerDispatch] = useReducer(
    dynamicSpeakerReducer,
    dynamicSpeakerInitialState
  );
  const history = useHistory();

  const { submitPublish, event } = props;
  console.log(event, "events on func")

  if(event?.status === 200) {
    history.push("./manageEvent");
  }

  const formik = useFormik({
    initialValues: {
      banner: "",
      name: "",
      category: "",
      description: "",
      guestSpeakers: [
        {
          guestName: "",
          guestEmail: "",
        },
      ],
      eventSession: [
        {
          sessionName: "",
          sessionPrice: "",
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: "",
        },
      ],
    },
    createEventSchema: Yup.object().shape({
      banner: Yup.string().required("Please  upload a banner"),
      name: Yup.string()
        .min(2, "Name must be atleast two characters long!")
        .required("Event Name is required"),
      category: Yup.string().required("Business Name is required"),
      description: Yup.string()
        .required("This field is required")
        .min(10, "Must be atleast 10 characters long!"),
    }),
    onSubmit: (values) => {
      submitPublish(values);
    },
  });
  // console.log(event.status, "event status");

  console.log(formik.values);
  return (
    <div className="eventpage" style={{marginBottom: 40}}>
      {/* <Header /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-2">
            <div className="event-title">
              <CustomTitleText
                text="Create your event"
                size="sm"
                style={{
                  paddingTop: 20,
                  paddingBottom: 10,
                  fontSize: 30,
                  textAlign: "center",
                }}
              />
              <p className="_eventP">
                Create your event in less than 5 minutes
              </p>
              <div>
                {/* {event.lenght && event.status === 200 && (
                  <p>Event Successfully Created</p>
                )} */}
              </div>
            </div>
            <div className="event-form">
              <div className="input-box">
                <form onSubmit={formik.handleSubmit}>
                  <div className="event-upload">
                    <span className="upload-icon">
                      <i className="fa fa-upload"></i>
                    </span>
                    <div className="sub-upload">
                      <p className="upload-txt">
                        Drag & Drop or click to add event image
                      </p>
                    </div>
                  </div>
                  <CustomLabelText
                    forlabel="Banner"
                    text="Event banner"
                    style={{
                      fontSize: 13,
                      marginLeft: "5%",
                      marginTop: 25,
                      color: "#0000005e",
                      fontWeight: "600",
                    }}
                  />
                  <br />
                  <CustomTextInput
                    type="text"
                    name="banner"
                    placeholder="Enter your event name"
                    onChange={formik.handleChange}
                    value={formik.values.banner}
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                      height: 40,
                      padding: 10,
                    }}
                  />

                  <p
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                    }}
                  >
                    {formik.touched.banner && formik.errors.banner && (
                      <small style={{ color: "#CA6144" }}>
                        {formik.errors.banner}
                      </small>
                    )}
                  </p>
                  <CustomLabelText
                    forlabel="eventname"
                    text="Event name"
                    style={{
                      fontSize: 13,
                      marginLeft: "5%",
                      marginTop: 25,
                      color: "#0000005e",
                      fontWeight: "600",
                    }}
                  />
                  <br />
                  <CustomTextInput
                    type="text"
                    name="name"
                    placeholder="Enter your event name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                      height: 40,
                      padding: 10,
                    }}
                  />

                  <p
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                    }}
                  >
                    {formik.touched.name && formik.errors.name && (
                      <small style={{ color: "#CA6144" }}>
                        {formik.errors.name}
                      </small>
                    )}
                  </p>
                  <CustomLabelText
                    forlabel="category"
                    text="Select Categories"
                    style={{
                      fontSize: 13,
                      marginLeft: "5%",
                      marginTop: 25,
                      color: "#0000005e",
                    }}
                  />
                  <br />
                  <CustomSelect
                    name="category"
                    options={options}
                    style={{ marginLeft: "5%", marginTop: 0 }}
                    value={formik.values.category}
                    onChange={formik.handleChange}
                  />

                  <p
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                    }}
                  >
                    {formik.touched.category && formik.errors.category && (
                      <small style={{ color: "#CA6144" }}>
                        {formik.errors.category}
                      </small>
                    )}
                  </p>
                  <CustomLabelText
                    forlabel="description"
                    text="Description"
                    style={{
                      fontSize: 13,
                      marginLeft: "5%",
                      marginTop: 25,
                      color: "#0000005e",
                    }}
                  />
                  <br />
                  <CustomTextArea
                    name="description"
                    placeholder="Enter your bio information"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    cols={65}
                    style={{ marginLeft: "5%", marginTop: 0 }}
                  />

                  <p
                    style={{
                      marginLeft: "5%",
                      marginTop: 0,
                    }}
                  >
                    {formik.touched.description &&
                      formik.errors.description && (
                        <small style={{ color: "#CA6144" }}>
                          {formik.errors.description}
                        </small>
                      )}
                  </p>
                  <div
                    className="row"
                    style={{
                      width: "94%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <div className="col-md-8">
                      <CustomTitleText
                        text="Guest Speakers"
                        size="sm"
                        style={{
                          paddingTop: 5,
                          paddingBottom: 1,
                          fontSize: 16,
                          marginBottom: 0,
                        }}
                      />
                      <p
                        style={{
                          marginLeft: "5%",
                          marginTop: 0,
                        }}
                      >
                        {formik.touched.guestSpeakers &&
                          formik.errors.guestSpeakers && (
                            <small style={{ color: "#CA6144" }}>
                              {formik.errors.guestSpeakers}
                            </small>
                          )}
                      </p>

                      <p className="subHeader">
                        Your maximum guest speaker(s) is 1.
                        <Link to="" className>
                          View subscription plan to upgrade
                        </Link>
                      </p>
                    </div>
                    <div
                      className="col-md-3"
                      style={{
                        width: "98%",
                        marginLeft: 44,
                        paddingRight: 0,
                      }}
                    >
                      <div
                        className="gust-form"
                        style={{
                          width: 100,
                          float: "right",
                          marginTop: 20,
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            borderBottomLeftRadius: 4,
                            borderTopLeftRadius: 4,
                          }}
                          onClick={() =>
                            dynamicSpeakerDispatch({ type: "REMOVE" })
                          }
                        >
                          -
                        </button>
                        <span>{dynamicSpeaker.length}</span>
                        <button
                          type="button"
                          style={{
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 4,
                          }}
                          onClick={() =>
                            dynamicSpeakerDispatch({ type: "ADD" })
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  {dynamicSpeaker.length > 0 &&
                    dynamicSpeaker.map((item, index) => {
                      return (
                        // <GuestSpeakers
                        //   key={item}
                        //   item={item}
                        //   formikProps={formikProps}
                        //   style={{
                        //     width: "98%",
                        //     marginLeft: "auto",
                        //     marginRight: "auto",
                        //   }}
                        // />
                        <div
                          className="row"
                          style={{
                            width: "98%",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        >
                          <div className="col-md-6">
                            <CustomLabelText
                              forlabel={`guestSpeakers[${index}].guestName`}
                              text={`Guest ${item}`}
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
                              name={`guestSpeakers[${index}].guestName`}
                              placeholder="Enter guest name"
                              onChange={formik.handleChange}
                              value={formik.values.guestname}
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
                              forlabel={`guestSpeakers[${index}].guestEmail`}
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
                              name={`guestSpeakers[${index}].guestEmail`}
                              placeholder="Enter guest email address"
                              onChange={formik.handleChange}
                              value={formik.values.guestemail}
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
                    })}

                  <div
                    className="row"
                    style={{
                      width: "94%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <div className="col-md-8">
                      <CustomTitleText
                        text="Event Sessions"
                        size="sm"
                        style={{
                          paddingTop: 5,
                          paddingBottom: 1,
                          fontSize: 16,
                          marginBottom: 0,
                        }}
                      />

                      <p className="subHeader">
                        Your maximum session(s) is 1.
                        <Link to="" className>
                          View subscription plan to upgrade
                        </Link>
                      </p>
                    </div>

                    <div
                      className="col-md-3"
                      style={{
                        width: "98%",
                        marginLeft: 44,
                        paddingRight: 0,
                      }}
                    >
                      <div
                        className="gust-form"
                        style={{
                          width: 100,
                          float: "right",
                          marginTop: 20,
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            borderBottomLeftRadius: 4,
                            borderTopLeftRadius: 4,
                          }}
                          onClick={() =>
                            dynamicSessionDispatch({ type: "REMOVE" })
                          }
                        >
                          -
                        </button>
                        <span>{dynamicSession.length}</span>
                        <button
                          type="button"
                          style={{
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 4,
                          }}
                          onClick={() =>
                            dynamicSessionDispatch({ type: "ADD" })
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  {dynamicSession.length > 0 &&
                    dynamicSession.map((item, index) => {
                      return (
                        // <EventSession
                        //   key={item}
                        //   item={item}
                        //   {...this.state}
                        //   formikProps={formikProps}
                        //   style={{
                        //     width: "95%",
                        //     marginLeft: "auto",
                        //     marginRight: "auto",
                        //   }}
                        // />
                        <div
                          className=""
                          key={index}
                          style={{
                            width: "95%",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <CustomLabelText
                                forlabel="Session Name"
                                text={`Session ${item}`}
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
                                name={`eventSession[${index}].sessionName`}
                                placeholder="Enter your session name"
                                onChange={formik.handleChange}
                                value={formik.values.sessionname}
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
                                forlabel="Price"
                                text={`Ticket Price ${item}`}
                                style={{
                                  fontSize: 13,
                                  marginLeft: "5%",
                                  marginTop: 5,
                                  color: "#0000005e",
                                }}
                              />
                              <br />
                              <CustomSelect
                                name={`eventSession[${index}].sessionPrice`}
                                options={options}
                                style={{
                                  marginLeft: "5%",
                                  marginTop: 0,
                                  width: "86%",
                                }}
                                onChange={formik.handleChange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-6">
                                  <CustomLabelText
                                    forlabel="Start Date"
                                    text="Start Date"
                                    style={{
                                      fontSize: 13,
                                      marginTop: 5,
                                      color: "#0000005e",
                                    }}
                                  />
                                  <br />
                                  <CustomTextInput
                                    type="date"
                                    name={`eventSession[${index}].startDate`}
                                    onChange={formik.handleChange}
                                    value={formik.values.startdate}
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
                                    forlabel="Start Time"
                                    text="Start Time"
                                    style={{
                                      fontSize: 13,
                                      marginTop: 5,
                                      color: "#0000005e",
                                    }}
                                  />
                                  <br />
                                  <CustomTextInput
                                    type="time"
                                    name={`eventSession[${index}].startTime`}
                                    onChange={formik.handleChange}
                                    value={formik.values.starttime}
                                    style={{
                                      marginTop: 0,
                                      height: 40,
                                      padding: 10,
                                    }}
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
                                    forlabel="End date"
                                    text="End Date"
                                    style={{
                                      fontSize: 13,
                                      marginTop: 5,
                                      color: "#0000005e",
                                    }}
                                  />
                                  <br />
                                  <CustomTextInput
                                    type="date"
                                    name={`eventSession[${index}].endDate`}
                                    onChange={formik.handleChange}
                                    value={formik.values.enddate}
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
                                    forlabel="End Time"
                                    text="End Time"
                                    style={{
                                      fontSize: 13,
                                      marginTop: 5,
                                      color: "#0000005e",
                                    }}
                                  />
                                  <br />
                                  <CustomTextInput
                                    type="time"
                                    name={`eventSession[${index}].endTime`}
                                    onChange={formik.handleChange}
                                    value={formik.values.endtime}
                                    style={{
                                      marginTop: 0,
                                      height: 40,
                                      padding: 10,
                                      width: "68%",
                                    }}
                                    min="09:00"
                                    max="18:00"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  <CustomButton
                    type="submit"
                    text="Publish"
                    disabled={formik.isSubmitting}
                    onClick={formik.handleSubmit}
                    style={{
                      width: "89%",
                      marginLeft: "5%",
                      marginTop: 20,
                      marginBottom: 80
                    }}
                  />
                </form>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

CreateEvent.protoTypes = {
  event: PropTypes.object.isRequired,
  error: PropTypes.string,
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitPublish: (values) => {
      dispatch(Creators.createEventRequest(values));
    },
  };
};

const mapStateToProps = (state) => (
  // console.log(state.event.event, "This is the returned data"),
  {
    event: state.event.event,
    error: state.event.error_message,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
