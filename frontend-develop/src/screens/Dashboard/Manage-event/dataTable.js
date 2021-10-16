import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
 
  TableCell,
  
  TableRow,
  
  Checkbox,
  
} from "@material-ui/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

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
  link: {
    listStyle: "none",
    textDecoration: "none"
  }});
function EventTable({ event}) {
 console.log(event)
const classes  = useStyles()
  const CustomTableRow = withStyles((theme) => ({
    root: {
      backgroundColor: "#f1f2f6",
      borderTop: "7px solid white",
      borderRadius: "200px",
    },
  }))(TableRow);

 

  return (
    <div>
     
     
      <CustomTableRow
        key={event.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 14,
          paddingLeft: 14,
        }}
      >
        <TableCell align="left" style={{ border: "none" }}>
          {" "}
          <Link to={`/live-event/${event._id}`} style={{textDecoration: "none"}}>start</Link>
        </TableCell>
        <TableCell component="th" scope="row" style={{ border: "none" }}>
          {event.banner}
        </TableCell>
        <TableCell align="center" style={{ border: "none", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {event.name}
        </TableCell>
        <TableCell align="right" style={{  border: "none" }}>
          {event.category}
        </TableCell>
        <TableCell align="right" style={{  border: "none" }}>
          {event.eventsession[0].startdate}
        </TableCell>
        <TableCell align="right" style={{  border: "none" }}>
          {event.eventsession[0].starttime}
        </TableCell>
        <TableCell align="right" style={{  border: "none" }}>
          {event.eventsession.length}
        </TableCell>
        <TableCell align="right" style={{  border: "none" }}>
          {event.eventsession[0].sessionprice}
        </TableCell>
        <TableCell align="right" style={{  border: "none" }}>
          <BiDotsVerticalRounded />
        </TableCell>
      </CustomTableRow>
    
    </div>
  );
}

export default EventTable;
