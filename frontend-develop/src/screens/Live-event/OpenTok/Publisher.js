import React, { useState } from "react";
import { OTPublisher, OT, getPublisher } from "opentok-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pubisher: {
    position: "absolute",
    width: "75%",
   height: "85%",
    Zindex: 5,
    border: "20px solid #393E51",
    borderBottom: "60px solid #393E51",
    borderRadius: "0 0 5px 5px",
  },
}));
function Publisher(props) {
  const classes = useStyles();
  const { topic, sessionId } = props;
  const [error, setError] = useState("");

  const onError = (err) => {
    setError(`Failed to publish: ${err.message}`);
  };
 
  const onPubish = (pubishedData, error) => {
    if(error){
    console.log(error);

    } else {

      console.log({ pubishedData });
    }
  };

  const onInit = (initData) => {
    console.log({ initData });
  };
 
  if (error) {
    return <div id="error">{error}</div>;
  }
  return (
    <div className={classes.pubisher}>
      <OTPublisher
        properties={{
          insertMode: "append",
          publishAudio: true,
          publishVideo: true,
          width: "100%",
          height: "550px",
        }}
        onError={onError}
        onPublish={onPubish}
        onInit={onInit}
      
      />
    </div>
  );
}

export default Publisher;
