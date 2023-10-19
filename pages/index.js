import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Link from "next/link";
import EventList from "@/components/events/event-list";
const inter = Inter({ subsets: ["latin"] });
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  return (
    <div data-aos="fade-up">
      <EventList events={getFeaturedEvents()} />
      <Link href={`/portfolio`}>Portfolio Page</Link>
    </div>
  );
}
