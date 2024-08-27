import React, { useEffect, useRef, useState } from "react";
import "./VideoTwo.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function VideoTwo() {
  return (
    <section className="videotwo has-padding-bottom dark">
      <div className="container">
        <video playsInline loop muted className="preview" autoPlay>
          <source
            src="../videos/columbia-pictures-video-02-mechanics-outlined.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
export default VideoTwo;
