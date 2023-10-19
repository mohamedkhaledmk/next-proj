import "@/styles/globals.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS style
import Layout from "@/components/layout/layout";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the top of the screen
      easing: "ease-in-out", // Easing function
      once: true, // Only animate elements once
    }); // Initialize AOS on component mount
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
