"use client";
import React, { useEffect, useRef, useState } from "react";
import "./NewsVideo.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function NewsVideo() {
  const [currentImage, setCurrentImage] = useState(0);
  const totalItems = 6; // Tổng số items (từ 0 đến 5)
  const [isActive, setIsActive] = useState(Array(totalItems).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % totalItems);
    }, 4000); // Chuyển đổi mỗi 4 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
  }, []);

  useEffect(() => {
    const newActiveState = isActive.map((_, index) =>
      index === currentImage ? true : false
    );
    setIsActive(newActiveState);
  }, [currentImage]);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? totalItems - 1 : prevImage - 1
    );
  };
  return (
    <div className="newsvideo">
      <div className="nav">
        {isActive.map((active, index) => (
          <button
            key={index}
            className={`button ${active ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          >
            <div className="indicator"></div>
          </button>
        ))}
      </div>
      <h1 className="h1">News</h1>
      <div className="scroll-to">Scroll for archive</div>
      <div className="prev" onClick={handlePrev}></div>
      <div className="next" onClick={handleNext}></div>
      <div className="items">
        <div className={`item ${currentImage === 0 ? "active" : ""}`}>
          <div className="publisher">
            <img
              src="../images/behance-logo.webp"
              alt="behance logo"
              className="avatar"
            />
            <div className="author">
              <span className="author-line">Behance</span>
            </div>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Best of Behance:</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Celebrating 100 Years</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">of Columbia Pictures</div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link">
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
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-external"
                    >
                      <path
                        d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="label">
                  Visit Behance
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="media">
            <img
              src="../images/columbia-pictures-lady.webp"
              alt="columbia pictures lady"
              className="image"
            />
          </div>
        </div>
        <div className={`item ${currentImage === 1 ? "active" : ""}`}>
          <div className="publisher">
            <img
              src="../images/avatar-awwwards.webp"
              alt="avatar awwwards"
              className="avatar"
            />
            <div className="author">
              <span className="author-line">Awwwards</span>
            </div>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Get a behind the</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">scenes look at our</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">work for Pixelflakes</div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link">
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
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-external"
                    >
                      <path
                        d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="label">
                  Visit Case Study
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="media">
            <img
              src="../images/pixelflakes-3D-architecture.webp"
              alt="pixelflakes 3D architecture"
              className="image"
            />
          </div>
        </div>
        <div className={`item ${currentImage === 2 ? "active" : ""}`}>
          <div className="publisher">
            <img
              src="../images/avatar-awwwards.webp"
              alt="avatar awwwards"
              className="avatar"
            />
            <div className="author">
              <span className="author-line">Awwwards</span>
            </div>
          </div>
          <div className="post">
            <a target="_blank" href="https://www.awwwards.com/">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">2 nominations for</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Exo Ape at the Awwwards</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Annual Awards 2023</div>
                </div>
              </h2>
            </a>
            <a
              href="https://www.awwwards.com/"
              target="_blank"
              className="link"
            >
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
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-external"
                    >
                      <path
                        d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="label">
                  Cast your vote
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="media">
            <img
              src="../images/exo-ape-awwwards-annual-2023.webp"
              alt="exo ape awwwards annual 2023"
              className="image"
            />
          </div>
        </div>
        <div className={`item ${currentImage === 3 ? "active" : ""}`}>
          <div className="publisher">
            <img
              src="../images/the-lovie-awards-logo.webp"
              alt="the lovie awards logo"
              className="avatar"
            />
            <div className="author">
              <span className="author-line">The Lovie Awards</span>
            </div>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Celebrating European</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">internet excellence:</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Exo Ape wins silver Lovie</div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link">
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
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-external"
                    >
                      <path
                        d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="label">
                  Winners Gallery
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="media">
            <img
              src="../images/the-lovie-awards-silver.webp"
              alt="the lovie awards silver"
              className="image"
            />
          </div>
        </div>
        <div className={`item ${currentImage === 4 ? "active" : ""}`}>
          <div className="publisher">
            <img
              src="../images/avatar-awwwards.webp"
              alt="avatar awwwards"
              loading="lazy"
              className="avatar"
            />
            <div className="author">
              <span className="author-line">Awwwards</span>
            </div>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Discover Exo Ape’s</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Site of the Month win</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">in this insights article</div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link">
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
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-external"
                    >
                      <path
                        d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="label">
                  Read Case Study
                  <div className="border"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="media">
            <video
              playsInline
              loop="loop"
              muted="muted"
              className="video"
              autoPlay
            >
              <source
                src="./videos/exo-ape-news-win-sotm.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className={`item ${currentImage === 5 ? "active" : ""}`}>
          <div className="publisher">
            <img
              src="../images/avatar-awwwards.webp"
              alt="avatar awwwards"
              className="avatar"
            />
            <div className="author">
              <span className="author-line">Awwwards</span>
            </div>
          </div>
          <div className="post">
            <a target="_blank" href="">
              <h2 className="title">
                <div className="title-mask">
                  <div className="title-line">Ali Ali wins</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Site of the Month!</div>
                </div>
                <div className="title-mask">
                  <div className="title-line">Dive into the case study</div>
                </div>
              </h2>
            </a>
            <a href="" target="_blank" className="link">
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
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-external"
                    >
                      <path
                        d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z"
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
          <div className="media">
            <video
              playsInline
              loop="loop"
              muted="muted"
              className="video"
              autoPlay
            >
              <source
                src="../videos/ali-ali-video-divider.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsVideo;
