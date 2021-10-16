import React, { useEffect, useState } from "react";
import "./style.css";
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  Button,
  StepLabel,
  Step,
  Stepper,
  withStyles,
} from "@material-ui/core";
import UIBottom from "../../Components/UIBottom";
import ProfileAbout from "./ProfileAbout";
import BusinessProfile from "./BusinessProfile";
import PaymentPlans from "./Plan";
import CongratMessage from "./CongratMessage";
import { Link, useHistory, useLocation } from "react-router-dom";
import { faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import store from "../../services/redux/store";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Creators } from "../../services/redux/user/actions";
import CustomLoader from "../../Components/Loader";

// import { useForm, useStep } from "react-hooks-helper";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    padding: 40,
    marginTop: "-20px",
    marginBottom: "40px",
  },
  text: {
    margin: "2px",
    dispay: "flex",
    textAlign: "center",
    marginBottom: 40,
  },
  btn: {
    padding: 8,
    marginLeft: "4px",
    width: "120px",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
  },
  active: {
    "& .MuiSvgIcon-root.MuiStepIcon-root.MuiStepIcon-active": {
      color: "#CA6144",
    },
    "& .MuiSvgIcon-root.MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#CA6144",
    },
  },
}));

function Profile(props) {
  function getSteps() {
    return ["About You", "Association", "Select Plan", "Done"];
  }
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <ProfileAbout
            getProfileData={(data) => {
              getProfileData(data);
            }}
          />
        );
      case 1:
        return (
          <BusinessProfile
            aboutData={values}
            onSubmit={(data) => {
              props.createUserProfile(data);
              handleNext();
            }}
          />
        );
      case 2:
        return <PaymentPlans />;
     
      default:
        return <CongratMessage />;
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [values, setValues] = useState([]);
  const [loading, setLoding] = useState(false);

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getUser = () => {
    if (store.getState().auth.token) {
      props.getUserProfile();
    } else {
      props.history.push(`/`);
    }
  };
  const getProfileData = (data) => {
    setValues({ values: data });
    handleNext();
  };
  useEffect(() => {
    getUser();
    localStorage.clear();
  }, []);

  return (
    <>
      <div className="_body">
        <section className="_box-container">
          <div className="img-box">
            <img
              src={process.env.PUBLIC_URL + "../../assets/image/Group 2895.svg"}
              className="profile_logo"
              alt="Logo"
            />
          </div>

          <div className={classes.root}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              className={classes.active}
            >
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>

          <div>
            <Typography style={{ textAlign: "center" }} component="div">
              {getStepContent(activeStep)}
            </Typography>
          </div>
          <div
            style={{
              paddingTop: 20,
              paddingBottom: 40,
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            {activeStep === steps.length - 1 ? (
              <div style={{ textAlign: "center" }}>
                <Link to="/dashboard" className={classes.link}>
                  <UIBottom
                    variant="contained"
                    className={classes.btn}
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "#CA6144",
                      justifyContent: "center",
                      marginTop: "60px",
                    }}
                    disableElevation
                    text="Start Hosting Events"
                  />
                </Link>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: 180,
                  paddingLeft: 180,
                  marginBottom: 180,
                }}
                disableElevation
              >
                <div>
                  {activeStep !== 0 && (
                    <UIBottom
                      className={classes.btn}
                      onClick={handleBack}
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#CA6144",
                        width: "80px",
                      }}
                      text="Back"
                    />
                  )}
                </div>
                <div>
                  <UIBottom
                    className={classes.btn}
                    onClick={handleNext}
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "#CA6144",
                      width: "80px",
                    }}
                    text={activeStep === steps.length ? "Submit" : "Next"}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

Profile.protoTypes = {
  user: PropTypes.object.isRequired,
  error: PropTypes.string,
};
const mapDispatchToProps = (dispatch) => {
  return {
    createUserProfile: (data) => {
      dispatch(Creators.createUserProfileRequest(data));
    },
    getUserProfile: () => {
      dispatch(Creators.getUserDetails());
    },
  };
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  error: state.user.error_message,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
