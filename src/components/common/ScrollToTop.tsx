"use client";

import React from "react";

const ScrollToTop = () => {
  React.useEffect(() => {
    let progressPath: any = document.querySelector(".progress-wrap path");
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    const updateProgress = function () {
      let scroll = window.pageYOffset;
      let height = document.documentElement.scrollHeight - window.innerHeight;
      let progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress);
    let progressWrap: any = document.querySelector(".progress-wrap");
    let offset = 150;
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > offset) {
        progressWrap?.classList.add("active-progress");
      } else {
        progressWrap?.classList.remove("active-progress");
      }
    });
    progressWrap?.addEventListener("click", function (event: MouseEvent) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    });
  }, []);
  return (
    <div className="progress-wrap cursor-pointer">
      <svg
        className="progress-circle svg-content absolute z-10"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <svg
        className="chevron absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-6 w-6 rotate-180 fill-teal-500 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 445 512"
      >
        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
      </svg>
    </div>
  );
};

export default ScrollToTop;
