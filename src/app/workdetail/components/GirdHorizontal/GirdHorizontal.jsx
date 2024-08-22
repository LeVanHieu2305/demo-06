import React, { useEffect, useRef, useState } from "react";
import "./GirdHorizontal.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function GirdHorizontal() {
  const gridRef = useRef(null);
  useEffect(() => {
    const gridElement = gridRef.current;

    if (gridElement) {
      const rows = gridElement.querySelectorAll(".row");

      if (rows.length >= 2) {
        const firstRow = rows[0];
        const lastRow = rows[rows.length - 1];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: gridElement,
            start: "top 70%",
            end: "110% 30%",
            scrub: 1,
            // markers: true,
          }
        });

        tl.to(firstRow, { x: -100, duration: 5 }, 0)
          .to(lastRow, { x: 100, duration: 5}, 0);
      }
    }
  }, []);

  return (
    <section class="grid dark is-horizontal girdhorizontal" ref={gridRef}>
      <div class="container">
        <div class="row">
          <div class="media">
            <img src="../images/girdhorizontal-01.webp" alt="" />
          </div>
          <div class="media">
            <img src="../images/girdhorizontal-02.webp" alt="" />
          </div>
          <div class="media">
            <video playsInline loop muted autoPlay>
              <source src="../videos/girdhorizontal-03.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="media">
            <img src="../images/girdhorizontal-04.webp" alt="" />
          </div>
        </div>
        <div class="row">
          <div class="media">
            <img src="../images/girdhorizontal-05.webp" alt="" />
          </div>
          <div class="media">
            <video playsInline loop muted autoPlay>
              <source src="../videos/girdhorizontal-06.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="media">
            <img src="../images/girdhorizontal-07.webp" alt="" />
          </div>
          <div class="media">
            <img src="../images/girdhorizontal-08.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default GirdHorizontal;
