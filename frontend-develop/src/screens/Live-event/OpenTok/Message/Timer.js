import React from "react";
import { useStopwatch } from "react-timer-hook";

function Timer(props) {
  const { seconds, minutes, hours, start } =
    useStopwatch({ autoStart: true });
  const { connect } = props;
const startTime = () => {
  start()
}
  return (
    <p
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {connect
        ? startTime && (
            <em
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 16,
                color: "green" 
              }}
            >
             {hours}:{minutes}:{seconds}
            </em>
          )
        : <em style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 16,
        }}>00:00</em>}
    </p>
  );
}

export default Timer;
