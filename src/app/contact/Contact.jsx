import React, { useEffect, useRef } from "react";
import "./Contact.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useEffect(() => {
    gsap.to(".marquee .line", {
      xPercent: -100,
      repeat: -1,
      duration: 50,
      ease: "linear",
    });
  }, []);
  return (
    <div className="contact section-white">
      <div className="container">
        <img
          src="../images/contact.webp"
          alt="exo ape contact"
          className="image"
        />
        <h1 className="h1">Contact</h1>
        <h2 className="title">
          <div className="marquee">
            <div className="line">
              Get in touch · 保持联系 · Ponerse en contacto · Neem contact op
              ·&nbsp;
            </div>
            <div className="line">
              Get in touch · 保持联系 · Ponerse en contacto · Neem contact op
              ·&nbsp;
            </div>
          </div>
        </h2>
        <div className="left">
          <div className="body">
            <p>
              Ready for lift-off? Ping, tweet, message or poke — and we will get
              back as soon as possible.
            </p>
          </div>
          <ul className="contact-wrap">
            <li className="contact-item">
              <a href="mailto:hello@exoape.com" className="link is-dark">
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
                        viewBox="0 0 13 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-mail"
                      >
                        <path
                          d="M0 0V9.25H12.3333V0H0ZM11.0579 1.02778L6.16667 4.9914L1.27547 1.02778H11.0579ZM1.02778 8.22222V2.1496L6.16667 6.31415L11.3056 2.1496V8.22222H1.02778Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="label">
                    hello@exoape.com
                    <div className="border"></div>
                  </div>
                </div>
              </a>
            </li>
            <li className="contact-item">
              <a href="tel:+31 772 086 200" className="link is-dark">
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
                        viewBox="0 0 11 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-phone"
                      >
                        <path
                          d="M1.15583 1.88421L2.37259 0.89502L5.29788 4.2249L4.14162 5.2086C4.03501 5.88482 5.9585 7.99287 6.52033 7.89373C6.55685 7.85459 7.65249 6.92282 7.65249 6.92282L10.6164 10.2646C10.6164 10.2646 9.44232 11.2595 9.40383 11.2909C6.03241 13.9946 -2.09288 4.77971 1.15583 1.88421ZM2.24698 2.26554L1.81279 2.63516C-0.415283 4.62249 6.43236 12.3934 8.77845 10.5118L9.1911 10.1631L7.55337 8.31656L7.11724 8.6846C5.7734 9.82194 2.10545 5.71222 3.44956 4.48611L3.87685 4.12185L2.24698 2.26554Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="label">
                    +31 772 086 200
                    <div className="border"></div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <a
            target="_blank"
            href="https://goo.gl/maps/8z56qdL3F85VQmLf9"
            className="address"
          >
            Willem II Singel 8<br />
            6041 HS, Roermond
            <br />
            The Netherlands
          </a>
          <a
            href="https://goo.gl/maps/8z56qdL3F85VQmLf9"
            target="_blank"
            className="link maps is-dark"
            id="8e5d3e69-698c-4a19-a272-33df76191166"
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
                    viewBox="0 0 9 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-pin"
                  >
                    <path
                      d="M4.5 11C4.5 11 8.625 7.09088 8.625 4.125C8.625 3.03098 8.1904 1.98177 7.41682 1.20818C6.64323 0.434597 5.59402 0 4.5 0C3.40598 0 2.35677 0.434597 1.58318 1.20818C0.809597 1.98177 0.375 3.03098 0.375 4.125C0.375 7.09088 4.5 11 4.5 11ZM4.5 6.1875C3.95299 6.1875 3.42839 5.9702 3.04159 5.58341C2.6548 5.19661 2.4375 4.67201 2.4375 4.125C2.4375 3.57799 2.6548 3.05339 3.04159 2.66659C3.42839 2.2798 3.95299 2.0625 4.5 2.0625C5.04701 2.0625 5.57161 2.2798 5.95841 2.66659C6.3452 3.05339 6.5625 3.57799 6.5625 4.125C6.5625 4.67201 6.3452 5.19661 5.95841 5.58341C5.57161 5.9702 5.04701 6.1875 4.5 6.1875Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="label">
                View on maps
                <div className="border"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
