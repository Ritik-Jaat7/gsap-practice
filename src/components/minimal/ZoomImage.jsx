"use client"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const ZoomImage = ({ bgColorRef }) => {
  useEffect(() => {
  ScrollTrigger.matchMedia({

    // Desktop and up
    "(min-width: 768px)": function () {
      const circleHeight = window.innerHeight;
      const circleWidth = window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".zoomImageContainer",
          start: "top 8.5%",
          end: "bottom top",
          scrub: true,
          markers: false,
          pin: true,
        },
      });

      tl.to("body", { backgroundColor: "#E8E2DA", duration: 1 })
        .to(bgColorRef.current, { fill: "#111111", duration: 1 }, "<")
        .fromTo(".image-wrapper",
          {
            width: `${circleHeight - 200}px`,
            height: `${circleHeight - 200}px`,
            borderRadius: "9999px",
          },
          {
            width: `${circleWidth - 48}px`,
            height: `${circleHeight - 69}px`,
            borderRadius: "0px",
            duration: 1,
          },
          "<"
        )
        .to(".nav-item", { color: "#111111", duration: 1 }, "<")
        .to(".navBorder", {
          borderColor: "#111111",
          backgroundColor: "#E8E2DA",
          duration: 1,
        }, "<");
    },

    // Small screens (mobile)
    "(max-width: 767px)": function () {
      const mobileHeight = window.innerHeight;
      const mobileWidth = window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".zoomImageContainer",
          start: "top 8.5%",
          end: "bottom top",
          scrub: true,
          markers: false,
          pin: true,
        },
      });

      tl.to("body", { backgroundColor: "#E8E2DA", duration: 1 })
        .to(bgColorRef.current, { fill: "#111111", duration: 1 }, "<")
        .fromTo(".image-wrapper",
          {
            width: `${mobileWidth - 64}px`,
            height: `${mobileWidth - 64}px`,
            borderRadius: "9999px",
          },
          {
            width: `${mobileWidth - 32}px`,
            height: `${mobileHeight * 0.6}px`,
            borderRadius: "0px",
            duration: 1,
          },
          "<"
        )
        .to(".nav-item", { color: "#111111", duration: 1 }, "<")
        .to(".navBorder", {
          borderColor: "#111111",
          backgroundColor: "#E8E2DA",
          duration: 1,
        }, "<");
    }

  });
  return () => ScrollTrigger.clearMatchMedia();
}, []);

  return (
    <div className="px-2.5 lg:px-7 relative z-10">
      <div className='flex justify-center zoomImageContainer'>
        <div className="flex justify-center items-center pt-[69px] w-full">
          <div className="rounded-full overflow-hidden bg-no-repeat bg-center image-wrapper bg-[url('/assets/images/white-sofa.png')]"></div>
        </div>
      </div>
    </div>
  )
}

export default ZoomImage
