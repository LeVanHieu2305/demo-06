import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CanvasWithScrollAnimation = ({ imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();

    image.src = imageUrl;

    image.onload = () => {
      // Set canvas dimensions
      canvas.width = image.width;
      canvas.height = image.height;

      // Initially draw the image
      context.drawImage(image, 0, 0);

      // Animate the image when it scrolls into view
      gsap.to(canvas, {
        scrollTrigger: {
          trigger: canvas,
          start: "top 80%", // When the top of the canvas hits 80% of the viewport
          end: "bottom 20%", // When the bottom of the canvas hits 20% of the viewport
          scrub: true, // Smoothly animate in sync with scrolling
          //   markers: true,
        },
        scale: 1.5, // Example animation: scale the image
        rotation: 90, // Example animation: rotate the image
        duration: 1,
      });
    };
  }, [imageUrl]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", margin: "0 auto" }}
    ></canvas>
  );
};

export default CanvasWithScrollAnimation;
