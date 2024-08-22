"use client";
import Image from "next/image";
import "./story.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import HeroStory from "./components/Hero/Hero";
import Origin from "./components/Origin/Origin";
import Journey from "./components/Journey/Journey";
import Exploration from "./components/Exploration/Exploration";
import Purpose from "./components/Purpose/Purpose";

gsap.registerPlugin(ScrollTrigger);
export default function Story() {
  return (
    <div className="story">
      <HeroStory />
      <Origin />
      <Journey />
      <Exploration />
      <Purpose />
    </div>
  );
}
