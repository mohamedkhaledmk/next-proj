import Link from "next/link";
import React from "react";
import classes from "./main-header.module.css";
const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href={"/"}>MK Events</Link>
        </div>
        <nav className={classes.navigation}>
          <ul>
            <span>
              <Link href={"/events"}>Browse All Events</Link>
            </span>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
