import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";
const EventList = (props) => {
  const { events } = props;
  return (
    <div>
      {events.map((event, index) => (
        <ul className={classes.list} key={event._id || index}>
          <EventItem event={event} />
        </ul>
      ))}
    </div>
  );
};

export default EventList;
