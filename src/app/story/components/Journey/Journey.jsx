"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Journey.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Journey() {
  return (
    <section className="journey">
      <div className="container">
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
          <div className="text">Journey</div>
        </h2>
        <p className="intro">
          It took an immense amount of curiosity and creativity to go from
          barely using stone tools to landing on the moon, and beyond. This
          journey symbolizes our drive to the unrelenting pursuit towards
          meaningful aesthetics and limitless imagination.
        </p>
      </div>
      <div className="background">
        <div className="canvas">
          <video playsInline loop muted autoPlay className="video">
            <source src="../videos/video-3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
export default Journey;
