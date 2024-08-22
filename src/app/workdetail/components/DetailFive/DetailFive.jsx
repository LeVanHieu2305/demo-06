import React, { useEffect, useRef, useState } from "react";
import "./DetailFive.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DetailFive() {
  return (
    <section class="text has-padding-bottom dark align-left detailfive">
      <div class="container">
        <h2 class="title is-normal">
          <div class="title-mask">
            <div class="title-line">Personalized</div>
          </div>
          <div class="title-mask">
            <div class="title-line">& made to share</div>
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
          <div class="text">Quiz Result</div>
        </h2>
        <div class="body">
          <p>
            After diving into Columbia's 100 years and completing the
            quiz,&nbsp;visitors were presented with a personalized shareable
            through an&nbsp;automated asset generator.&nbsp;This asset —
            accompanied with a range of social sharing options —&nbsp;played an
            important&nbsp;role in maintaining engagement&nbsp;and enthusiasm
            throughout the&nbsp;campaign and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
export default DetailFive;
