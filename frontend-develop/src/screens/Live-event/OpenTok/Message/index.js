import React,{useState} from "react";
import Chat from "./Chat";
import Question from "./Question";
import Polls from "./Polls";



import {
  makeStyles,
   Box,  
} from "@material-ui/core";

const useStyles = makeStyles({
  boxconnected: {
    zIndex: 100,
    background: "#393E51",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#fff",
    height: 60,
  },
  btn: {
    width: "auto",
    height: "auto",
    color: "#393E51",
    padding: 8,
    borderRadius: 8,
    border: "2px solid #CA6144",
  },
});

function Message(props) {
  const {  apiKey, sessionId } = props
  const classes = useStyles();
  function getContent(page) {
    switch (page) {
      case "chat":
        return <Chat apiKey={apiKey} sessionId={sessionId}  />;
      case "question":
        return <Question />;
        case "polls":
            return <Polls />;
      default:
        return "UNKNOWN STEP";
    }
  }
  const [content, setContent] = useState("chat");
  return (
    <Box>
      <Box className={classes.boxconnected}>
        <button className={classes.btn} onClick={() => setContent("chat")}>Waiting Room Chat</button>
        <button className={classes.btn} onClick={() => setContent("question")}>Question</button>
        <button className={classes.btn} onClick={() => setContent("polls")}>Poll</button>
      </Box>
      <Box>
      {getContent(content)}
      </Box>
    </Box>
  );
}

export default Message;
