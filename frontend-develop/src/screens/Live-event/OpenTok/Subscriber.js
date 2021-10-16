import React, { useState } from "react";
import { OTSubscriber } from "opentok-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subscriber: {
    position: "relative",
    width: "200px",
    height: "200px",
    Zindex: 100,
    borderTop: "3px solid #DA7B93",
    borderBottom: "3px solid #DA7B93",
    marginTop: 10,
    marginLeft: 20,
    float: "left",
  },
}));
function Subscriber(props) {
  const classes = useStyles();
  const [error, setError] = useState("");
  const { topic, stream } = props;
  const onError = (err) => {
    setError(`Failed to subscribe: ${err.message}`);
  };

  const onSubscribe = (err) => {
    console.log("subscribed");
  };

  return (
    <div className={classes.subscriber}>
      {error ? <div id="error">{error}</div> : null}
      <OTSubscriber
        properties={{
          insertMode: "append",
          width: "100%",
          subscribeToAudio: true,
          subscribeToVideo: true, 
          height: "200px",
          name: topic,
        }}
        onError={onError}
        onSubscribe={onSubscribe}
        
      />
    </div>
  );
}
export default Subscriber;
