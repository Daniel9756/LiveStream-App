import React, { Fragment, Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../../Components/ErrorMessage/errorMessage";
import CustomButton from "../../../Components/Button";
import CustomTitleText from "../../../Components/Title";
import Plan from "./Plan";
import PaymentModal from "../../Payment";

const validationSchema = Yup.object().shape({
  plan: Yup.string().label("Plan").required("Plan is required"),
});

class PaymentPlans extends Component {
  constructor(props) {
    super(props);
    this.selectPlan = this.selectPlan.bind(this);
    this.togglePrice = this.togglePrice.bind(this);
    this.state = {
      selectedPage: "FREE",
      pricestate: false,
    };
    this.initialValues = {
      plan: this.state.selectedPage,
    };
  }

  selectPlan = (selected) => {
    this.setState({ selectedPage: selected });
  };
  togglePrice = () => {
    this.setState({ pricestate: !this.state.pricestate });
  };

  backbtnstyle = {
    width: 100,
    padding: 8,
    marginLeft: "18%",
    display: "inline",
    background: "white",
    border: "2px solid #ca6144",
    color: "#ca6144",
  };

  active = {
    margin: 20,
  };

  plans = [
    {
      id: "1",
      title: "FREE",
      price: "0",
      attendance: "50 Attendance",
      time: "Maximum 47mins live stream",
      guest: "2 Guests",
      percent: "10% Free",
    },
    {
      id: "2",
      title: "STANDARD",
      price: "40,000",
      attendance: "100 Attendance",
      time: "Maximum 3 hours live stream",
      guest: "3 Guests",
      percent: "2.5% Free",
    },
    {
      id: "3",
      title: "EXTREME",
      price: "100,000",
      attendance: "500 Attendance",
      time: "Maximum 3 hours live stream",
      guest: "10 Guests",
      percent: "2.5% Free",
    },
  ];

  render() {
    return (
      <Fragment>
        <Formik
          initialValues={this.initialValues}
          onSubmit={(values) => this.props.onSubmit(values)}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <form onSubmit={formikProps.handleSubmit}>
              <div className="profile_title">
                <CustomTitleText
                  text="Choose a plan"
                  size="sm"
                  style={{
                    textAlign: "center",
                    marginTop: 30,
                    marginBottom: 20,
                    fontSize: 25,
                  }}
                />
              </div>
              <div className="title-toggle">
                <label>USD</label>
                <span
                  className="toggle-case"
                  onClick={() => this.togglePrice()}
                >
                  <span
                    className="toggle-dot"
                    style={this.state.pricestate ? this.active : {}}
                  ></span>
                </span>
                <label>NAIRA</label>
              </div>
              <main className="cards">
                {this.plans.map((data) => {
                  return (
                    <Plan
                      key={data.id}
                      onClick={() => this.selectPlan(data.title)}
                      title={data.title}
                      attendance={data.attendance}
                      time={data.time}
                      percent={data.percent}
                      price={data.price}
                      guest={data.guest}
                      selectPlanState={this.state.selectedPage}
                    />
                  );
                })}
              </main>
              {this.state.selectedPage === "abouthjs" && (
                <PaymentModal price="" />
              )}

            </form>
          )}
        </Formik>
      </Fragment>
    );
  }
}

export default PaymentPlans;
