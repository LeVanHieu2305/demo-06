"use client";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import WhatWeBelieve from "./components/WhatWeBelieve/WhatWeBelieve";
import TheApes from "./components/TheApes/TheApes";
import Recognition from "./components/Recognition/Recognition";

gsap.registerPlugin(ScrollTrigger);
export default function Work() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeWork />
      <WhatWeBelieve />
      <TheApes />
      <Recognition />
    </>
  );
}
