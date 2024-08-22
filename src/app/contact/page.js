"use client";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger);
export default function ContactAll() {
  return (
    <>
      <Contact />
    </>
  );
}
