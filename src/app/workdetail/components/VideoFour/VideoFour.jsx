import React, { useEffect, useRef, useState } from "react";
import "./VideoFour.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function VideoFour() {
  return (
    <section class="videofour light is-fluid">
      <div class="container">
        <video playsInline loop muted class="preview" autoPlay>
          <source
            src="../videos/columbia-pictures-video-04-wipe-sharables.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
export default VideoFour;
