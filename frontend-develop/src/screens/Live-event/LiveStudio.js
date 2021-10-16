import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CustomTitleText from "../../Components/Title";
import CustomLink from "../../Components/Link";
import { connect } from "react-redux";
import "./liveevent.css";
import moment from "moment";
import { OTSession, OTPublisher, OTStreams } from "opentok-react";
import Connection from "./OpenTok/Connection";
import Publisher from "./OpenTok/Publisher";
import Subscriber from "./OpenTok/Subscriber";
import { Creators } from "../../services/redux/event/actions";
import { PropTypes } from "prop-types";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
// import '../userprofile.css'
import "./livestudio.css";
const LiveStudio = (props) => {
  const [connect, setConnect] = useState(false);

  const params = useParams();
  const { event } = props;
  const { API_KEY: apiKey, sessionId, token, name } = event;
  console.log(props);

  const handleSessionOn = () => {
    setConnect(true);
  };
  useEffect(() => {
    props.getSingle(params.id);
  }, []);
  return (
    <>
      <div className="livestudiopage">
        <div className="_waiting">
          <div className="livestudio-details">
            <div className="livestudio-header">
              <div className="holder">
                <h1 className="img-title">
                  <img
                    src={process.env.PUBLIC_URL + "../../assets/image/1.png"}
                    alt="logo"
                    className="chatterss"
                  />
                  Tech & Post-COVID-19
                </h1>
                <span className="by-os">By Josh Osazuwa</span>
              </div>
              <div className="icon-box">
                <label className="timer">00:20</label>
                <label className="status">Live</label>
                <span className="icon-event">
                  <i class="fa fa-expand-wide"></i>
                </span>
                <span className="icon-event">
                  <i class="fa fa-volume-up"></i>
                </span>
                <span className="icon-event">
                  <i class="fa fa-cog"></i>
                </span>
              </div>
            </div>
            <div>
              <Connection connect={connect} session={sessionId} />

              <OTSession
                sessionId={sessionId}
                token={token}
                apiKey={apiKey}
                onConnect={handleSessionOn}
              >
                <Publisher sessionId={sessionId} />
                <OTStreams>
                  <Subscriber sessionId={sessionId} />
                </OTStreams>
              </OTSession>
              <img
                src={process.env.PUBLIC_URL + "../../assets/image/woman.png"}
                alt="logo"
                className="eventbck-image"
              />
              <span className="fgmh">Host</span>
              <div className="jig-video">
                <span className="jig">
                  <i class="fad fa-microphone"></i>
                </span>
                <span className="jig">
                  {" "}
                  <i class="fas fa-video"></i>
                </span>
                <span className="jig">
                  {" "}
                  <i class="fa fa-rectangle-landscape"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="_waiting-box">
            <div className="__livestudio">
              <Link className="liv jj">Chats</Link>
              <Link className="liv hjs">
                Questions
                <span className="live-note">20</span>
              </Link>
              <Link className="liv jks">
                Polls
                <span className="live-not-e">30</span>
              </Link>
              <Link className="liv kls">
                People
                <span className="live-notes">93</span>
              </Link>
            </div>
            <div className="live-header">
              <label className="_livechat">Live Chat</label>
            </div>
            <div className="chat-s">
              <div className="_chts">
                <span className="c-time">12:00PM</span>
                <div className="partiton">
                  <h2 className="event-host">
                    Josh(host)
                    <img
                      src={process.env.PUBLIC_URL + "../../assets/image/2.png"}
                      alt="logo"
                      className="chatter"
                    />
                  </h2>
                  <p className="chat-text">
                    Hello guys, glad you could join me. Really excited about the
                    event. See you guys in a bit.
                  </p>
                </div>
              </div>
              <div className="_chtss">
                <span className="c-times">12:00PM</span>
                <div className="partitons">
                  <h2 className="event-hosts">
                    <img
                      src={process.env.PUBLIC_URL + "../../assets/image/3.png"}
                      alt="logo"
                      className="chatters"
                    />
                    Mart
                  </h2>
                  <p className="chat-texts">Really excited about the event.</p>
                </div>
              </div>
              <div className="_chtsss">
                <span className="c-times">12:00PM</span>
                <div className="partitons">
                  <h2 className="event-hostx">
                    <img
                      src={process.env.PUBLIC_URL + "../../assets/image/1.png"}
                      alt="logo"
                      className="chatters"
                    />
                    Obass(Guest)
                  </h2>
                  <p className="chat-texts">
                    What happens when you cross a singer and a rocking chair? —
                    you rock to the beat. Can’t wait.
                  </p>
                </div>
              </div>
              <div className="_chtss">
                <span className="c-times">12:00PM</span>
                <div className="partitons">
                  <h2 className="event-hosts">
                    <img
                      src={process.env.PUBLIC_URL + "../../assets/image/3.png"}
                      alt="logo"
                      className="chatters"
                    />
                    Mart
                  </h2>
                  <p className="chat-texts">Really excited about the event.</p>
                  <div id="rectangle">
                    <span className="chat-rep">2 replies</span>
                  </div>
                </div>
              </div>
              <div className="cht-input">
                <input
                  type="text"
                  placeholder="Say something to your attendees"
                  className="typings"
                />
                <Link className="submt">Send</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LiveStudio.protoTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LiveStudio);
