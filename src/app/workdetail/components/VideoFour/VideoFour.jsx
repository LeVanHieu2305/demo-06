import React, { useEffect, useRef, useState } from "react";
import "./VideoFour.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function VideoFour() {
  return (
    <section className="videofour light is-fluid">
      <div className="container">
        <video playsInline loop muted className="preview" autoPlay>
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
