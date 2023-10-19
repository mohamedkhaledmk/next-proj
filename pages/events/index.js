import React from "react";
import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
const EventsPage = () => {
  const allEvents = getAllEvents();
  return (
    <>
      <EventList events={allEvents} />
    </>
  );
};

export default EventsPage;
