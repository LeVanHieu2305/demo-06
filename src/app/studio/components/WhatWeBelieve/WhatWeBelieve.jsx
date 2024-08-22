"use client";
import React, { useEffect, useRef, useState } from "react";
import "./WhatWeBelieve.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function WhatWeBelieve() {
  useEffect(() => {
    gsap.to(".what-we-believe .image",{
      scrollTrigger: {
        trigger:".what-we-believe",
        start: "50% 70%",
        end: "bottom bottom",
        // markers: true,
        scrub: true,
      },
      scale: 1,
    })

    gsap.to(".what-we-believe .title-line", {
      scrollTrigger: {
        trigger: ".what-we-believe",
        start: "top 15%",
        // markers: true,
      },
      visibility: "inherit",
      x: 0, // translateX
      y: 0, // translateY
      rotation: 0, // rotate
      scale: 1, // scale
      opacity: 1,
      duration: .5, // animation duration in seconds
    });
  }, [])
  return (
    <section className="what-we-believe section-white">
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
          <div className="text">What we believe</div>
        </h2>
        <h2 className="title">
          <div className="title-mask">
            <div className="title-line">Data</div>
          </div>
          <div className="title-mask">
            <div className="title-line">Informs,</div>
          </div>
          <div className="title-mask">
            <div className="title-line">— Emotion</div>
          </div>
          <div className="title-mask">
            <div className="title-line">Converts</div>
          </div>
        </h2>
        <div className="body">
          <p>
            We believe that the most effective outcomes are achieved when
            data-driven insights are used to inspire emotive experiences.
            Leading to increased brand loyalty, long-term customer engagement,
            and higher conversion rates.
          </p>
        </div>
        <blockquote className="quote">
          "Our approach is informed by insight and research, but at the end of
          the day, we focus on making people feel."
        </blockquote>
      </div>
      <div className="image">
        <img src="../images/exo-ape-04.webp" alt="exo ape" type="image" />
      </div>
      <div className="background">
        <div className="dark"></div>
        <div className="light"></div>
      </div>
    </section>
  );
}
export default WhatWeBelieve;
