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
    <header className="hero">
      <div className="container">
        <div className="text-1">
          <h1 className="title">
            <div className="title-mask">
              <div className="title-line">100 Years</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Columbia</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Pictures</div>
            </div>
          </h1>
          <h2 className="subtitle">
            <div className="text-mask">
              <div className="text-line">Celebrating a Century of Cinema</div>
            </div>
          </h2>
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
        <div className="text-2">
          <p className="intro">
            In honor of Columbia Pictures 100th anniversary, we teamed up with
            Watson Design Group to create a century-filled digital experience
            and quiz. This took visitors through entertainment history and a
            personalized journey of self-discovery, revealing their most
            influential films and TV shows.
          </p>
          <a href="https://columbia100.watson.la/" target="_blank" className="link is-dark">
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
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-external"
                  >
                    <path
                      d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="label">
                Visit website
                <div className="border"></div>
              </div>
            </div>
          </a>
          <div className="info">
            <span className="client">Watson Design Group</span>
            <ul className="services">
              <li className="service">Visual Design</li>
              <li className="service">UI &amp; UX Design</li>
              <li className="service">Web Development</li>
            </ul>
            <ul className="industries">
              <li className="industry">Entertainment</li>
            </ul>
            <time className="date">February ‘2024</time>
          </div>
        </div>
      </div>
      <div className="background image-parallax">
        <img src="../images/workmana-011.webp" className="image" alt="" />
      </div>
    </header>
  );
}
export default Hero;
