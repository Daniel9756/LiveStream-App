import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./services/redux/store";
import { persistor } from "./services/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./screens/Auth/Login";
import Signup from "./screens/Auth/Signup";
import UserProfile from "./screens/Dashboard";
import Profile from "./screens/Profile";
import Event from "./screens/Event";
import LiveEvent from "./screens/Live-event/LiveEvent";
import Host from "./screens/Live-event/OpenTok/Host";
import ManageEvent from "./screens/Dashboard/Manage-event/ManageEvent";
import Header from "./screens/Dashboard/Header";
import WaitingRoom from "./screens/Live-event/WaitingRoom";
// import test from './screens/test';
import { Creators } from "../src/services/redux/user/actions";
import LiveStudio from "./screens/Live-event/LiveStudio";
import { login } from "./services/sagas/auth";
// import Host from "./screens/OpenTok/EventHost"
// import OpenTok from '../src/screens/OpenTok'

const App = (props) => {
  useEffect(() => {
    store.dispatch(Creators.getUserDetails());
  }, []);

  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>Login</div>,
      main: () => (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      exact: true,
      sidebar: () => <div>SignUp</div>,
      main: () => (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/profile",
      exact: true,
      navbar: () => <div>Profile</div>,
      main: (props) => (
        <>
          <Header />
          <Profile />
        </>
      ),
    },
    {
      path: "/dashboard",
      exact: true,
      navbar: () => <div>Dashboard</div>,
      main: (props) => (
        <>
          <Header />
          <UserProfile />
        </>
      ),
    },
    {
      path: "/ManageEvent",
      exact: true,
      navbar: () => <div>ManageEvent</div>,
      main: (props) => (
        <>
          <Header />
          <ManageEvent />
        </>
      ),
    },
    {
      path: "/event",
      exact: true,
      navbar: () => <div>Event</div>,
      main: (props) => (
        <>
          <Header />
          <Event />
        </>
      ),
    },
    {
      path: "/live-event/:id",
      exact: true,
      navbar: () => <div>LiveEvent</div>,
      main: (props) => (
        <>
          <Header />
          <LiveEvent {...props} />
        </>
      ),
    },
    {
      path: "/LiveStudio/:id",
      exact: true,
      navbar: () => <div>LiveEvent</div>,
      main: (props) => (
        <>
          <Header />
          <LiveStudio {...props} />
        </>
      ),
    },
    {
      path: "/Host/:id",
      exact: true,
      navbar: () => <div>Host</div>,
      main: (props) => (
        <>
          <Header />
          <Host {...props} />
        </>
      ),
    },
  ];

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router forceRefresh={true}>
          <Fragment>
            <ToastContainer
              position="top-right"
              autoClose={100}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            <ToastContainer />

            <Switch>
              {/* <Route path='/waitingroom' exact component={WaitingRoom}/> */}
              {/* <Route path="/LiveStudio/:id" exact component={Host} /> */}

              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.main}
                  exact={route.exact}
                />
              ))}
            </Switch>
          </Fragment>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
