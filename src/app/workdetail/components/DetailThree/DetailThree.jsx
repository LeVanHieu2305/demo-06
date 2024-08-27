import React, { useEffect, useRef, useState } from "react";
import "./DetailThree.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DetailThree() {
  return (
    <section className="text has-padding-top-and-bottom dark align-left detailthree">
      <div className="container">
        <h2 className="title is-normal">
          <div className="title-mask">
            <div className="title-line">A dynamic journey</div>
          </div>
          <div className="title-mask">
            <div className="title-line">through time</div>
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
          <div className="text">Quiz Mechanics</div>
        </h2>
        <div className="body">
          <p>
            In order to create&nbsp;a uniquely individual experience, we
            implemented a strategic backend development to keep&nbsp;the journey
            original, dynamic, and varied for every user — no matter how many
            times they return. This combined with the wide range of visuals and
            varied questions ensured a new and entertaining experience for all.
          </p>
        </div>
      </div>
    </section>
  );
}
export default DetailThree;
