"use client";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import WorkMana from "./components/WorkMana/WorkMana";
import WorkOver from "./components/WorkOVer/WorkOVer";

gsap.registerPlugin(ScrollTrigger);
export default function Work() {
  return (
    <>
      <WorkMana />
      {/* <WorkOver /> */}
    </>
  );
}
