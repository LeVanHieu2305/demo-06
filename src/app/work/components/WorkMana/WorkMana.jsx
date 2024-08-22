import React, { useEffect, useRef, useState } from "react";
import "./WorkMana.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function WorkMana() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const videoRefss = useRef([]);
  const handleMouseEnterr = (index) => {
    if (videoRefss.current[index]) {
      videoRefss.current[index].play();
    }
  };
  const handleMouseLeavee = (index) => {
    if (videoRefss.current[index]) {
      videoRefss.current[index].pause();
      // videoRefss.current.currentTime = 0; reset
    }
  };
  const handleAllProjectsClick = () => {
    setIsActive(true); // Add 'active' class to 'overview'
  };

  const handleOverviewClick = () => {
    setIsActive(false); // Remove 'active' class from 'overview'
  };

  // const listRef = useRef(null);
  // useEffect(() => {
  //   const list = listRef.current;
  //   const items = list.children;

  //   // Duplicate the list to create the loop effect
  //   for (let i = 0; i < items.length; i++) {
  //     list.appendChild(items[i].cloneNode(true));
  //   }

  //   // GSAP animation
  //   gsap.to(list, {
  //     x: `-${list.scrollWidth / 2}px`,
  //     ease: 'linear',
  //     duration: 20, // Adjust the duration for speed
  //     repeat: -1,
  //     modifiers: {
  //       x: gsap.utils.unitize((x) => parseFloat(x) % (list.scrollWidth / 2))
  //     }
  //   });
  // }, []);


  useEffect(() => {
    const projects = document.querySelector(".projects");
    const thumbnails = document.querySelectorAll(".thumbnail");
    let q = gsap.utils.selector(projects);
    const project = q(".project");

    const updateThumbnails = (index) => {
      thumbnails.forEach((thumb, i) => {
        if (i === index) {
          thumb.classList.add("active");
        } else {
          thumb.classList.remove("active");
        }
      });
    };

    let scroll = gsap.timeline({
      scrollTrigger: {
        trigger: projects,
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
        snap: 1 / (project.length - 1),
        start: "top top",
        end: "+=400000",
        // markers: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (project.length - 1));
          setCurrentIndex(index);
          updateThumbnails(index);
        },
      },
    });

    scroll.to(project, {
      yPercent: -100 * (project.length - 1),
      ease: "none",
      duration: 1,
    });

    return () => {
      if (scroll) scroll.kill();
    };
  }, []);

  return (
    <div className="workmana">
      <section className="experience">
        <h1 className="h1">Work</h1>
        <button className="all-projects" onClick={handleAllProjectsClick}>
          <svg
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <g>
              <path
                d="M0.296875 5.73439C0.494792 5.53972 0.729167 5.44238 1 5.44238C1.27083 5.44238 1.50521 5.53972 1.70313 5.73439C1.90104 5.92906 2 6.1596 2 6.42599C2 6.67189 1.90104 6.8973 1.70313 7.10222C1.50521 7.30714 1.27604 7.4096 1.01563 7.4096C0.744792 7.4096 0.505208 7.31226 0.296875 7.11759C0.0989582 6.92292 -5.55499e-08 6.69238 -4.37114e-08 6.42599C-3.18729e-08 6.1596 0.0989585 5.92906 0.296875 5.73439Z"
                fill="currentColor"
              ></path>
              <path
                d="M0.296875 11.2918C0.494792 11.0971 0.729167 10.9998 1 10.9998C1.27083 10.9998 1.50521 11.0971 1.70313 11.2918C1.90104 11.4864 2 11.717 2 11.9834C2 12.2293 1.90104 12.4547 1.70313 12.6596C1.50521 12.8645 1.27604 12.967 1.01563 12.967C0.744792 12.967 0.505208 12.8696 0.296875 12.675C0.0989582 12.4803 -5.55499e-08 12.2498 -4.37114e-08 11.9834C-3.18729e-08 11.717 0.0989585 11.4864 0.296875 11.2918Z"
                fill="currentColor"
              ></path>
              <path
                d="M0.296875 0.291764C0.494792 0.097092 0.729167 -0.000244198 1 -0.000244184C1.27083 -0.000244169 1.50521 0.097092 1.70313 0.291764C1.90104 0.486437 2 0.716969 2 0.983363C2 1.22926 1.90104 1.45467 1.70313 1.65959C1.50521 1.86451 1.27604 1.96697 1.01563 1.96697C0.744792 1.96697 0.505208 1.86963 0.296875 1.67496C0.0989582 1.48029 -5.55499e-08 1.24976 -4.37114e-08 0.983363C-3.18729e-08 0.716969 0.0989585 0.486436 0.296875 0.291764Z"
                fill="currentColor"
              ></path>
              <path
                d="M7.29688 5.73439C7.49479 5.53972 7.72917 5.44238 8 5.44238C8.27083 5.44238 8.50521 5.53972 8.70313 5.73439C8.90104 5.92906 9 6.1596 9 6.42599C9 6.67189 8.90104 6.8973 8.70313 7.10222C8.50521 7.30714 8.27604 7.4096 8.01563 7.4096C7.74479 7.4096 7.50521 7.31226 7.29687 7.11759C7.09896 6.92292 7 6.69238 7 6.42599C7 6.1596 7.09896 5.92906 7.29688 5.73439Z"
                fill="currentColor"
              ></path>
              <path
                d="M7.29688 11.2918C7.49479 11.0971 7.72917 10.9998 8 10.9998C8.27083 10.9998 8.50521 11.0971 8.70313 11.2918C8.90104 11.4864 9 11.717 9 11.9834C9 12.2293 8.90104 12.4547 8.70313 12.6596C8.50521 12.8645 8.27604 12.967 8.01563 12.967C7.74479 12.967 7.50521 12.8696 7.29687 12.675C7.09896 12.4803 7 12.2498 7 11.9834C7 11.717 7.09896 11.4864 7.29688 11.2918Z"
                fill="currentColor"
              ></path>
              <path
                d="M7.29688 0.291764C7.49479 0.097092 7.72917 -0.000244198 8 -0.000244184C8.27083 -0.000244169 8.50521 0.097092 8.70313 0.291764C8.90104 0.486437 9 0.716969 9 0.983363C9 1.22926 8.90104 1.45467 8.70313 1.65959C8.50521 1.86451 8.27604 1.96697 8.01563 1.96697C7.74479 1.96697 7.50521 1.86963 7.29687 1.67496C7.09896 1.48029 7 1.24976 7 0.983363C7 0.716969 7.09896 0.486436 7.29688 0.291764Z"
                fill="currentColor"
              ></path>
            </g>
            <g opacity="0">
              <path
                d="M1.66445 8.82257L1.66448 8.82254C0.895746 8.03957 0.5 7.07263 0.5 5.97561C0.5 4.8778 0.896847 3.91438 1.67758 3.1481C2.45358 2.38648 3.41664 2 4.50813 2C5.59836 2 6.55858 2.38585 7.32575 3.15138C8.10428 3.91712 8.5 4.87936 8.5 5.97561C8.5 7.07258 8.1043 8.03947 7.33564 8.82242M6.62195 3.86179C6.04743 3.28726 5.34282 3 4.50813 3C3.67344 3 2.96341 3.28726 2.37805 3.86179C1.79268 4.43631 1.5 5.14092 1.5 5.97561C1.5 6.8103 1.79268 7.52575 2.37805 8.12195C2.96341 8.70732 3.67344 9 4.50813 9C5.34282 9 6.04743 8.70732 6.62195 8.12195C7.20732 7.52575 7.5 6.8103 7.5 5.97561C7.5 5.14092 7.20732 4.43631 6.62195 3.86179ZM1.66445 8.82257L1.67094 8.82906ZM7.33552 8.82254C6.56926 9.60319 5.60588 10 4.50813 10C3.4107 10 2.44558 9.6037 1.67094 8.82906"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <span className="all-projects-label">All Projects</span>
        </button>
        <div className="indicator">
          <span className="current">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="total">10</span>
        </div>
        <div className="thumbnails">
          <div className="thumbnail">
            <img src="../images/workmana-01.webp" className="thumbnail-image" />
          </div>
          <div className="thumbnail">
            <img src="../images/workmana-02.webp" className="thumbnail-image" />
          </div>
          <div className="thumbnail">
            <img src="../images/workmana-03.webp" className="thumbnail-image" />
          </div>
          <div className="thumbnail">
            <img src="../images/workmana-04.webp" className="thumbnail-image" />
          </div>
          <div className="thumbnail">
            <img src="../images/workmana-05.webp" className="thumbnail-image" />
          </div>
          <div className="thumbnail">
            <img src="../images/workmana-06.webp" className="thumbnail-image" />
          </div>
          <div className="thumbnail">
            <img src="../images/workmana-07.webp" className="thumbnail-image" />
          </div>
          <div className="thumbnail">
            <img src="../images/workmana-08.webp" className="thumbnail-image" />
          </div>
          <div className="thumbnail">
            <img src="../images/workmana-09.webp" className="thumbnail-image" />
          </div>
          <div className="thumbnail">
            <img src="../images/workmana-10.webp" className="thumbnail-image" />
          </div>
        </div>
        <div className="projects">
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-011.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">100 Years</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Columbia</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Pictures</div>
                </div>
              </h2>
              <p className="subtitle">Celebrating a Century of Cinema</p>
            </div>
          </a>
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-012.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Pixelflakes</div>
                </div>
              </h2>
              <p className="subtitle">Architectural marketing agency</p>
            </div>
          </a>
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-013.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Studio D</div>
                </div>
              </h2>
              <p className="subtitle">Urban and Landscape Design</p>
            </div>
          </a>
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-014.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Plugged</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Live</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Shows</div>
                </div>
              </h2>
              <p className="subtitle">Custom Made Live Shows</p>
            </div>
          </a>
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-015.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Ali Ali</div>
                </div>
              </h2>
              <p className="subtitle">Unique director’s portfolio</p>
            </div>
          </a>
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-016.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Stock</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Dutch</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Design</div>
                </div>
              </h2>
              <p className="subtitle">Daring colours & patterns</p>
            </div>
          </a>
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-017.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">The </div>
                </div>
                <div className="title-mask">
                  <div className="title-line">St. Regis</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Venice</div>
                </div>
              </h2>
              <p className="subtitle">Elegant one-page solution</p>
            </div>
          </a>
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-018.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Rino & Pelle</div>
                </div>
              </h2>
              <p className="subtitle">Effortless chic lifestyle</p>
            </div>
          </a>
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-019.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Aebele</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Interiors</div>
                </div>
              </h2>
              <p className="subtitle">Luxurious design experience</p>
            </div>
          </a>
          <a href="/workdetail" className="project">
            <div className="project-wrap">
              <img
                src="../images/workmana-020.webp"
                className="project-image"
              />
            </div>
            <div className="heading">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Ottografie</div>
                </div>
              </h2>
              <p className="subtitle">Immersive photography portfolio</p>
            </div>
          </a>
        </div>
      </section>
      <section className={`overview ${isActive ? "active" : ""}`}>
        <div class="center"></div>
        <div class="indicator">
          <span class="explore">Scroll to explore</span>
          <span class="title">
            <span>The St. Regis Venice —</span> Elegant one-page solution
          </span>
        </div>
        <button class="close" onClick={handleOverviewClick}>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <line
              x1="13.788"
              y1="1.28816"
              x2="1.06011"
              y2="14.0161"
              stroke="currentColor"
              stroke-width="1.2"
            ></line>
            <line
              x1="1.06049"
              y1="1.43963"
              x2="13.7884"
              y2="14.1675"
              stroke="currentColor"
              stroke-width="1.2"
            ></line>
          </svg>
          <span class="close-label">Close</span>
        </button>
        <div class="projects">
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(0)}
            onMouseLeave={() => handleMouseLeavee(0)}
          >
            <div class="block">
              <img src="../images/workmana-01.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[0] = el)}
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">100 Years Columbia Pictures - </h2>
                <h3 class="subtitle">Celebrating a Century of Cinema</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(1)}
            onMouseLeave={() => handleMouseLeavee(1)}
          >
            <div class="block">
              <img src="../images/workmana-02.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[1] = el)}
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">Pixelflakes - </h2>
                <h3 class="subtitle">Architectural marketing agency</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(2)}
            onMouseLeave={() => handleMouseLeavee(2)}
          >
            <div class="block">
              <img src="../images/workmana-03.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[2] = el)}
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">Studio D - </h2>
                <h3 class="subtitle">Urban and Landscape Design</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(3)}
            onMouseLeave={() => handleMouseLeavee(3)}
          >
            <div class="block">
              <img src="../images/workmana-04.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[3] = el)}
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">Plugged Live Show - </h2>
                <h3 class="subtitle">Custom Made Live Shows</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(4)}
            onMouseLeave={() => handleMouseLeavee(4)}
          >
            <div class="block">
              <img src="../images/workmana-05.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[4] = el)}
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">Ali Ali - </h2>
                <h3 class="subtitle">Unique director’s portfolio</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(5)}
            onMouseLeave={() => handleMouseLeavee(5)}
          >
            <div class="block">
              <img src="../images/workmana-06.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[5] = el)}
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">Stock Dutch Design - </h2>
                <h3 class="subtitle">Daring colours &amp; patterns</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(6)}
            onMouseLeave={() => handleMouseLeavee(6)}
          >
            <div class="block">
              <img src="../images/workmana-07.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[6] = el)}
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">The St. Regis Venice - </h2>
                <h3 class="subtitle">Elegant one-page solution</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(7)}
            onMouseLeave={() => handleMouseLeavee(7)}
          >
            <div class="block">
              <img src="../images/workmana-08.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[7] = el)}
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">Rino &amp; Pelle - </h2>
                <h3 class="subtitle">Effortless chic lifestyle</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(8)}
            onMouseLeave={() => handleMouseLeavee(8)}
          >
            <div class="block">
              <img src="../images/workmana-09.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[8] = el)}
              >
                <source src="../images/workmana-09.webp" type="video/mp4" />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">Aebele Interiors - </h2>
                <h3 class="subtitle">Luxurious design experience</h3>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="project"
            onMouseEnter={() => handleMouseEnterr(9)}
            onMouseLeave={() => handleMouseLeavee(9)}
          >
            <div class="block">
              <img src="../images/workmana-10.webp" class="image" />
              <video
                playsInline
                loop
                muted
                class="video"
                ref={(el) => (videoRefss.current[9] = el)}
              >
                <source
                  src="../videos/columbia-pictures.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="meta">
              <div className="meta-wrap">
                <h2 class="title">Ottografie - </h2>
                <h3 class="subtitle">Immersive photography portfolio</h3>
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
export default WorkMana;
