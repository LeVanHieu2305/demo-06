import React, { useEffect, useRef, useState } from "react";
import "./MockupMobileMultiple.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MockupMobileMultiple() {
  return (
    <section className="mockup-mobile-multiple has-padding-top-and-bottom light has-three-images">
      <div className="container">
        <div className="media">
          <img src="../images/mmm-01.webp" alt="" className="image" />
        </div>
        <div className="media">
          <img src="../images/mmm-02.webp" alt="" className="image" />
        </div>
        <div className="media">
          <img src="../images/mmm-03.webp" alt="" className="image" />
        </div>
      </div>
      <img src="../images/mmm-04.webp" alt="" type="image" className="background" />
      <div className="top"></div>
      <div className="bottom"></div>
    </section>
  );
}
export default MockupMobileMultiple;
