"use client";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import NewsVideo from "./components/NewsVideo/NewsVideo";
import Overview from "./components/Overview/Overview";

gsap.registerPlugin(ScrollTrigger);
export default function Work() {
  return (
    <>
      <NewsVideo />
      <Overview />
    </>
  );
}
