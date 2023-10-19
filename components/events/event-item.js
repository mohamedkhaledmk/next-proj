import Link from "next/link";
import React from "react";
import classes from "./event-item.module.css";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import AddressIcon from "../icons/address-icon";
const EventItem = (props) => {
  let { event } = props;
  const readeableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  event.address = event.address.replace(/,/g, "\n");
  return (
    <li className={classes.item}>
      <img alt={event.title} src={event.image} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <time>{readeableDate || event.date}</time>
          </div>
        </div>
        <div className={classes.address} style={{ whiteSpace: "pre-line" }}>
          <address>{event.address}</address>
        </div>
        <div className={classes.actions}>
          <Button link={`/${event.id}`}>
            <span>Explore the Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
          {/* <Link href={`/${event.id}`}>Explore the Event</Link> */}
        </div>
      </div>
    </li>
  );
};

export default EventItem;
