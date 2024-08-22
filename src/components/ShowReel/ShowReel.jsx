import React, { useEffect, useRef } from "react";
import "./ShowReel.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ShowReel() {
  useEffect(() => {
    // gsap.to(".showreel", {
    //   yPercent: -30,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".showreel",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
    gsap.to(".video", {
      scrollTrigger: {
        trigger: ".showreel",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      scale: 1, // Phóng to video
      x: 0,
      y: 0,
      duration: 1,
    });
    gsap.to(".title-mask", {
      scrollTrigger: {
        trigger: ".showreel",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      x: 0,
      y: 0,
      duration: 1,
      opacity: 1,
    });
  }, []);
  return (
    <section className="showreel light-grey">
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
            <div className="text">Work in motion</div>
          </h2>
          <h2 className="title">
            <div className="title-mask">
              <div className="title-line">Play</div>
            </div>
            <div className="title-mask">
              <div className="title-line">Reel</div>
            </div>
          </h2>
          <div className="body">
            <p>
              Our work is best experienced in motion. Don’t forget to put on
              your headphones.
            </p>
          </div>
          <svg
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <circle
              opacity="0.4"
              cx="43"
              cy="43"
              r="41"
              stroke="currentColor"
            ></circle>
            <path d="M41 38V48L49.1818 43L41 38Z" fill="currentColor"></path>
          </svg>
        </div>
        <video playsInline loop="loop" muted="muted" autoPlay className="video">
          <source src="../videos/showreel.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
export default ShowReel;
