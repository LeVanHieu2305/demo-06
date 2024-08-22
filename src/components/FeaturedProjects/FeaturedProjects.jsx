import React, { useEffect, useRef } from "react";
import "./FeaturedProjects.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function FeaturedProjects() {
  const videoRefs = useRef([]);
  const textRefs = useRef([]);
  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
    if (textRefs.current[index]) {
      textRefs.current[index].classList.add("active");
    }
  };
  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      // videoRefs.current.currentTime = 0; reset
    }
    if (textRefs.current[index]) {
      textRefs.current[index].classList.remove("active");
    }
  };
  useEffect(() => {
    gsap.to(".title-line", {
      scrollTrigger: {
        trigger: ".featured-projects",
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

    // gsap.to(".featured-projects", {
    //   yPercent: -30,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".featured-projects",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
  });

  return (
    <section className="featured-projects section-white">
      <div className="container">
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
            <div className="text">Featured Projects</div>
          </h2>
          <h3 className="title">
            <div className="title-mask">
              <div className="title-line">Work</div>
            </div>
          </h3>
          <div className="body">
            <p>
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </p>
          </div>
        </div>
        <div className="projects">
          <a
            href="/work/columbia-pictures"
            className="project"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <div className="block">
              <img
                src="../images/columbia-pictures.webp"
                alt="Columbia Pictures"
                loading="lazy"
                className="image"
              />
              <video
                ref={(el) => (videoRefs.current[0] = el)}
                playsInline
                loop="loop"
                muted="muted"
                className="video"
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <p className="info" ref={(el) => (textRefs.current[0] = el)}>
              <span className="info-line">
                <strong>Columbia Pictures</strong>
                Celebrating a Century of Cinema
              </span>
            </p>
          </a>

          <a
            href="/work/rino-pelle"
            className="project"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <div className="block">
              <img
                src="../images/rino-pelle.webp"
                alt="Rino Pelle"
                loading="lazy"
                className="image"
              />
              <video
                ref={(el) => (videoRefs.current[1] = el)}
                playsInline
                loop="loop"
                muted="muted"
                className="video"
              >
                <source src="../videos/rino-pelle.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="info" ref={(el) => (textRefs.current[1] = el)}>
              <span className="info-line">
                <strong>Rino Pelle</strong>
                Effortless chic lifestyle
              </span>
            </p>
          </a>

          <a
            href="/work/aebele-interiors"
            className="project"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <div className="block">
              <img
                src="../images/aebele-interiors.webp"
                alt="Aebele Interiors"
                loading="lazy"
                className="image"
              />
              <video
                ref={(el) => (videoRefs.current[2] = el)}
                playsInline
                loop="loop"
                muted="muted"
                className="video"
              >
                <source src="../videos/aebele-interiors.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="info" ref={(el) => (textRefs.current[2] = el)}>
              <span className="info-line">
                <strong> Aebele Interiors</strong>
                Luxurious design experience
              </span>
            </p>
          </a>

          <a
            href="/work/pixelflakes"
            className="project"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <div className="block">
              <img src="../images/pixelflakes.webp" className="image" />
              <video
                ref={(el) => (videoRefs.current[3] = el)}
                playsInline
                loop="loop"
                muted="muted"
                className="video"
              >
                <source src="../videos/pixelflakes.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="info" ref={(el) => (textRefs.current[3] = el)}>
              <span className="info-line">
                <strong>Pixelflakes</strong>
                Architectural marketing agency
              </span>
            </p>
          </a>
        </div>
        <a href="/work" className="link is-dark">
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
              Browse all work
              <div className="border"></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
export default FeaturedProjects;
