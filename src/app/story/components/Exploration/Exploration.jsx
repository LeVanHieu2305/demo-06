"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Exploration.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Exploration() {
  return (
    <section class="exploration">
      <div class="container">
        <div class="title">
          <div class="title-mask">
            <div class="title-line">Forever</div>
          </div>
          <div class="title-mask">
            <div class="title-line">Upwards</div>
          </div>
          <svg
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.2593 28.5502C29.5481 32.1299 32.5816 33.9198 35.3596 33.9198C37.4989 33.9198 39.2072 33.1973 40.4845 31.7522C41.7617 30.2744 42.4003 28.4188 42.4003 26.1855C42.4003 23.9851 41.7457 22.1624 40.4366 20.7174C39.1274 19.2723 37.4191 18.5498 35.3117 18.5498C34.8966 18.5498 34.4815 18.5826 34.0664 18.6483C33.6832 18.714 33.284 18.829 32.8689 18.9932C32.4858 19.1574 32.1345 19.3052 31.8152 19.4365C31.5279 19.5679 31.1766 19.7978 30.7615 20.1262C30.3464 20.4218 30.0271 20.6517 29.8036 20.8159C29.612 20.9473 29.2927 21.2264 28.8457 21.6534C28.4306 22.0803 28.1432 22.3595 27.9835 22.4908L26.2593 24.2643C25.0459 23.0163 24.1199 22.0967 23.4813 21.5056C22.8427 20.9144 21.9007 20.2904 20.6554 19.6336C19.442 18.9767 18.2286 18.6483 17.0153 18.6483C14.9078 18.6483 13.2155 19.3873 11.9383 20.8652C10.693 22.343 10.0703 24.1658 10.0703 26.3333C10.0703 28.5337 10.7089 30.34 11.9862 31.7522C13.2953 33.1644 15.0036 33.8705 17.1111 33.8705C17.6539 33.8705 18.1648 33.8377 18.6437 33.772C19.1546 33.6735 19.6655 33.4929 20.1764 33.2301L21.4217 32.5897C21.773 32.4255 22.22 32.1135 22.7628 31.6537C23.3376 31.1939 23.7048 30.8984 23.8644 30.767C24.056 30.6028 24.4711 30.2251 25.1097 29.6339C25.7803 29.0099 26.1635 28.6487 26.2593 28.5502ZM34.21 22.0475C34.5932 21.9489 34.9764 21.8997 35.3596 21.8997C36.6049 21.8997 37.5628 22.3102 38.2333 23.1312C38.9358 23.9523 39.2871 25.0197 39.2871 26.3333C39.2871 27.5485 38.9518 28.5666 38.2812 29.3876C37.6107 30.1758 36.6847 30.5699 35.5032 30.5699C34.5772 30.5699 33.6193 30.3236 32.6295 29.831C31.6715 29.3055 30.9691 28.8457 30.522 28.4516C30.075 28.0575 29.3406 27.3679 28.3188 26.3826C28.3827 26.3169 28.6381 26.0706 29.0851 25.6437C29.5641 25.1839 29.8834 24.8719 30.0431 24.7077C30.2347 24.5434 30.538 24.2807 30.9531 23.9195C31.4001 23.5253 31.7673 23.2462 32.0547 23.082C32.3421 22.9178 32.6774 22.7371 33.0605 22.5401C33.4756 22.3102 33.8588 22.146 34.21 22.0475ZM14.1894 23.2298C14.8919 22.3759 15.8338 21.9489 17.0153 21.9489C17.8135 21.9489 18.7236 22.2445 19.7454 22.8357C20.7672 23.4268 21.5335 23.9523 22.0444 24.4121C22.5553 24.839 23.2737 25.4959 24.1997 26.3826C21.4856 29.1742 19.1387 30.5699 17.159 30.5699C15.9137 30.5699 14.9398 30.1923 14.2373 29.4369C13.5348 28.6487 13.1836 27.6142 13.1836 26.3333C13.1836 25.1182 13.5188 24.0837 14.1894 23.2298Z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M53 26.5C53 41.1355 41.1355 53 26.5 53C11.8645 53 0 41.1355 0 26.5C0 11.8645 11.8645 0 26.5 0C41.1355 0 53 11.8645 53 26.5ZM51 26.5C51 40.031 40.031 51 26.5 51C12.969 51 2 40.031 2 26.5C2 12.969 12.969 2 26.5 2C40.031 2 51 12.969 51 26.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
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
          <div class="text">Ad Astra</div>
        </h2>
        <p class="intro">
          Ever since the first men set foot on this earth it felt the intangible
          desire to explore and challenge the boundaries of its own evolution.
          Drawn by a feeling from deep within and grasped by an ever-lasting
          urge for things unexplored.
        </p>
        <p class="intro">
          In the unconscious craving to find something greater than ourselves we
          took the leap and were on our way to undiscovered lands and new
          worlds. In the same ethos we explore the boundaries of the
          ever-changing digital landscape today.
        </p>
      </div>
      <div class="background">
        <canvas class="canvas" width="1920" height="1920"></canvas>
      </div>
    </section>
  );
}
export default Exploration;
