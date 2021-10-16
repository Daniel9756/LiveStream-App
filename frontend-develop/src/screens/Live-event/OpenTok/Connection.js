import React from "react";
import PropTypes from "prop-types";

function Connection(props, context) {
  // const classes = useStyles();
  // console.log(context, props)

  const { connect } = props;
  const status = connect ? "Connected" : "Disconnected";

  return (
    <div>
      <div
        style={{
          textTransform: "uppercase",
          margin: `0 80 0 80`,
          color: "#44bd32",
        }}
      >
        <em> {status}</em>{" "}
      </div>
    </div>
  );
}

export default Connection;

Connection.contextTypes = {
  session: PropTypes.any,
  streams: PropTypes.any,
};
