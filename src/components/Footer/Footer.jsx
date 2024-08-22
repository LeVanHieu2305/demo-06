import React, { useEffect, useRef } from "react";
import "./Footer.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const Footer = () => {
    // Images parallax
    // useEffect(() => {
    //   gsap.to(".footer", {
    //     yPercent: -20,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".footer",
    //       start: "top 100%",
    //       end: "bottom top",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });
    //   gsap.to(".footer .container", {
    //     yPercent: 0,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".footer",
    //       start: "top 50%",
    //       end: "bottom top",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });
    //   gsap.to(".footer .background", {
    //     yPercent: 0,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".footer",
    //       start: "top 50%",
    //       end: "bottom top",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });
    // }, []);
  return (
    <footer className="footer sand section-beige">
      <div className="container">
        <div className="title">
          <div className="title-mask">
            <div className="title-line">Our</div>
          </div>
          <div className="title-mask">
            <div className="title-line">Story</div>
          </div>
        </div>
        <p className="body">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
        <div className="divider"></div>
        <ul className="address">
          <li className="item">
            <a target="_blank" href="https://goo.gl/maps/8z56qdL3F85VQmLf9">
              Willem II Singel 8<br />
              6041 HS, Roermond
              <br />
              The Netherlands
            </a>
          </li>
          <li className="item">
            <a href="mailto:hello@exoape.com" className="footer-link">
              hello@exoape.com
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="item">
            <a href="/work" className="footer-link">
              Work
            </a>
          </li>
          <li className="item">
            <a href="/studio" className="footer-link">
              Studio
            </a>
          </li>
          <li className="item">
            <a href="/news" className="footer-link">
              News
            </a>
          </li>
          <li className="item">
            <a href="/contact" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
        <ul className="social">
          <li className="item">
            <a
              href="https://www.behance.net/exoape"
              target="_blank"
              className="footer-link"
            >
              Behance
            </a>
          </li>
          <li className="item">
            <a
              href="https://dribbble.com/ExoApe"
              target="_blank"
              className="footer-link"
            >
              Dribbble
            </a>
          </li>
          <li className="item">
            <a
              href="https://twitter.com/exoape"
              target="_blank"
              className="footer-link"
            >
              Twitter
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.instagram.com/exoape/?hl=en"
              target="_blank"
              className="footer-link"
            >
              Instagram
            </a>
          </li>
        </ul>
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
      <div className="background">
        <video playsInline loop="loop" muted="muted" className="video" autoPlay>
          <source src="../videos/video-6.mp4" type="video/mp4" />
        </video>
      </div>
    </footer>
  );
};
