import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { useHistory } from "react-router-dom";
import "../App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useRecoilValue } from "recoil";
import { logIn } from "./atoms";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

function MyCalendar(props) {
  const [eventsState, setEventsState] = useState([]);
  const user = useRecoilValue(logIn);
  const history = useHistory();
  React.useEffect(() => {
    if (!user.id) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((event) => {
        setEventsState(event);
        console.log(event);
      });
  }, []);

  const events = eventsState.map((event) => {
    console.log(event.start_date, event.end_date);
    return {
      start: moment(event.start_date).toDate(),
      end: moment(event.end_date).toDate(),
      title: event.title,
    };
  });

  let state = {
    events: events,
  };

  console.log(`state: ${JSON.stringify(state)}`);

  return (
    <div className="App">
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={state.events}
        localizer={localizer}
        // onEventDrop={onEventDrop}
        // onEventResize={onEventResize}
        resizable
        style={{ height: "83vh" }}
      />
    </div>
  );
}

export default MyCalendar;
