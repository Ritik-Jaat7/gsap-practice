"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const ScrollTask = () => {
  useEffect(() => {
    const paraSplit = new SplitText(".para-random", { type: "words" })
    gsap.set(".scroll-text", { autoAlpha: 0, x: 100 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lake-top",
        pin: true,
        start: "top top",
        end: "+=300%",
        scrub: true,
        markers: false,
      }
    });

    tl.from("#timeline-02 .svg-circle", {
      duration: 5.5,
      scale: 0.5,
      autoAlpha: 0,
      yPercent: 100,
      ease: "power2.out",
    })
      .from(paraSplit.words, {
        opacity: 0,
        y: -20,
        stagger: 0.5,
        duration: 1.5,
        autoAlpha: 0,
      })
      .to(".lake-top", {
        x: -500,
        duration: 2.5,
      })
      .to(".scroll-text", {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        duration:1.5,
      },);

    ScrollTrigger.create({
      trigger: ".lake-top",
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: ".scroll-text",
      pinSpacing: false
    });

  }, []);

  return (
    <div className='relative overflow-hidden'>
      {/* Lake section */}
      <div className='bg-[url(/assets/images/lake.webp)] bg-cover bg-center bg-no-repeat min-h-screen relative lake-top w-full z-10 overflow-hidden'>
        <div id="timeline-02" className="absolute top-[18%] xl:top-[10%] right-[8%]">
          <svg className="circle-bg align-right  max-xl:w-[900px] max-xl:h-[900px]" xmlns="http://www.w3.org/2000/svg" width="1320" height="1250" viewBox="0 0 1265 1250">
            <circle className="svg-circle blue-trans" cx="625" cy="625" r="625" fill="#0d76a5" />
          </svg>
        </div>
        <p className='max-w-[550px] text-white absolute top-[40%] right-[37%] para-random max-md:px-3 text-3xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae sint aliquid minus distinctio quisquam tempora assumenda, quas vero magni voluptates?
        </p>
      </div>

      {/* Pinned Text */}
      <div className="absolute top-[50%] right-[5%] max-w-[400px] scroll-text z-20">
        <p className='text-blue-500 text-lg font-medium max-sm:px-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae quo aliquam exercitationem quae delectus labore neque reiciendis, odio velit?
        </p>
      </div>
    </div>
  );
};

export default ScrollTask;
