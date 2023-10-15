import Link from "next/link";
import React from "react";

const Err = () => {
  return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">Go back to home page.</Link>
    </>
  );
};

export default Err;
