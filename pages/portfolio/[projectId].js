import React from "react";
import PortfolioPage from "./index";
import { useRouter } from "next/router";
const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return <div>Portfolio project Page</div>;
};

export default PortfolioProjectPage;
