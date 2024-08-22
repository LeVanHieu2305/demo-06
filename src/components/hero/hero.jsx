import React, { useEffect, useRef } from "react";
import "./hero.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  // Images parallax
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
  }, []);
  return (
    <div className="hero">
      <div className="container">
        <div className="text-1">
          <div className="intro">
            <div className="text-mask">
              <div className="text-line">
                Global digital design studio partnering with
              </div>
            </div>
            <div className="text-mask">
              <div className="text-line">
                brands and businesses that create exceptional
              </div>
            </div>
            <div className="text-mask">
              <div className="text-line">
                experiences where people live, work, and unwind.
              </div>
            </div>
          </div>
          <h1 className="title">
            <div className="title-mask">
              <div className="title-line">Digital</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Design</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Experience</div>
            </div>
          </h1>
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
          <div className="body">
            <span className="">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </span>
          </div>
          <a
            href="/studio"
            className="link"
            id="00603737-17e1-4f58-8b81-20f35efd19c7"
          >
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
                The Studio
                <div className="border"></div>
              </div>
            </div>
          </a>
          <ul className="list">
            <li className="list-item">
              <a href="/work" className="list-link">
                Work
              </a>
            </li>
            <li className="list-item">
              <a href="/studio" className="list-link">
                Studio
              </a>
            </li>
            <li className="list-item">
              <a href="/news" className="list-link">
                News
              </a>
            </li>
            <li className="list-item">
              <a href="/contact" className="list-link">
                Contact
              </a>
            </li>
          </ul>
          <ul className="list">
            <li className="list-item">
              <a href="mailto:hello@exoape.com" className="list-link">
                hello@exoape.com
              </a>
            </li>
            <li className="list-item">
              <a href="tel:+31 772 086 200" className="list-link">
                +31 772 086 200
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="scroll-to">Scroll to explore</div>
      <div className="background image-parallax">
        <img
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          className="image"
        />
      </div>
    </div>
  );
}
export default Hero;
