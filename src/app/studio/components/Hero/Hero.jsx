"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Hero.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    gsap.to(".image-parallax .image", {
      yPercent: 60,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(".hero", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(".hero .title-line", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top 70%",
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

  }, []);
  return (
    <header className="hero light">
      <div className="container">
        <div className="text-1">
          <h1 className="title">
            <div className="title-mask">
              <div className="title-line">Building</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Digital</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Presence</div>
            </div>
          </h1>
          <h2 className="subtitle">
            <div className="text-mask">
              <div className="text-line">
                Digital experiences with maximum emotional impact
              </div>
            </div>
          </h2>
        </div>
        <div className="text-2">
          <div className="body">
            <h3>
              We explore and push the boundaries of digital for brands and
              businesses that strive to enhance people s lives through
              exceptional experiences.
            </h3>
            <p>
              For over a decade, we ve been using profound design aesthetics,
              meticulously crafted details, and surprising interactions to
              create digital experiences that spark conversation, inspire
              action, and drive desirability.
            </p>
          </div>
          <a href="/story" className="link">
            <div className="wrap">
              <div className="circle">
                <div className="circle-fill"></div>
                <svg
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="circle-outline"
                >
                  <circle cx="25" cy="25" r="23"></circle>
                </svg>
                <div className="circle-icon">
                  <svg
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-arrow"
                  >
                    <path
                      d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="label">
                Our Story
                <div className="border"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="scroll-to">Scroll to explore</div>
      <div className="background image-parallax">
        <img src="../images/exo-ape-07.webp" alt="exo ape" className="image" />
      </div>
    </header>
  );
}
export default Hero;
