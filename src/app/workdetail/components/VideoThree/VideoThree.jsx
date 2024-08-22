import React, { useEffect, useRef, useState } from "react";
import "./VideoThree.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function VideoThree() {
  return (
    <section class="videothree has-padding-top-and-bottom light">
      <div class="container">
        <video playsInline loop muted class="preview" autoPlay>
          <source
            src="../videos/columbia-pictures-video-03-loading-sharable.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
export default VideoThree;
