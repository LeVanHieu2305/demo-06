"use client";
import React, { useEffect, useRef, useState } from "react";
import "./TheApes.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function TheApes() {
  useEffect(() => {
    gsap.to(".the-apes .title-line", {
      scrollTrigger: {
        trigger: ".the-apes",
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
    <section className="the-apes light">
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
          <div className="text">The Apes</div>
        </h2>
        <h3 className="title">
          <div className="title-mask">
            <div className="title-line">Design &amp;</div>
          </div>
          <div className="title-mask">
            <div className="title-line">Technology</div>
          </div>
          <div className="title-mask">
            <div className="title-line">Enthusiasts</div>
          </div>
        </h3>
        <div className="body">
          <p>
            We are a team* of like-minded design enthusiasts and tech
            aficionados that explore the digital frontier with grit and
            dedication. Intrigued by beauty, fascinated by technology and
            fuelled with an everlasting devotion to digital craftsmanship and
            meaningful aesthetics.
          </p>
        </div>
        <div className="images">
          <div className="image">
            <img src="../images/exo-ape-05.webp" alt="exo ape" type="image" />
          </div>
          <div className="image">
            <img src="../images/exo-ape-06.webp" alt="exo ape" type="image" />
          </div>
        </div>
        <blockquote className="quote">
          *We believe in a fluid team approach that allows us to bring together
          the best designers, developers and agencies in the world in order to
          serve the needs of today’s clients.
        </blockquote>
      </div>
    </section>
  );
}
export default TheApes;
