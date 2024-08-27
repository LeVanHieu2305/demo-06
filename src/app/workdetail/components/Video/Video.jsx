import React, { useEffect, useRef, useState } from "react";
import "./Video.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Video() {
  return (
    <section className="video has-padding-bottom dark">
      <div className="container">
        <video playsInline loop muted className="preview" autoPlay>
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
