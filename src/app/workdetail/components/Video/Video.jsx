import React, { useEffect, useRef, useState } from "react";
import "./Video.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Video() {
  return (
    <section class="video has-padding-bottom dark">
      <div class="container">
        <video playsInline loop muted class="preview" autoPlay>
          <source
            src="../videos/columbia-pictures-video-01-intro.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
export default Video;
