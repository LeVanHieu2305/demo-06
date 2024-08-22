import React, { useEffect, useRef, useState } from "react";
import "./MockupMobileMultiple.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MockupMobileMultiple() {
  return (
    <section class="mockup-mobile-multiple has-padding-top-and-bottom light has-three-images">
      <div class="container">
        <div class="media">
          <img src="../images/mmm-01.webp" alt="" class="image" />
        </div>
        <div class="media">
          <img src="../images/mmm-02.webp" alt="" class="image" />
        </div>
        <div class="media">
          <img src="../images/mmm-03.webp" alt="" class="image" />
        </div>
      </div>
      <img src="../images/mmm-04.webp" alt="" type="image" class="background" />
      <div class="top"></div>
      <div class="bottom"></div>
    </section>
  );
}
export default MockupMobileMultiple;
