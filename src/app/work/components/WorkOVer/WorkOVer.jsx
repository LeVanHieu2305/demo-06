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
//     //   <div className="center"></div>
//     //   <div className="indicator">
//     //     <span className="explore">Scroll to explore</span>
//     //     <span className="title">
//     //       <span>The St. Regis Venice —</span> Elegant one-page solution
//     //     </span>
//     //   </div>
//     //   <button className="close">
//     //     <svg
//     //       viewBox="0 0 15 15"
//     //       fill="none"
//     //       xmlns="http://www.w3.org/2000/svg"
//     //       className="icon"
//     //     >
//     //       <line
//     //         x1="13.788"
//     //         y1="1.28816"
//     //         x2="1.06011"
//     //         y2="14.0161"
//     //         stroke="currentColor"
//     //         strokeWidth="1.2"
//     //       ></line>
//     //       <line
//     //         x1="1.06049"
//     //         y1="1.43963"
//     //         x2="13.7884"
//     //         y2="14.1675"
//     //         stroke="currentColor"
//     //         strokeWidth="1.2"
//     //       ></line>
//     //     </svg>
//     //     <span className="close-label">Close</span>
//     //   </button>
//     //   <div className="projects">
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(0)}
//     //       onMouseLeave={() => handleMouseLeavee(0)}
//     //     >
//     //       <div className="block">
//     //         <img src="../images/workmana-01.webp" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[0] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">100 Years Columbia Pictures</h2>
//     //         <h3 className="subtitle">Celebrating a Century of Cinema</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(1)}
//     //       onMouseLeave={() => handleMouseLeavee(1)}
//     //     >
//     //       <div className="block">
//     //         <img src="../images/workmana-02.webp" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[1] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">Pixelflakes</h2>
//     //         <h3 className="subtitle">Architectural marketing agency</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(2)}
//     //       onMouseLeave={() => handleMouseLeavee(2)}
//     //     >
//     //       <div className="block">
//     //         <img src="../images/workmana-03.webp" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[2] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">Studio D</h2>
//     //         <h3 className="subtitle">Urban and Landscape Design</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(3)}
//     //       onMouseLeave={() => handleMouseLeavee(3)}
//     //     >
//     //       <div className="block">
//     //         <img src="../images/workmana-04.webp" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[3] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">Plugged Live Shows</h2>
//     //         <h3 className="subtitle">Custom Made Live Shows</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(4)}
//     //       onMouseLeave={() => handleMouseLeavee(4)}
//     //     >
//     //       <div className="block">
//     //         <img src="../images/workmana-05.webp" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[4] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">Ali Ali</h2>
//     //         <h3 className="subtitle">Unique director’s portfolio</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(5)}
//     //       onMouseLeave={() => handleMouseLeavee(5)}
//     //     >
//     //       <div className="block">
//     //         <img src="../images/workmana-06.webp" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[5] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">Stock Dutch Design</h2>
//     //         <h3 className="subtitle">Daring colours &amp; patterns</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(6)}
//     //       onMouseLeave={() => handleMouseLeavee(6)}
//     //     >
//     //       <div className="block">
//     //         <img src="../images/workmana-07.webp" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[6] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">The St. Regis Venice</h2>
//     //         <h3 className="subtitle">Elegant one-page solution</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(7)}
//     //       onMouseLeave={() => handleMouseLeavee(7)}
//     //     >
//     //       <div className="block">
//     //         <img src="../images/workmana-08.webp" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[7] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">Rino &amp; Pelle</h2>
//     //         <h3 className="subtitle">Effortless chic lifestyle</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(8)}
//     //       onMouseLeave={() => handleMouseLeavee(8)}
//     //     >
//     //       <div className="block">
//     //         <img src="" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[8] = el)}
//     //         >
//     //           <source src="../images/workmana-09.webp" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">Aebele Interiors</h2>
//     //         <h3 className="subtitle">Luxurious design experience</h3>
//     //       </div>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       className="project"
//     //       onMouseEnter={() => handleMouseEnterr(9)}
//     //       onMouseLeave={() => handleMouseLeavee(9)}
//     //     >
//     //       <div className="block">
//     //         <img src="../images/workmana-10.webp" className="image" />
//     //         <video
//     //           playsInline
//     //           loop
//     //           muted
//     //           className="video"
//     //           ref={(el) => (videoRefss.current[9] = el)}
//     //         >
//     //           <source src="../videos/columbia-pictures.mp4" type="video/mp4" />
//     //         </video>
//     //       </div>
//     //       <div className="meta">
//     //         <h2 className="title">Ottografie</h2>
//     //         <h3 className="subtitle">Immersive photography portfolio</h3>
//     //       </div>
//     //     </button>
//     //   </div>
//     // </section>
//   );
// };

// export default WorkOver;
