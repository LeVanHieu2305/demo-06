import React, { useEffect, useRef, useState } from "react";
import "./MockupMobileMultipleTwo.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MockupMobileMultipleTwo() {
  return (
    <section className="mockup-mobile-multiple-two has-padding-top-and-bottom light has-three-images">
      <div className="container">
        <div className="media">
          <img src="../images/mmm-05.webp" alt="" className="image" />
        </div>
        <div className="media">
          <img src="../images/mmm-06.webp" alt="" className="image" />
        </div>
        <div className="media">
          <img src="../images/mmm-07.webp" alt="" className="image" />
        </div>
      </div>
      <div className="top"></div>
      <div className="bottom"></div>
    </section>
  );
}
export default MockupMobileMultipleTwo;
