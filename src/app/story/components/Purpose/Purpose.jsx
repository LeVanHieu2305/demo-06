"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Purpose.scss";
import CanvasWithScrollAnimation from "../Canvas/Canvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Purpose() {
  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".purpose",
        start: "-20% 80%",
        end: "bottom 0%",
        scrub: true,
        // markers: true,
      },
      x: -50,
      rotationZ: -76,
    });
  }, []);
  return (
    <section className="purpose">
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
          <div className="text">Purpose</div>
        </h2>
        <div className="title">
          <div className="title-mask">
            <div className="title-line">Dot</div>
          </div>
          <div className="title-mask">
            <div className="title-line">on the</div>
          </div>
          <div className="title-mask">
            <div className="title-line">Horizon.</div>
          </div>
        </div>
        <p className="intro">
          Exo Ape embodies our light in the distance that shines through the
          work that we produce and is at the core of our creations.
        </p>
        <a href="/studio" className="link">
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
              Our Studio
              <div className="border"></div>
            </div>
          </div>
        </a>
      </div>
      <div className="background">
        {/* <CanvasWithScrollAnimation imageUrl="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep-5.jpg" /> */}
        <img src="../images/global.png" />
        <div className="box">
          <div className="box-cr"></div>
        </div>
      </div>
    </section>
  );
}
export default Purpose;
