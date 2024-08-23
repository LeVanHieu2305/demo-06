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
    <header class="hero">
      <div class="container">
        <div class="text-1">
          <h1 class="title">
            <div class="title-mask">
              <div class="title-line">100 Years</div>
            </div>
            <div class="title-mask">
              <div class="title-line">Columbia</div>
            </div>
            <div class="title-mask">
              <div class="title-line">Pictures</div>
            </div>
          </h1>
          <h2 class="subtitle">
            <div class="text-mask">
              <div class="text-line">Celebrating a Century of Cinema</div>
            </div>
          </h2>
          <svg
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon-arrow"
          >
            <path
              d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div class="text-2">
          <p class="intro">
            In honor of Columbia Pictures 100th anniversary, we teamed up with
            Watson Design Group to create a century-filled digital experience
            and quiz. This took visitors through entertainment history and a
            personalized journey of self-discovery, revealing their most
            influential films and TV shows.
          </p>
          <a href="https://columbia100.watson.la/" target="_blank" class="link is-dark">
            <div class="wrap">
              <div class="circle">
                <div class="circle-fill"></div>
                <svg
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  class="circle-outline"
                >
                  <circle cx="25" cy="25" r="23"></circle>
                </svg>
                <div class="circle-icon">
                  <svg
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon-external"
                  >
                    <path
                      d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="label">
                Visit website
                <div class="border"></div>
              </div>
            </div>
          </a>
          <div class="info">
            <span class="client">Watson Design Group</span>
            <ul class="services">
              <li class="service">Visual Design</li>
              <li class="service">UI &amp; UX Design</li>
              <li class="service">Web Development</li>
            </ul>
            <ul class="industries">
              <li class="industry">Entertainment</li>
            </ul>
            <time class="date">February ‘2024</time>
          </div>
        </div>
      </div>
      <div class="background image-parallax">
        <img src="../images/workmana-011.webp" class="image" alt="" />
      </div>
    </header>
  );
}
export default Hero;
