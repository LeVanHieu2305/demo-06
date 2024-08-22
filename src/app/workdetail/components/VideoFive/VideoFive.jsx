import React, { useEffect, useRef, useState } from "react";
import "./VideoFive.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function VideoFive() {
  return (
    <section class="videofive has-padding-top dark">
      <div class="container">
        <video playsInline loop muted class="preview" autoPlay>
          <source
            src="../videos/columbia-pictures-video-05-recommendation-custom-sharable.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
export default VideoFive;
