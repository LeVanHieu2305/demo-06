import React, { useEffect, useRef } from "react";
import "./FeaturedArticles.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function FeaturedArticles() {
  useEffect(() => {
    const mediaData = [
      { selector: ".media1", x: "0", y: "384px" },
      { selector: ".media2", x: "-192px", y: "384px" },
      { selector: ".media3", x: "192px", y: "384px" },
      { selector: ".media4", x: "-384px", y: "384px" },
      { selector: ".media5", x: "384px", y: "384px" },
      // Thêm các media khác với các giá trị x, y tương ứng
    ];

    mediaData.forEach((media) => {
      gsap.to(media.selector, {
        scrollTrigger: {
          trigger: ".featured-articles",
          start: "top top",
          end: "bottom top",
          scrub: true,
          //   markers: true,
        },
        x: media.x,
        y: media.y,
        duration: 1,
      });
    });

    gsap.to(".title-line-w", {
      scrollTrigger: {
        trigger: ".text-wrap",
        start: "top 70%",
        //   markers: true,
      },
      visibility: "inherit",
      x: 0, // translateX
      y: 0, // translateY
      rotation: 0, // rotate
      scale: 1, // scale
      opacity: 1,
      duration: 0.5, // animation duration in seconds
    });

    // gsap.to(".featured-articles", {
    //   yPercent: -30,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".featured-articles",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
  }, []);
  return (
    <section className="featured-articles dark section-white">
      <ul className="media-wrapper">
        <li className="media media1">
          <img
            src="../images/awwwards.webp"
            alt="awwwards annual nominee"
            type="image"
          />
        </li>
        <li className="media media2">
          <video playsInline loop="loop" muted="muted" autoPlay>
            <source
              src="../videos/home-news-diesel-be-a-follower.mp4"
              type="video/mp4"
            />
          </video>
        </li>
        <li className="media media3">
          <img
            src="../images/ottografie.webp"
            alt="ottografie site of the year"
            type="image"
          />
        </li>
        <li className="media media4">
          <img
            src="../images/fwaawwward.webp"
            alt="fwaawwward aebele interiors"
            type="image"
          />
        </li>
        <li className="media media5">
          <video playsInline loop="loop" muted="muted" autoPlay>
            <source src="../videos/news-rino-pelle.mp4" type="video/mp4" />
          </video>
        </li>
      </ul>

      <div className="text-wrap">
        <h2 className="labell">
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
          <div className="text">In the media</div>
        </h2>
        <h1 className="title">
          <div className="title-mask">
            <div className="title-line-w">Spread</div>
          </div>
          <div className="title-mask">
            <div className="title-line-w">the News</div>
          </div>
        </h1>
        <div className="body">
          <p>
            Find out more about our work on these leading design and technology
            platforms.
          </p>
        </div>
        <a href="/news" className="link is-dark">
          <div className="wrap">
            <div className="circle">
              <div className="circle-fill"></div>
              <svg
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                className="circle-outline"
              >
                <circle cx="25" cy="25" r="23"></circle>
              </svg>
              <div className="circle-icon">
                <svg
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-arrow"
                >
                  <path
                    d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="label">
              Browse all news
              <div className="border"></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
export default FeaturedArticles;
