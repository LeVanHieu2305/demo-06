import React, { useEffect, useRef, useState } from "react";
import "./MockupMobileMultipleTwo.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MockupMobileMultipleTwo() {
  return (
    <section class="mockup-mobile-multiple-two has-padding-top-and-bottom light has-three-images">
      <div class="container">
        <div class="media">
          <img src="../images/mmm-05.webp" alt="" class="image" />
        </div>
        <div class="media">
          <img src="../images/mmm-06.webp" alt="" class="image" />
        </div>
        <div class="media">
          <img src="../images/mmm-07.webp" alt="" class="image" />
        </div>
      </div>
      <div class="top"></div>
      <div class="bottom"></div>
    </section>
  );
}
export default MockupMobileMultipleTwo;
