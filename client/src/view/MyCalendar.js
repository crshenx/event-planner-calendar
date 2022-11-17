import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "../App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

// class MyCalendar extends Component {
//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment().add(1, "days").toDate(),
//         title: "Some title",
//       },
//     ],
//   };

//   onEventResize = (data) => {
//     const { start, end } = data;

//     this.setState((state) => {
//       state.events[0].start = start;
//       state.events[0].end = end;
//       return { events: [...state.events] };
//     });
//   };

//   onEventDrop = (data) => {
//     console.log(data);
//   };

//   render() {
//     return (
//       <div className="App">
//         <DnDCalendar
//           defaultDate={moment().toDate()}
//           defaultView="month"
//           events={this.state.events}
//           localizer={localizer}
//           onEventDrop={this.onEventDrop}
//           onEventResize={this.onEventResize}
//           resizable
//           style={{ height: "100vh" }}
//         />
//       </div>
//     );
//   }
// }

// export default MyCalendar;

function MyCalendar(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((event) => {
        setEvents(events);
        console.log(event);
      });
  });

  let state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  };

  console.log(state);

  return (
    <div className="App">
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
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
