"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Services.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Services() {
  return (
    <section className="services dark section-white">
      <div className="container">
        <ul className="images">
          <li className="image">
            <img src="../images/exo-ape-01.webp" alt="exo ape" loading="lazy" type="image" />
          </li>
          <li className="image">
            <img src="../images/exo-ape-02.webp" />
          </li>
          <li className="image">
            <img src="../images/exo-ape-03.webp" alt="exo ape" loading="lazy" />
          </li>
        </ul>
        <div className="text">
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
            <div className="txt">Partners</div>
          </h2>
          <h2 className="title">
            We partner with brands and businesses that create exceptional
            experiences where people live, work and unwind.
          </h2>
          <div className="body">
            <ul>
              <li>
                <p>Interior Design &amp; Furniture</p>
              </li>
              <li>
                <p>Architecture &amp; Real Estate</p>
              </li>
              <li>
                <p>Hospitality, Travel &amp; Tourism</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
