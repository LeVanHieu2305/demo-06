import React, { useEffect, useRef, useState } from "react";
import "./Imagede.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Imagede() {
  return (
    <section class="imagede has-padding-bottom dark is-contained">
      <div class="container">
        <img
          src="../images/image-01.webp"
          alt="user interface of quiz dark theme"
          class="image"
        />
      </div>
    </section>
  );
}
export default Imagede;
