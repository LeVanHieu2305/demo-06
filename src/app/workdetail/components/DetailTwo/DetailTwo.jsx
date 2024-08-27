import React, { useEffect, useRef, useState } from "react";
import "./DetailTwo.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DetailTwo() {
  return (
    <section className="text has-padding-top-and-bottom dark align-left detailtwo">
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
          <div className="text">Solution</div>
        </h2>
        <div className="body">
          <p>
            With the quiz, we guide users on an interactive journey through
            Columbia Pictures’ collection of film titles and TV shows,
            encouraging a path of self-discovery. Through strategic questions
            and personalized interactions, we aimed to understand each visitor,
            identifying the stories that had influenced them the most, resulting
            in a bespoke experience that was unique for every user and visit.
            <br />
            <br />
            When the quiz ends, it generates a personalized, one-of-a-kind
            shareable asset that highlights the visitors’ favorite three titles
            within their favorite genre, continuing to generate traffic and
            excitement around the site throughout the year.
          </p>
        </div>
      </div>
    </section>
  );
}
export default DetailTwo;
