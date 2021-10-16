import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
import EventTable from "./dataTable";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Creators } from "../../../services/redux/event/actions";
import LinearLoading from "../../../utils/loading/Linear"
// console.log(dataTable)
const useStyles = makeStyles({
  table: {
    minHeigth: 860,
    margin: 20,
    width: "97%",
  },
  thd: {
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#CA6144",
    position: "sticky",
    borderRadius: "50%",
  },
  title: {
    padding: 30,
    paddingBottom: 10,
    fontWeight: "bolder",
    letterSpacing: 2,
    fontWeight: "bolder",
  },
  body: {
    overflowY: "scroll",
  },
});



function ManageEvent(props) {
  console.log(props, "props of manageevent")
  const classes = useStyles();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#CA6144",
      color: theme.palette.common.white,
      border: "none",
      fontSize: 15,
      textTransform: "capitalize",
    },

    body: {
      fontSize: 8,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      backgroundColor: "#CA6144",
      height: "100px",
    },
  }))(TableRow);

  const { events, getEvents, error } = props;
  // const allEvents = () => {
  //   if (events.length > 0) {
  //     return;
  //   }
  // };
  console.log(props)

  useEffect(() => {
    getEvents();
  }, []);



  return (
    <div
      style={{
        height: "100vh",
        background: "#dcdde1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "scroll",
      }}
    >
      <div style={{height: 120}}></div>
      <TableContainer component={Paper} style={{ margin: 5, width: "96%" }}>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Manage Your Event{" "}
        </Typography>
        <hr />
        <Table
          className={classes.table}
          aria-label="sticky table"
          size="medium"
          padding="checkbox"
        >
          {/* <BiDotsVerticalRounded /> */}
          <TableHead>
            <StyledTableRow
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "30px",
                backgroundColor: "#CA6144",
                paddingRight: 14,
                paddingLeft: 14,
              }}
            >
              <StyledTableCell align="left">
                {" "}
                <Checkbox style={{ color: "white" }} />
              </StyledTableCell>

              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
              <StyledTableCell align="right">Session</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="right">
                <BiDotsVerticalRounded />
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody className={classes.body}>
              {!events && !error && 
              (<LinearLoading />)}
            {events &&
              events.length &&
              events.map((event) => (
                <EventTable event={event} />
              )             
              
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

ManageEvent.protoTypes = {
  events: PropTypes.object.isRequired,
  error: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => {
      dispatch(Creators.getAllEvents());
    },
  };
};

const mapStateToProps = (state) => (
  console.log(state.event.events, "events gotten from getallEVENT"),
  {
    events: state.event.events,
    error: state.event.error_message,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ManageEvent);
