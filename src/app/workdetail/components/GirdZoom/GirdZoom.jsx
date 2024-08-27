import React, { useEffect, useRef, useState } from "react";
import "./GirdZoom.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function GirdZoom() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const mediaElements = wrapperRef.current.querySelectorAll(".media");

    const scaleValues = [
      { scaleX: 5, scaleY: 5 }, // 1st .media
      { scaleX: 6, scaleY: 6 }, // 2nd .media
      { scaleX: 4, scaleY: 4 }, // 3rd .media
      { scaleX: 5, scaleY: 5 }, // 4th .media
      { scaleX: 8, scaleY: 8 }, // 5th .media
      { scaleX: 6, scaleY: 6 }, // 6th .media
      { scaleX: 9, scaleY: 9 }, // 7th .media
    ];

    mediaElements.forEach((media, index) => {
      const { scaleX, scaleY } = scaleValues[index];

      gsap.fromTo(
        media,
        { scaleX: 1, scaleY: 1 },
        {
          scaleX,
          scaleY,
          ease: "power3.inOut", 
          scrollTrigger: {
            trigger: ".gridzoom",
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
          },
        }
      );
    });
  }, []);
  return (
    <section className="gridzoom dark is-exploded">
      <div className="container">
        <div className="wrapper" ref={wrapperRef}>
          <div className="media">
            <div>
              <div className="mask">
                <img src="../images/girdzoom-01.webp" alt="" className="image" />
              </div>
            </div>
          </div>
          <div className="media">
            <video playsInline loop muted autoPlay className="image">
              <source src="../videos/girdzoom-02.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="media">
            <div>
              <div className="mask">
                <img src="../images/girdzoom-03.webp" alt="" className="image" />
              </div>
            </div>
          </div>
          <div className="media">
            <div>
              <div className="mask">
                <img src="../images/girdzoom-04.webp" alt="" className="image" />
              </div>
            </div>
          </div>
          <div className="media">
            <div>
              <div className="mask">
                <img src="../images/girdzoom-05.webp" alt="" className="image" />
              </div>
            </div>
          </div>
          <div className="media">
            <video playsInline loop muted autoPlay className="image">
              <source src="../videos/girdzoom-06.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="media">
            <div>
              <div className="mask">
                <img src="../images/girdzoom-07.webp" alt="" className="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GirdZoom;
