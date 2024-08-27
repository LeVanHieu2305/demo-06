import React, { useEffect, useRef, useState } from "react";
import "./Media.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Media() {
  return (
    <section className="media light">
      <div className="container">
        <div className="assets">
          <img src="../images/media-01.webp" alt="" />
        </div>
      </div>
      <img src="../images/media-02.webp" alt="" className="background" />
    </section>
  );
}
export default Media;
