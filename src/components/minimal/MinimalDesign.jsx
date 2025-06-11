import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const texts = [
  { text: "Discover", className: "font-bold" },
  { text: "the best in", className: "italic font-normal" },
  { text: "minimal", className: "font-bold" },
  { text: "design", className: "font-bold" },
];
const MinimalDesign = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const lines = gsap.utils.toArray(".text-line");
    lines.forEach((el, i) => {
      gsap.to(el, {
        yPercent: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-7.5 min-h-screen">
      <div ref={containerRef} className="text-center">
        {texts.map((item, index) => (
          <div key={index} className="relative overflow-hidden">
            <h2
              className={`text-[170px] text-current tracking-[-0.04em] leading-[0.9] text-line ${item.className}`}
            >
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MinimalDesign;