import React, { useEffect, useRef, useState } from "react";
import "./MediaText.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MediaText() {
  return (
    <section className="mediatext has-padding-bottom dark align-media-right">
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
            <div className="text">A quiz shaped by you</div>
          </h2>
          <div className="body">
            <p>
              Each run through the quiz&nbsp;presents the visitor with&nbsp;8
              interactive questions that gradually change based on their
              responses. With titles, genres, and visuals from a hundred years
              of film and television, we were able to tailor the experience
              around each answer. For example, if the quiz finds that the
              user&nbsp;leans&nbsp;toward horror, more options will be
              horror-themed. If they lean toward 80s films, more&nbsp;options
              will tap into nostalgia.
            </p>
          </div>
        </div>
        <div className="media">
          <img src="../images/media-03.webp" alt="user interface of quiz" />
        </div>
      </div>
    </section>
  );
}
export default MediaText;
