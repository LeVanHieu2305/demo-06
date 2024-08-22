"use client";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Hero from "./components/Hero/Hero";
import DetailOne from "./components/DetailOne/DetailOne";
import GirdHorizontal from "./components/GirdHorizontal/GirdHorizontal";
import DetailTwo from "./components/DetailTwo/DetailTwo";
import Video from "./components/Video/Video";
import Media from "./components/Media/Media";
import DetailThree from "./components/DetailThree/DetailThree";
import VideoTwo from "./components/VideoTwo/VideoTwo";
import MediaText from "./components/MediaText/MediaText";
import Imagede from "./components/Imagede/Imagede";
import GirdZoom from "./components/GirdZoom/GirdZoom";
import DetailFour from "./components/DetailFour/DetailFour";
import MockupMobileMultiple from "./components/MockupMobileMultiple/MockupMobileMultiple";
import VideoThree from "./components/VideoThree/VideoThree";
import DetailFive from "./components/DetailFive/DetailFive";
import VideoFour from "./components/VideoFour/VideoFour";
import VideoFive from "./components/VideoFive/VideoFive";
import DetailSix from "./components/DetailSix/DetailSix";
import MockupMobileMultipleTwo from "./components/MockupMobileMultipleTwo/MockupMobileMultipleTwo";
import DetailSeven from "./components/DetailSeven/DetailSeven";

gsap.registerPlugin(ScrollTrigger);
export default function WorkDetail() {
  return (
    <div className="workdetail">
      <Hero />
      <DetailOne />
      <GirdHorizontal />
      <DetailTwo />
      <Video />
      <Media />
      <DetailThree />
      <VideoTwo />
      <MediaText />
      <Imagede />
      <GirdZoom />
      <DetailFour />
      <MockupMobileMultiple />
      <VideoThree />
      <DetailFive />
      <VideoFour/>
      <VideoFive/>
      <DetailSix/>
      <MockupMobileMultipleTwo/>
      <DetailSeven/>
    </div>
  );
}
