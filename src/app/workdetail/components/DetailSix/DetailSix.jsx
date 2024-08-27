import React, { useEffect, useRef, useState } from "react";
import "./DetailSix.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DetailSix() {
  return (
    <section className="detailsix text has-padding-top-and-bottom dark align-left">
      <div className="container">
        <h2 className="title is-normal">
          <div className="title-mask">
            <div className="title-line">An extra hint of</div>
          </div>
          <div className="title-mask">
            <div className="title-line">customization</div>
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
          <div className="text">Customize</div>
        </h2>
        <div className="body">
          <p>
            To provide visitors with an extra&nbsp;layer of personalization
            before sharing the generated asset, we implemented&nbsp;an editing
            tool that gave them the ability&nbsp;to tailor their final sharable.
            Whether its selecting their favorite villain, sidekick, or title,
            this customization provided viewers the final say while showing them
            a range of hidden gems and films they may have missed.
          </p>
        </div>
      </div>
    </section>
  );
}
export default DetailSix;
