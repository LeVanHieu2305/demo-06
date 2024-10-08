import React, { useEffect, useRef, useState } from "react";
import "./DetailOne.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DetailOne() {
  return (
    <section className="text has-padding-top-and-bottom dark align-left detailone">
      <div className="container">
        <h2 className="title is-large">
          <div className="title-mask">
            <div className="title-line">Celebrating</div>
          </div>
          <div className="title-mask">
            <div className="title-line">a Century</div>
          </div>
          <div className="title-mask">
            <div className="title-line">of Cinema</div>
          </div>
        </h2>
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
          <div className="text">Objective</div>
        </h2>
        <div className="body">
          <p>
            For a century, Columbia Pictures has brought drama, suspense,
            laughter, and love to the big screen. With stories, memories, and
            quotes spanning a hundred years, its truly a celebration of fandom.
            <br />
            <br />
            As a tribute to this fandom, Watson Design Group commissioned us to
            craft a digital quiz, inviting fans to dive back into the films and
            series they love most and reintroduce them to others they may have
            missed.
          </p>
        </div>
      </div>
    </section>
  );
}
export default DetailOne;
