"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Overview.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Overview() {
  const videoRefs = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(".overview .item").forEach((item, index) => {
      const video = item.querySelector(".media video");

      if (video) {
        videoRefs.current[index] = video;

        gsap.to(video, {
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            end: "bottom bottom",
            // markers: true,
            onEnter: () => {
              video.play();
            },
            onLeave: () => {
              video.pause();
              video.currentTime = 0; // Reset video to start if needed
            },
          },
        });
      }
    });
  }, []);
  return (
    <section className="overview section-whitesp">
      <div className="items">
        <div className="item">
          <a target="_blank" href="" className="media">
            <video
              playsInline
              loop="loop"
              muted="muted"
              ref={(el) => (videoRefs.current[0] = el)}
            >
              <source src="../videos/news-revolt.mp4" type="video/mp4" />
            </video>
          </a>
          <div className="meta">
            <span className="author">Awwwards</span>
            <time datetime="06.2.22" className="time">
              06.2.22
            </time>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Revolt — Changing </div>
                </div>
                <div className="title-mask">
                  <div className="title-line">the landscape </div>
                </div>
                <div className="title-mask">
                  <div className="title-line">of merchandising. </div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Holographik x Exo Ape.</div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link is-dark">
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
                  Read case study
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="item">
          <a target="_blank" href="" className="media">
            <img
              src="../images/rino-and-pelle.webp"
              alt="rino and pelle"
              type="image"
            />
          </a>
          <div className="meta">
            <span className="author">Communication Arts</span>
            <time datetime="06.2.22" className="time">
              06.2.22
            </time>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">
                    Get an in-depth look at Rino &amp; Pelle in CommArts
                    Webpicks.
                  </div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link is-dark">
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
                  View publication
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="item">
          <a target="_blank" href="" className="media">
            <img
              src="../images/color-wheel.webp"
              alt="color wheel"
              type="image"
            />
          </a>
          <div className="meta">
            <span className="author">Awwwards</span>
            <time datetime="04.2.22" className="time">
              04.2.22
            </time>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">
                    Glossarie.xyz wins mobile site of the week at Awwwards!
                  </div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link is-dark">
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
                  View publication
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="item">
          <a target="_blank" href="" aria-label="View case" className="media">
            <video
              playsInline
              loop="loop"
              muted="muted"
              ref={(el) => (videoRefs.current[1] = el)}
            >
              <source
                src="../videos/news-unxd-nft-design.mp4"
                type="video/mp4"
              />
            </video>
          </a>
          <div className="meta">
            <span className="author">Exo Ape</span>
            <time datetime="28.1.22" className="time">
              28.1.22
            </time>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Design for UNXD</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Digital Luxury &amp; </div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Culture NFT</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Marketplace</div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link is-dark">
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
                  View case
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="item">
          <a target="_blank" href="" aria-label="Read article" className="media">
            <img src="../images/news-01.webp" alt="news" type="image" />
          </a>
          <div className="meta">
            <span className="author">The FWA</span>
            <time datetime="02.9.20" className="time">
              02.9.20
            </time>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">QA article by The</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">FWA team — Read</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">all about our thought</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">process on the Æbele</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Interiors website.</div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link is-dark">
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
                  Read article
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="item">
          <a target="_blank" href="" className="media">
            <img src="../images/news-02.webp" alt="news" type="image" />
          </a>
          <div className="meta">
            <span className="author">CSSDA</span>
            <time datetime="01.7.20" className="time">
              01.7.20
            </time>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Ottografie won</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Photography</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Site of the Year at</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">CSS Design Awards!</div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link is-dark">
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
                  View publication
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Overview;
