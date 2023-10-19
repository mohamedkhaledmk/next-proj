import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <p>No Event Found!</p>
      </>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.address}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
