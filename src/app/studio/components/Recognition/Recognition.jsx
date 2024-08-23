"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Recognition.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Recognition() {
  useEffect(() => {
    gsap.to(".recognition .title-line", {
      scrollTrigger: {
        trigger: ".recognition",
        start: "top 15%",
        // markers: true,
      },
      visibility: "inherit",
      x: 0, // translateX
      y: 0, // translateY
      rotation: 0, // rotate
      scale: 1, // scale
      opacity: 1,
      duration: 0.5, // animation duration in seconds
    });
  }, []);
  return (
    <section className="recognition dark section-white">
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
          <div className="text">Recognition</div>
        </h2>
        <h3 className="title">
          <div className="title-mask">
            <div className="title-line">Awards &amp;</div>
          </div>
          <div className="title-mask">
            <div className="title-line">Publications</div>
          </div>
        </h3>
        <div className="publications">
          <ul>
            <li>
              <p>
                Exo Ape
                <br />
                Webby Nominee 23 <br />
                <a href="" target="_blank" linktype="url">
                  The Webby Awards
                </a>
              </p>
            </li>
            <li>
              <p>
                Ali Ali <br />
                Site of the Month
                <br />
                <a href="" target="_blank" linktype="url">
                  Awwwards
                </a>
              </p>
            </li>
            <li>
              <p>
                Ottografie <br />
                Photography Site of the Year
                <br />
                <a href="" target="_blank" linktype="url">
                  CSSDA
                </a>
              </p>
            </li>
          </ul>
        </div>
        <ul className="awards">
          <li className="item">
            <span className="name">Awwwards</span>
            <span className="amount">x25</span>
          </li>
          <li className="item">
            <span className="name">The FWA</span>
            <span className="amount">x9</span>
          </li>
          <li className="item">
            <span className="name">CSSDA</span>
            <span className="amount">x8</span>
          </li>
          <li className="item">
            <span className="name">Behance</span>
            <span className="amount">x23</span>
          </li>
          <li className="item">
            <span className="name">Commarts</span>
            <span className="amount">x04</span>
          </li>
          <li className="item">
            <span className="name">Lovie Awards</span>
            <span className="amount">x1</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Recognition;
