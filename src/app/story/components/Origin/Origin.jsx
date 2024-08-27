"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Origin.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Origin() {
  useEffect(() => {
    const coolVideo = document.querySelector(".origin .videoo");
    console.log(coolVideo, "hí");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".origin",
        start: "60% 50%",
        end: "bottom 50%",
        scrub: true,
        // markers: true,
      },
      duration: 10,
      ease: "power2.inOut",
    });
    // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
    coolVideo.onloadedmetadata = function () {
      const videoDuration = coolVideo.duration;
      const scrollDuration = 1000 * (window.innerHeight / videoDuration);
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
    <section className="origin">
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
          <div className="text">Origin</div>
        </h2>
        <div className="block">
          <div className="title">
            <div className="title-mask">
              <div className="title-line">Exo</div>
            </div>
            <small className="animate">[ĕk sō]</small>
          </div>
          <p className="body animate">
            The exosphere is the outermost layer of our earths atmosphere and
            symbolizes the bar that we keep setting for our team in order to
            push further, aim higher and keep growing— one project at a time.
          </p>
        </div>
        <div className="block">
          <div className="title">
            <div className="title-mask">
              <div className="title-line">Ape</div>
            </div>
            <small className="animate">[eyp]</small>
          </div>
          <p className="body animate">
            Ape reminds us to never forget our roots, and stay human in a world
            that’s becoming ever more digital. It helps us to be brave, yet full
            of compassion. Humble, but proud of what we do— without the chest
            banging.
          </p>
        </div>
      </div>
      <div className="background">
        <video
          src="../videos/video-3.mp4"
          playsInline={true}
          webkit-playsinline="true"
          preload="auto"
          muted
          className="videoo"
        ></video>
      </div>
    </section>
  );
}
export default Origin;
