import React from "react";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
const FilteredEventsPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
