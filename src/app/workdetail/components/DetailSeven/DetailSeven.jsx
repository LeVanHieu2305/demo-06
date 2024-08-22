import React, { useEffect, useRef, useState } from "react";
import "./DetailSeven.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DetailSeven() {
  return (
    <section class="text has-padding-top-and-bottom light align-left detailseven">
      <div class="container">
        <h2 class="title is-normal">
          <div class="title-mask">
            <div class="title-line">Spreading love for</div>
          </div>
          <div class="title-mask">
            <div class="title-line">Columbia Pictures</div>
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
          <div class="text">Social Shareable</div>
        </h2>
        <div class="body">
          <p>
            Lastly, to increase awareness and site reach, we collaborated with
            varying Sony IPs to post their very own shareable to their
            followers. From the Spiderverse to Jumanji, fans and communities
            were able to link back to the celebratory experience and dive into
            it all for themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
export default DetailSeven;
