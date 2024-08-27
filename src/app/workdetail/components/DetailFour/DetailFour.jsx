import React, { useEffect, useRef, useState } from "react";
import "./DetailFour.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DetailFour() {
  return (
    <section className="text has-padding-top-and-bottom dark align-left detailfour">
      <div className="container">
        <h2 className="title is-normal">
          <div className="title-mask">
            <div className="title-line">Take the quiz</div>
          </div>
          <div className="title-mask">
            <div className="title-line">anytime, everywhere</div>
          </div>
        </h2>
        <h2 className="label">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="text">Mobile Experience</div>
        </h2>
        <div className="body">
          <p>
            With Columbia Pictures enthusiasts spanning the globe, our priority
            was to make sure the quiz experience worked seamlessly on any device
            and browser. We carefully crafted the mechanics to adapt to
            different screen sizes, ensuring that users could enjoy the quiz
            effortlessly, whether they were at home or on the go.
          </p>
        </div>
      </div>
    </section>
  );
}
export default DetailFour;
