import React, { useEffect, useRef, useState } from "react";
import "./DetailThree.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DetailThree() {
  return (
    <section class="text has-padding-top-and-bottom dark align-left detailthree">
      <div class="container">
        <h2 class="title is-normal">
          <div class="title-mask">
            <div class="title-line">A dynamic journey</div>
          </div>
          <div class="title-mask">
            <div class="title-line">through time</div>
          </div>
        </h2>
        <h2 class="label">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <div class="text">Quiz Mechanics</div>
        </h2>
        <div class="body">
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
