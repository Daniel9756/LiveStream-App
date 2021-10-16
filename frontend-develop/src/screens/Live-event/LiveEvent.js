import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import CustomTitleText from "../../Components/Title";
import CustomLink from "../../Components/Link";
import "./liveevent.css";
import moment from "moment";

import { connect } from "react-redux";
import { Creators } from "../../services/redux/event/actions";
import { PropTypes } from "prop-types";
import { useQuery, useQueryClient } from "react-query";

function LiveEvent(props) {
  console.log(props, "props");
  const params = useParams();
  const { event } = props;
  const date = event?.eventsession?.[0]?.startdate;
  const time = event?.eventsession?.[0]?.starttime;
  const startdate = new Date(date).toDateString()

  // formating event date
  const now = moment().format("YYYY-MM-DD");
  const startday = moment(startdate).format("MMMM Do YYYY");
  const startday1 = moment(startdate).format("YYYY-MM-DD");

  console.log(startday, startday1)

  //  formating day different
  const eventDate = moment(date);
  const daydiff = eventDate.diff(now, "days");

  //  formating hour different
  
  const hour = moment(time, "HHmm")
  const start = moment(startday, "HHmm")
  const hourDiff = hour.diff(start, "hour")
  // format for minute
  const minute = moment(time, "mm")  
  const startMinute = moment(startday, "mm")
  const minuteDiff = minute.diff(startMinute, "minute")


console.log(minuteDiff, minute)
  useEffect(() => {
    props.getSingle(params.id);
  }, []);

  return (
    <div className="liveeventpage">
      <div className="liveevent-details">
        <div className="_liveevent">
          <button className="_empty"></button>

          <div className="_live-title">
            <CustomTitleText
              text={event?.name}
              size="sm"
              style={{ color: "white", paddingBottom: 0, marginBottom: 0 }}
            />
            <p className="_live-date">{startdate}</p>
            <p className="_live-date">{event?.sessionId}</p>
          </div>
          <CustomLink
            text="Going live in"
            page="#"
            style={{
              paddingTop: "1.6%",
              paddingLeft: "2%",
              paddingRight: "2%",
              fontSize: "larger",
              border: "none",
            }}
          />
        </div>
        <div className="_live-countdown">
          <div className="_live01">
            <h1 className="xy01" style={{ borderLeft: "none" }}>
              {daydiff}
            </h1>
            <p className="xy_01">Days</p>
          </div>
          <div className="_live02">
            <h1 className="xy02">{hourDiff}</h1>
            <p className="xy_02">Hours</p>
          </div>
          <div className="_live03">
            <h1 className="xy03">25</h1>
            <p className="xy_03">Minutes</p>
          </div>
          <div className="_live04">
            <h1 className="xy04">33</h1>
            <p className="xy_04">Seconds</p>
          </div>
        </div>
        <div className="live_link">
          <Link to="#" className="avs">
            Audio & Video Settings
          </Link>
          <Link to={`/Host/${params.id}`} className="gli">
            Go Live{" "}
          </Link>
          <Link to="#" className="cha">
            Chat
            <span className="top-num">3</span>
          </Link>
        </div>
        <div className="live-event-des">
          <p className="dmw">Say hello to your attendees</p>
        </div>
      </div>
    </div>
  );
}

LiveEvent.protoTypes = {
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

const mapStateToProps = (state) =>
  // console.log(state, "state get on Event liveEvent"),
  ({
    event: state.event.event,
    error: state.event.error_message,
  });

export default connect(mapStateToProps, mapDispatchToProps)(LiveEvent);
