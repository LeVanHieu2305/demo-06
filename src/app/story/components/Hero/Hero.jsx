"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Hero.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HeroStory() {
  useEffect(() => {
    const coolVideo = document.querySelector(".hero .videoo");
    console.log(coolVideo, "hí");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-hero",
        start: "60% 50%",
        end: "bottom 50%",
        scrub: true,
        markers: true,
        duration: 10,
      },
      ease: "power2.inOut",
    });
    // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
    coolVideo.onloadedmetadata = function () {
      const videoDuration = coolVideo.duration;
      const scrollDuration = 1800 * (window.innerHeight / videoDuration);
      tl.to(coolVideo, {
        currentTime: videoDuration,
        duration: scrollDuration,
        ease: "none",
      });
    };

    // Dealing with devices
    function isTouchDevice() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }
    console.log(isTouchDevice(), "nè");

    if (isTouchDevice()) {
      coolVideo.play();
      coolVideo.pause();
    }
  }, []);

  return (
    <header class="hero story-hero">
      <div class="container">
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
          <div class="text">Our Story</div>
        </h2>
        <h1 class="title">
          <div class="title-mask">
            <div class="title-line">True</div>
          </div>
          <div class="title-mask">
            <div class="title-line">wonderers</div>
          </div>
          <div class="title-mask">
            <div class="title-line">look up at</div>
          </div>
          <div class="title-mask">
            <div class="title-line">the sky.</div>
          </div>
        </h1>
        <p class="intro">
          The story behind our name is one of exploration, creativity and
          curiosity.
        </p>
      </div>
      <div class="background">
        {/* <video
          className="videoo"
          playsInline
          webkitPlaysInline
          preload="auto"
          muted
        >
          <source src="../videos/video-6-01.mp4" type="video/mp4" />
        </video> */}

        <video
          src="https://www.romaingranai.xyz/files/vid-train-frame-by-frame.mp4"
          playsInline={true}
          webkit-playsinline="true"
          preload="auto"
          muted
          className="videoo"
        ></video>
      </div>
    </header>
  );
}
export default HeroStory;
