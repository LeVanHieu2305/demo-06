"use client";

import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Hero from "@/components/hero/hero";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import ShowReel from "@/components/ShowReel/ShowReel";
import FeaturedArticles from "@/components/FeaturedArticles/FeaturedArticles";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ShowReel />
      <FeaturedArticles />
    </>
  );
}
