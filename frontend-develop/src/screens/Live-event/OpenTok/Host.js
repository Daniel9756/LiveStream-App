import React, { useEffect, useState } from "react";
import OT from "@opentok/client";
import { OTSession, OTPublisher, OTStreams, getPublisher } from "opentok-react";
import Connection from "./Connection";
import Publisher from "./Publisher";
import Subscriber from "./Subscriber";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Creators } from "../../../services/redux/event/actions";
import { PropTypes } from "prop-types";
import {FaRegDotCircle} from "react-icons/fa";
import Message from "./Message";
import Timer from "./Message/Timer";


import {
  makeStyles,
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  boxconnected: {
    zIndex: 100,
    background: "#393E51",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    marginLeft: 40,
    marginRight: 40,
  },
  btn: {
    width: 60,
    height: 40,
    color: "#393E51",
    padding: 8,
    borderRadius: 8,
    border: "2px solid #CA6144",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
function Host(props) {
  const classes = useStyles();
  const [connect, setConnect] = useState(false);

  const params = useParams();
  const { event, error } = props;
  console.log(event, "event");
  const handleSessionOn = () => {
    setConnect(true);
  };
 

  useEffect(() => {
    props.getSingle(params.id);
  }, []);

  if (error) {
    return <Box style={{ color: "#fff" }}>Error: {error.error_message}</Box>;
  }
  if (event.sessionId != undefined) {
    const { API_KEY: apiKey, sessionId, token, name } = event;
    const guest = event?.guestspeaker?.[0]?.guestname;

    console.log(apiKey, sessionId, token, "event.sessionId");

    return (
      <Box>
        <Grid container>
          <Grid item md="9">
            <Box style={{ zIndex: 100, background: "#393E51" }}>
              <Box
                style={{ zIndex: 100, background: "#393E51", width: "100%" }}
              >
                <Box className={classes.boxconnected}>
                  <Typography variant="h6">{name}</Typography>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between", width: 180 , height: 60 }}
                  >
                    <button className={classes.btn}><Timer  connect={connect} /></button>
                    <button className={classes.btn}> {connect ? <em  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "green"  }}><FaRegDotCircle />Live</em> :  <small style={{ display: "flex", justifyContent: "space-between", alignItems: "center",   }}><FaRegDotCircle />Live</small>}
                     </button>
                    <button className={classes.btn} onClick={()=>setConnect(!connect)}>
                      {connect ? "END" : "START"}
                    </button>
                  </Box>
                </Box>
                <Box className={classes.boxconnected}>
                  <Typography variant="subtitle1">
                    by{""} {guest}
                  </Typography>
                  <Connection connect={connect}  />
                </Box>
              </Box>

              <OTSession
                sessionId={sessionId}
                token={token}
                apiKey={apiKey}
                onConnect={handleSessionOn}
              >
                <Publisher />
                <OTStreams>
                  <Subscriber sessionId={sessionId} />
                </OTStreams>
              </OTSession>
            </Box>
          </Grid>
          <Grid item md="3" style={{ background: "#fff" }}>
            <Paper style={{ width: "100%", height: "100vh" }}>
              <Message
                apiKey={apiKey}
                sessionId={sessionId}
              
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return null;
  }
}

Host.protoTypes = {
  event: PropTypes.object.isRequired,
  error: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingle: (id) => {
      dispatch(Creators.getOneEvent(id));
    },
  };
};

const mapStateToProps = (state) => (
  console.log(state),
  {
    event: state.event.event,
    error: state.event.error,
    isCreatingEvent: state.event.isCreatingEvent,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Host);
