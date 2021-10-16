import React, { useState } from "react";
import { useFormik } from "formik";
// import * as Yup from "yup";
import CustomTextInput from "../../../../Components/TextInput";

import { makeStyles, Box, Typography } from "@material-ui/core";
const { initSession } = require("@opentok/client");

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
    textTransform: "uppercase",
  },
});

function Chat(props) {
  const classes = useStyles();
  const [content, setContent] = useState([]);

  const { sessionId, apiKey } = props;
  const session = initSession(apiKey, sessionId);
  const chatContent = (text) => {
    setContent([text, ...content]);
  };

  const formik = useFormik({
    initialValues: {
      chat: "",
    },

    onSubmit: (values) => {
      session.signal({
        type: "chat",
        data: `${values.chat}`,
      });
      session.on("signal:chat", (event) => {
        const message = event.data;
        chatContent(message);
      });
      values.chat = "";
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box style={{ width: "100%", background: "#fff", padding: 4 }}>
          <CustomTextInput
            name="chat"
            type="text"
            placeholder="Your Message"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.chat}
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: 25,
              marginTop: 8,
              marginBottom: 15,
            }}
          >
            <Box></Box>
            <Box>
              <button className={classes.btn}>CANCEL</button>{" "}
              <button
                type="submit"
                className={classes.btn}
                onClick={formik.handleSubmit}
              >
                Submit
              </button>
            </Box>
          </Box>
        </Box>
      </form>
      <hr />
      <Box>
        {content.map((item) => (
          <Typography
            variant="body1"
            component="div"
            style={{ paddingLeft: 8, fontFamily: "serif" }}
            key={item}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default Chat;
