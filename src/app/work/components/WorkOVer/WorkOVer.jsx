// import React, { useEffect, useRef  } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import "./WorkOver.scss";

// gsap.registerPlugin(ScrollTrigger);

// const WorkOver = () => {
//   const videoRefss = useRef([]);
//   const handleMouseEnterr = (index) => {
//     if (videoRefss.current[index]) {
//       videoRefss.current[index].play();
//     }
//   };
//   const handleMouseLeavee = (index) => {
//     if (videoRefss.current[index]) {
//       videoRefss.current[index].pause();
//       // videoRefss.current.currentTime = 0; reset
//     }
//   };
//   return (
//     // <section className={`overview ${isActive ? "active" : ""}`}  onClick={handleOverviewClick}>
//     //   <div class="center"></div>
//     //   <div class="indicator">
//     //     <span class="explore">Scroll to explore</span>
//     //     <span class="title">
//     //       <span>The St. Regis Venice —</span> Elegant one-page solution
//     //     </span>
//     //   </div>
//     //   <button class="close">
//     //     <svg
//     //       viewBox="0 0 15 15"
//     //       fill="none"
//     //       xmlns="http://www.w3.org/2000/svg"
//     //       class="icon"
//     //     >
//     //       <line
//     //         x1="13.788"
//     //         y1="1.28816"
//     //         x2="1.06011"
//     //         y2="14.0161"
//     //         stroke="currentColor"
//     //         stroke-width="1.2"
//     //       ></line>
//     //       <line
//     //         x1="1.06049"
//     //         y1="1.43963"
//     //         x2="13.7884"
//     //         y2="14.1675"
//     //         stroke="currentColor"
//     //         stroke-width="1.2"
//     //       ></line>
//     //     </svg>
//     //     <span class="close-label">Close</span>
//     //   </button>
//     //   <div class="projects">
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(0)}
//     //       onMouseLeave={() => handleMouseLeavee(0)}
//     //     >
//     //       <div class="block">
//     //         <img src="../images/workmana-01.webp" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[0] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">100 Years Columbia Pictures</h2>
//     //         <h3 class="subtitle">Celebrating a Century of Cinema</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(1)}
//     //       onMouseLeave={() => handleMouseLeavee(1)}
//     //     >
//     //       <div class="block">
//     //         <img src="../images/workmana-02.webp" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[1] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">Pixelflakes</h2>
//     //         <h3 class="subtitle">Architectural marketing agency</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(2)}
//     //       onMouseLeave={() => handleMouseLeavee(2)}
//     //     >
//     //       <div class="block">
//     //         <img src="../images/workmana-03.webp" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[2] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">Studio D</h2>
//     //         <h3 class="subtitle">Urban and Landscape Design</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(3)}
//     //       onMouseLeave={() => handleMouseLeavee(3)}
//     //     >
//     //       <div class="block">
//     //         <img src="../images/workmana-04.webp" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[3] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">Plugged Live Shows</h2>
//     //         <h3 class="subtitle">Custom Made Live Shows</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(4)}
//     //       onMouseLeave={() => handleMouseLeavee(4)}
//     //     >
//     //       <div class="block">
//     //         <img src="../images/workmana-05.webp" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[4] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">Ali Ali</h2>
//     //         <h3 class="subtitle">Unique director’s portfolio</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(5)}
//     //       onMouseLeave={() => handleMouseLeavee(5)}
//     //     >
//     //       <div class="block">
//     //         <img src="../images/workmana-06.webp" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[5] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">Stock Dutch Design</h2>
//     //         <h3 class="subtitle">Daring colours &amp; patterns</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(6)}
//     //       onMouseLeave={() => handleMouseLeavee(6)}
//     //     >
//     //       <div class="block">
//     //         <img src="../images/workmana-07.webp" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[6] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">The St. Regis Venice</h2>
//     //         <h3 class="subtitle">Elegant one-page solution</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(7)}
//     //       onMouseLeave={() => handleMouseLeavee(7)}
//     //     >
//     //       <div class="block">
//     //         <img src="../images/workmana-08.webp" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[7] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">Rino &amp; Pelle</h2>
//     //         <h3 class="subtitle">Effortless chic lifestyle</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(8)}
//     //       onMouseLeave={() => handleMouseLeavee(8)}
//     //     >
//     //       <div class="block">
//     //         <img src="" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[8] = el)}
//     //         >
//     //           <source src="../images/workmana-09.webp" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">Aebele Interiors</h2>
//     //         <h3 class="subtitle">Luxurious design experience</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       class="project"
//     //       onMouseEnter={() => handleMouseEnterr(9)}
//     //       onMouseLeave={() => handleMouseLeavee(9)}
//     //     >
//     //       <div class="block">
//     //         <img src="../images/workmana-10.webp" class="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           class="video"
//     //           ref={(el) => (videoRefss.current[9] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div class="meta">
//     //         <h2 class="title">Ottografie</h2>
//     //         <h3 class="subtitle">Immersive photography portfolio</h3>
//     //       </div>
//     //     </button>
//     //   </div>
//     // </section>
//   );
// };

// export default WorkOver;
