import React, { useEffect, useRef, useState } from "react";
import "./Media.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Media() {
  return (
    <section class="media light">
      <div class="container">
        <div class="assets">
          <img src="../images/media-01.webp" alt="" />
        </div>
      </div>
      <img src="../images/media-02.webp" alt="" class="background" />
    </section>
  );
}
export default Media;
