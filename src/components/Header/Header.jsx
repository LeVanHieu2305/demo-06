"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Header = ({ className }) => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  const wordmarkRef = useRef(null);
  const brandmarkRef = useRef(null);
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // play reel
  const [isActive, setIsActive] = useState(false);
  const handleReelClick = () => {
    setIsActive(true); // Add 'active' class to 'overview'
  };

  useEffect(() => {
    if (isActive) {
      videoRef.current.play(); // Play the video when active
    } else {
      videoRef.current.pause(); // Pause the video when not active
    }
  }, [isActive]);
  
  const cursor = cursorRef.current;
  const handleMouseMove = (e) => {
    console.log('eeeee',e);
    
    targetX.current = e.clientX - 10;
    targetY.current = e.clientY - 10;

    currentX.current += (targetX.current - currentX.current) * 0.2;
    currentY.current += (targetY.current - currentY.current) * 0.2;
    cursor.style.top = `${currentY.current + window.scrollY}px`;
    cursor.style.left = `${currentX.current}px`;
  };

  // const animate = () => {
  //   currentX.current += (targetX.current - currentX.current) * 0.2;
  //   currentY.current += (targetY.current - currentY.current) * 0.2;
  //   cursor.style.top = `${currentY.current + window.scrollY}px`;
  //   cursor.style.left = `${currentX.current}px`;
  //   requestRef.current = requestAnimationFrame(animate);
  // };

  document.addEventListener("mousemove", handleMouseMove);
  // requestRef.current = requestAnimationFrame(animate);
  // useEffect(() => {

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     cancelAnimationFrame(requestRef.current);
  //   };
  // }, []);
  useEffect(() => {
    const wordmark = wordmarkRef.current;
    const brandmark = brandmarkRef.current;
    const nav = navRef.current;
    const button = buttonRef.current;

    // GSAP timeline for animations
    const tl = gsap.timeline({ paused: true });

    // Initial setup
    tl.set([brandmark, button], { autoAlpha: 0 }); // Hide brandmark and button initially

    // Scroll animation
    tl.to(wordmark, { autoAlpha: 0, duration: 0.2 })
      .to(brandmark, { autoAlpha: 1, duration: 0.2 }, "<")
      .to(nav, { autoAlpha: 0, duration: 0.2 }, "<")
      .to(button, { autoAlpha: 1, duration: 0.2, pointerEvents: "auto" }, "<");

    // Scroll listener
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        700;
      if (scrollPercentage > 10 && scrollPercentage <= 20) {
        // Show brandmark and button
        tl.play();
      } else if (scrollPercentage <= 15) {
        // Show wordmark and nav
        tl.reverse();
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      tl.kill(); // Kill timeline to clean up GSAP resources
    };
  }, []);

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {      
      videoRef.current.play();
      setIsPlaying(true);
      setIsActive(false); // Remove 'active' class from 'overview'
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  const handleRangeChange = (e) => {
    const value = e.target.value;
    videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
    setProgress(value);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <header className={className}>
      <div className="cursor" ref={cursorRef}>
        Scroll
      </div>
      <a href="/" className={`icon-button ${menuOpen ? "open" : ""}`}>
        <svg
          viewBox="0 0 64 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brandmark"
          ref={brandmarkRef}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58.1471 10.4536C58.1887 10.3412 58.2549 10.3412 58.2942 10.4536L59.5766 13.9755C59.749 14.3768 60.0632 14.6975 60.4569 14.8741L63.9191 16.1771C64.027 16.217 64.027 16.2844 63.9191 16.3268L60.4569 17.6298C60.0623 17.8052 59.7478 18.1263 59.5766 18.5284L58.2942 22.0403C58.2549 22.1527 58.1887 22.1527 58.1471 22.0403L56.8671 18.5184C56.6959 18.1163 56.3813 17.7952 55.9868 17.6198L52.5246 16.3168C52.4167 16.2744 52.4167 16.207 52.5246 16.1671L55.9868 14.8641C56.3805 14.6875 56.6947 14.3668 56.8671 13.9655L58.1471 10.4536ZM50.2785 7.40835C50.175 7.64899 49.9858 7.84076 49.7489 7.94501L47.6721 8.72877C47.6083 8.75373 47.6083 8.79367 47.6721 8.81863L49.7489 9.5999C49.9865 9.70432 50.176 9.89718 50.2785 10.1391L51.046 12.2532C51.0705 12.3181 51.1098 12.3181 51.1343 12.2532L51.9042 10.1391C52.0066 9.89792 52.195 9.70527 52.4314 9.5999L54.5083 8.81114C54.5745 8.78618 54.5745 8.74625 54.5083 8.72128L52.4314 7.93752C52.1957 7.83234 52.0075 7.64077 51.9042 7.40086L51.1343 5.28669C51.1098 5.21929 51.0705 5.21929 51.046 5.28669L50.2785 7.40835ZM54.2287 45.7206C53.8732 53.9751 46.4264 61.049 42.0177 64.531C41.0526 65.2897 39.8681 65.7022 38.6486 65.7042C38.0098 65.7045 37.3759 65.5913 36.7753 65.3697C24.5741 60.8768 9.38142 50.6778 1.74586 43.4167C1.1394 42.8432 0.668723 42.137 0.369285 41.3514C0.0698469 40.5657 -0.0505481 39.7212 0.0171823 38.8814C1.34617 21.908 15.5826 0 28.8847 0C36.5375 0 38.4476 2.57345 41.9221 9.93188C43.0623 12.3356 44.7296 14.3924 46.3357 16.3792C50.1388 21.0619 53.731 25.4874 48.2973 32.7834C52.4314 36.7896 54.4249 41.1428 54.2287 45.7206ZM45.681 33.1454C46.2842 32.6462 46.9365 31.4655 47.2528 30.5919C44.3373 32.0122 43.0328 30.0353 40.8775 30.4995C37.3589 31.2484 36.074 32.8933 31.224 31.7875C32.7197 32.8309 34.8063 34.0939 36.5129 34.6405C34.365 36.852 32.9943 39.7874 32.2195 43.6863C34.2399 43.9634 36.5816 43.3319 39.1954 42.7403C38.195 41.1004 37.7046 38.9088 37.5305 36.3803C38.5152 38.6814 40.0771 40.6785 42.0594 42.1712C45.1808 41.672 48.6185 41.647 52.2965 43.4192C50.509 36.2505 45.681 33.1454 45.681 33.1454ZM6.56406 23.0038C7.44842 24.7677 8.38509 26.5075 9.37406 28.2231C12.6892 20.8297 17.1666 13.4963 24.4858 7.60304C17.8213 14.9041 13.7852 23.0937 11.3455 31.5005C11.8817 32.3541 12.4309 33.2003 12.9932 34.039C15.2417 27.1523 18.5299 20.2182 24.4564 14.2551C19.1968 21.4563 16.3795 29.1916 15.0161 36.9694C15.5629 37.7182 16.1245 38.4845 16.6933 39.2333C17.9193 33.048 20.0281 26.7355 24.4294 20.9196C20.6877 27.8212 19.0767 34.8976 18.726 41.8192C20.7759 44.3436 22.9525 46.7798 25.2558 49.1277C27.1438 51.0497 29.0932 52.8852 31.1038 54.6341L31.2313 54.6815C28.1737 49.5645 25.116 43.3593 23.6301 37.853C25.4029 33.36 27.8549 28.5127 30.7679 26.9376C33.6809 25.3626 37.2314 28.9969 41.108 28.4153C43.1554 28.1083 45.5535 24.5764 48.1649 28.2356C52.5025 23.8675 41.775 16.1521 38.016 7.01896C36.3781 3.02524 33.0752 1.83212 28.1712 2.06176C16.9459 2.57096 7.36342 21.2341 6.56406 23.0038ZM38.2857 63.5351C24.5146 53.9191 13.1951 41.0981 5.26694 26.1364C4.56612 27.9933 3.96932 29.8892 3.47943 31.815C7.24082 38.18 10.5118 41.9415 15.9994 47.7724C10.5854 44.0058 6.38506 39.5129 2.7708 34.97C2.60896 35.8187 2.36866 37.1765 2.17005 38.9038C2.10988 39.4339 2.17333 39.971 2.35524 40.4715C2.53716 40.972 2.83242 41.4217 3.21706 41.7843C13.3626 51.3456 25.2867 58.7414 38.2857 63.5351V63.5351ZM52.3358 45.8354C47.2846 42.0539 38.6854 45.9652 31.2289 46.5643C37.1627 48.3889 43.6655 45.5159 49.3909 47.3131C48.5768 51.217 46.7648 55.2856 44.5703 59.4166C48.236 55.8047 51.2692 51.1695 52.3358 45.8354V45.8354ZM43.229 36.7896C42.1747 36.5145 41.1565 36.1123 40.1959 35.5915L39.2592 37.3388C39.9237 37.6782 42.8367 38.135 44.0627 38.0477C44.2383 38.0358 44.4026 37.9553 44.5212 37.823C45.3157 36.9419 45.9409 35.8262 46.5245 34.8003C45.5981 35.557 44.5954 36.2113 43.5331 36.7522C43.4395 36.8017 43.3315 36.815 43.229 36.7896Z"
            fill="currentColor"
            className="path"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58.1446 10.4537C58.1863 10.3413 58.2525 10.3413 58.2917 10.4537L59.5717 13.9756C59.7452 14.3764 60.0602 14.6962 60.4544 14.8717L63.9142 16.1772C64.0245 16.2171 64.0245 16.2845 63.9142 16.3269L60.4544 17.6299C60.0598 17.806 59.7447 18.1268 59.5717 18.5285L58.2917 22.0404C58.2525 22.1503 58.1863 22.1503 58.1446 22.0404L56.8647 18.5185C56.6941 18.1151 56.3782 17.7935 55.9819 17.6199L52.5221 16.3169C52.4118 16.2745 52.4118 16.2071 52.5221 16.1672L55.9819 14.8617C56.3775 14.6883 56.6932 14.3678 56.8647 13.9656L58.1446 10.4537ZM50.2761 7.40595C50.1727 7.64725 49.9835 7.83984 49.7465 7.9451L47.6696 8.72637C47.6034 8.75133 47.6034 8.79376 47.6696 8.81623L49.7465 9.6C49.9835 9.70526 50.1727 9.89785 50.2761 10.1392L51.0436 12.2508C51.0681 12.3182 51.1073 12.3182 51.1319 12.2508L51.8993 10.1392C52.0019 9.89728 52.1914 9.70442 52.429 9.6L54.5083 8.81124C54.5745 8.78877 54.5745 8.74634 54.5083 8.72138L52.4314 7.94011C52.1938 7.83569 52.0044 7.64283 51.9018 7.40096L51.1343 5.28928C51.1098 5.22188 51.0706 5.22188 51.046 5.28928L50.2761 7.40595ZM45.681 33.143C46.2818 32.6438 46.9365 31.4656 47.2503 30.592C44.3349 32.0122 43.0329 30.0354 40.8751 30.4996C37.3564 31.2485 36.0716 32.8909 31.2191 31.7851C32.7172 32.831 34.8015 34.094 36.5105 34.6406C34.3625 36.8521 32.9894 39.785 32.2146 43.6864C34.235 43.9635 36.5792 43.3295 39.193 42.7379C38.1901 41.098 37.6997 38.9089 37.5256 36.3779C38.5111 38.6799 40.0738 40.6778 42.057 42.1713C45.1784 41.6721 48.6161 41.6471 52.2941 43.4193C50.5041 36.2506 45.681 33.143 45.681 33.143ZM6.56407 23.0014C7.45006 24.7686 8.38673 26.5084 9.37408 28.2207C12.6892 20.8298 17.1666 13.4939 24.4858 7.60064C17.8213 14.9042 13.7852 23.0938 11.3455 31.4981C11.88 32.3542 12.4317 33.2004 12.9932 34.0391C15.2393 27.1524 18.5274 20.2183 24.4564 14.2552C19.1968 21.4564 16.3795 29.1917 15.0137 36.9695C15.563 37.7299 16.1228 38.4846 16.6933 39.2334C17.9193 33.0481 20.0281 26.7331 24.4294 20.9197C20.6877 27.8188 19.0767 34.8852 18.7261 41.8193C20.7759 44.3404 22.9525 46.7757 25.2558 49.1253C27.1438 51.0473 29.0932 52.8828 31.1038 54.6317C31.1455 54.6467 31.1872 54.6666 31.2313 54.6791C28.1737 49.5622 25.116 43.3594 23.6301 37.8531C25.4053 33.3601 27.8574 28.5103 30.7703 26.9377C33.6833 25.3652 37.2338 28.997 41.1105 28.4154C43.1579 28.1084 45.556 24.5739 48.1674 28.2357C52.505 23.8676 41.775 16.1522 38.0185 7.00408C36.3805 3.01036 33.0777 1.81973 28.1737 2.04937C16.9434 2.57105 7.36097 21.2342 6.56162 23.0014H6.56407ZM38.2833 63.5352C24.5124 53.9189 13.1931 41.098 5.26451 26.1365C4.56252 27.9933 3.96489 29.8892 3.47453 31.8151C7.23837 38.1801 10.5094 41.9391 15.9945 47.7725C10.5829 44.0059 6.38262 39.513 2.77081 34.9701C2.60897 35.8188 2.36867 37.1766 2.17006 38.9039C2.10949 39.434 2.17276 39.9712 2.35469 40.4718C2.53663 40.9723 2.83211 41.4221 3.21707 41.7844C13.3609 51.3454 25.2834 58.7412 38.2809 63.5352H38.2833ZM52.3358 45.833C47.2822 42.054 38.683 45.9653 31.2289 46.5644C37.1627 48.389 43.6655 45.516 49.3909 47.3132C48.5769 51.2146 46.7648 55.2832 44.5703 59.4142C48.2336 55.8023 51.2667 51.1696 52.3333 45.833H52.3358ZM43.229 36.7897C42.1753 36.5128 41.1573 36.1107 40.1959 35.5916L39.2592 37.3389C39.9237 37.6783 42.8367 38.1351 44.0627 38.0478C44.2383 38.0359 44.4026 37.9554 44.5212 37.8231C45.3157 36.942 45.9409 35.8263 46.5245 34.8004C45.6003 35.562 44.5992 36.2213 43.538 36.7673C43.441 36.8125 43.3313 36.8205 43.229 36.7897V36.7897Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="wordmark" ref={wordmarkRef}>
          <svg
            viewBox="0 0 95 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="wordmark-icon"
          >
            <path
              d="M7.70542 17.0085C10.8808 17.2469 13.8123 15.2096 14.8524 12.0415H11.0216C10.4531 13.3929 9.1325 14.2151 7.73401 14.0885C5.56111 14.1223 3.7654 12.3119 3.7031 10.0246H15.1383V9.42253C15.1383 4.45554 12.9656 0.391646 7.64824 0.391646C5.56968 0.342653 3.56563 1.20734 2.11735 2.77806C0.66907 4.34878 -0.0925972 6.48364 0.0152567 8.66995C-0.119195 10.8796 0.639738 13.0461 2.10466 14.6345C3.56958 16.223 5.60394 17.0852 7.70542 17.0085ZM11.4473 7.22456H3.69995V7.16435C3.85008 4.98837 5.57318 3.30544 7.64509 3.31117C8.64896 3.27405 9.62348 3.67141 10.3418 4.41075C11.0601 5.15009 11.4596 6.16692 11.4473 7.22456Z"
              fill="currentColor"
            ></path>
            <path
              d="M14.3124 16.5562L19.8584 8.45855L14.7412 0.932817H18.9436L21.8024 5.56867L24.6612 0.932817H28.8065L23.6892 8.45855L29.3496 16.5562H25.0615L21.7738 11.3183L18.6006 16.5562H14.3124Z"
              fill="currentColor"
            ></path>
            <path
              d="M30.5951 14.603C32.0722 16.1756 34.1067 17.0258 36.206 16.9477C38.3052 17.0258 40.3397 16.1756 41.8169 14.603C43.294 13.0304 44.0791 10.8789 43.9819 8.66942C44.0791 6.45993 43.294 4.30839 41.8169 2.73582C40.3397 1.16325 38.3052 0.313055 36.206 0.391113C34.1067 0.313055 32.0722 1.16325 30.5951 2.73582C29.118 4.30839 28.3329 6.45993 28.4301 8.66942C28.3329 10.8789 29.118 13.0304 30.5951 14.603ZM40.4945 8.66941C40.4945 11.2282 39.208 13.9374 36.2063 13.9374C33.2045 13.9374 31.9181 11.2282 31.9181 8.66941C31.9181 6.11066 33.1474 3.4014 36.2063 3.4014C39.2652 3.4014 40.4945 6.11066 40.4945 8.66941Z"
              fill="currentColor"
            ></path>
            <path
              d="M63.1673 0H62.1668L60.4801 1.50515C59.6645 0.647023 58.5445 0.188391 57.3926 0.240823C53.1044 0.240823 48.5589 5.77976 48.5589 12.282C48.5589 15.1117 49.731 16.7974 51.7322 16.7974C54.0764 16.7974 56.5063 13.5463 58.193 9.69314H58.3932C57.8349 11.3272 57.4607 13.0246 57.2782 14.7504C57.2782 15.9847 57.7928 16.7974 58.8791 16.7974C60.3085 16.7974 61.595 15.8943 63.3103 13.155L62.7099 12.5228C61.5092 14.1785 60.623 14.7805 60.0798 14.7805C59.8225 14.7805 59.6796 14.63 59.6796 14.329C59.7259 13.88 59.8121 13.4366 59.9369 13.0045L62.1668 3.37153L63.1673 0ZM57.479 1.50531C58.4163 1.46304 59.2939 1.98942 59.7374 2.85995C57.9364 10.2954 54.8203 14.7807 52.7048 14.7807C51.7042 14.7807 51.1611 13.697 51.1611 12.0413C51.1897 7.16466 53.8197 1.50531 57.479 1.50531Z"
              fill="currentColor"
            ></path>
            <path
              d="M76.1121 0.240769C73.5964 0.240769 70.7948 3.46178 68.3076 8.63949L68.0503 8.66959L69.4797 4.51539L70.4231 0.240769H69.7084L65.4202 1.26427L65.2487 1.89643L67.45 2.73931L63.562 19.6572C63.2475 21.0419 62.2184 21.1924 60.8747 21.373L60.7461 21.9299H67.8931L68.0217 21.373C66.9068 21.2225 66.0778 21.072 66.0778 20.1689C66.0804 19.8542 66.1188 19.5409 66.1921 19.2357L67.0211 15.4729C67.6495 16.3276 68.6249 16.8188 69.6512 16.7974C74.0538 16.7974 79.2568 11.0176 79.2568 4.51539C79.2568 2.01684 77.9989 0.240769 76.1121 0.240769ZM68.0377 14.7682C67.6366 14.3059 67.4358 13.6889 67.4835 13.0647C69.1987 6.95381 73.201 2.31796 74.9449 2.31796C75.9455 2.31796 76.5458 3.10064 76.5458 4.7563C76.5172 9.66308 73.2296 15.503 69.599 15.503C69.0043 15.4967 68.4388 15.2306 68.0377 14.7682Z"
              fill="currentColor"
            ></path>
            <path
              d="M82.6967 10.7163V9.93362C86.8705 8.75961 91.9878 7.19425 91.9878 3.5518C92.0462 2.61809 91.705 1.70579 91.0576 1.06484C90.4102 0.423885 89.5244 0.121481 88.643 0.240476C84.0117 0.240476 80.1523 5.5988 80.1523 10.7765C80.1523 13.7868 81.496 16.7971 84.8408 16.7971C87.1278 16.7971 88.9003 15.8338 91.0158 12.8235L90.3011 12.2214C89.2621 13.8114 87.6086 14.8363 85.7842 15.021C83.8688 15.021 82.6967 13.3353 82.6967 10.7163ZM89.5878 3.79273C89.5878 6.17087 87.3008 7.5255 82.8125 9.03065C83.3271 4.87644 85.5855 1.74573 87.8726 1.74573C88.3685 1.74602 88.8404 1.97044 89.1685 2.362C89.4966 2.75355 89.6493 3.27457 89.5878 3.79273Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </a>
      <button
        type="button"
        ref={buttonRef}
        aria-label="open menu"
        className={`menu-button ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="label">
          <div className="label-item">Menu</div>
          <div className="label-item">Close</div>
        </div>
        <div className="icon">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-close"
          >
            <line
              x1="13.788"
              y1="1.28816"
              x2="1.06011"
              y2="14.0161"
              stroke="currentColor"
              strokeWidth="1.2"
            ></line>
            <line
              x1="1.06049"
              y1="1.43963"
              x2="13.7884"
              y2="14.1675"
              stroke="currentColor"
              strokeWidth="1.2"
            ></line>
          </svg>
          <svg
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-burger"
          >
            <line
              x1="18"
              y1="0.6"
              y2="0.6"
              stroke="currentColor"
              strokeWidth="1.2"
            ></line>
            <line
              x1="18"
              y1="5.7167"
              y2="5.7167"
              stroke="currentColor"
              strokeWidth="1.2"
            ></line>
            <line
              x1="18"
              y1="10.8334"
              y2="10.8334"
              stroke="currentColor"
              strokeWidth="1.2"
            ></line>
          </svg>
        </div>
      </button>
      <nav className="nav" ref={navRef}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/work" className="nav-link">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a href="/studio" className="nav-link">
              Studio
            </a>
          </li>
          <li className="nav-item">
            <a href="/news" className="nav-link">
              News
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="current">
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
        </div>
      </nav>

      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="wrapper">
          <div className="container">
            <ul className="images">
              <li
                className={`image-item ${currentImage === 0 ? "active" : ""}`}
              >
                <img
                  src="../images/work.webp"
                  alt="exo ape contact 2"
                  className="image"
                />
              </li>
              <li
                className={`image-item ${currentImage === 1 ? "active" : ""}`}
              >
                <img
                  src="../images/studio.webp"
                  alt="ronald gijezen exo ape digital designer"
                  className="image"
                />
              </li>
              <li
                className={`image-item ${currentImage === 2 ? "active" : ""}`}
              >
                <img
                  src="../images/news.webp"
                  alt="awwwards exo ape news"
                  className="image"
                />
              </li>
              <li
                className={`image-item ${currentImage === 3 ? "active" : ""}`}
              >
                <img
                  src="../images/contact.webp"
                  alt="rob smittenaar exo ape contact"
                  className="image"
                />
              </li>
            </ul>
            <ul className="main">
              <li className="main-link">
                <a
                  href="/work"
                  className="main-line"
                  onMouseEnter={() => setCurrentImage(0)}
                >
                  Work
                </a>
              </li>
              <li className="main-link">
                <a
                  href="/studio"
                  className="main-line"
                  onMouseEnter={() => setCurrentImage(1)}
                >
                  Studio
                </a>
              </li>
              <li className="main-link">
                <a
                  href="/news"
                  className="main-line"
                  onMouseEnter={() => setCurrentImage(2)}
                >
                  News
                </a>
              </li>
              <li className="main-link">
                <a
                  href="/contact"
                  className="main-line"
                  onMouseEnter={() => setCurrentImage(3)}
                >
                  Contact
                </a>
              </li>
              <div className="current">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-star"
                >
                  <path
                    d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </ul>
            <a href="mailto:info@exoape.com" target="_blank" className="link">
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
                  Now Hiring!
                  <div className="border"></div>
                </div>
              </div>
            </a>
            <ul className="social">
              <li className="social-link">
                <a
                  href="https://www.behance.net/exoape"
                  target="_blank"
                  rel="noreferrer"
                  className="link-item"
                >
                  Behance
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://dribbble.com/ExoApe"
                  target="_blank"
                  rel="noreferrer"
                  className="link-item"
                >
                  Dribbble
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://twitter.com/exoape"
                  target="_blank"
                  rel="noreferrer"
                  className="link-item"
                >
                  Twitter
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://www.instagram.com/exoape/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="link-item"
                >
                  Instagram
                </a>
              </li>
            </ul>
            <ul className="sub">
              <li className="sub-link">
                <button
                  aria-label="open menu"
                  className="link-item is-reel"
                  onClick={handleReelClick}
                >
                  Play Reel
                </button>
              </li>
              <li className="sub-link">
                <a href="/story" className="link-item">
                  Our Story
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`video-player ${isActive ? "active" : ""}`}>
        <video
          playsInline
          autoPlay
          loop
          ref={videoRef}
          className="video"
          onClick={handleVideoClick}
        >
          <source src="../videos/play-reels.mp4" type="video/mp4" />
        </video>
        <div className="gradient"></div>
        <div className="controls">
          <button className="pause" onClick={handleVideoClick}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <div className="timeline">
            <input
              min="0"
              step="0.5"
              type="range"
              className="range"
              max="100"
              value={progress}
              onChange={handleRangeChange}
            />
            <progress
              max="100"
              className="progress"
              value={progress}
            ></progress>
          </div>
          <button
            className="mute"
            onClick={() => (videoRef.current.muted = !videoRef.current.muted)}
          >
            {videoRef.current && videoRef.current.muted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    </header>
  );
};
