"use client"
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";



const ResponsiveAnimation = () => {
    const desktopText = useRef(null);
    const tabletText = useRef(null);
    const mobileText = useRef(null)
    useEffect(() => {
        gsap.set("#Laptop", { autoAlpha: 0, fillOpacity: 0, strokeWidth: 0, transformOrigin: "center", scale: 0 });
        gsap.set("#IPAD", { autoAlpha: 0, fillOpacity: 0, strokeWidth: 0, transformOrigin: "center", scale: 0 });
        gsap.set("#iphone", { autoAlpha: 0, fillOpacity: 0, strokeWidth: 0, transformOrigin: "center", scale: 0 });

        gsap.set(desktopText.current, { autoAlpha: 0 });
        gsap.set(tabletText.current, { autoAlpha: 0 });
        gsap.set(mobileText.current, { autoAlpha: 0 });

        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width:1025px)",
            isTablet: "(min-width:769px) and (max-width:1024px)",
            isMobile: "(min-width:250px) and (max-width:768px)",
            isScrollDesktop: "(min-width:800px) and (prefers-reduced-motion: no-preference)",
            isScrollMobile: "(max-width:799px) and (prefers-reduced-motion: no-preference)"
        }, (context) => {
            const { isDesktop, isTablet, isMobile, isScrollDesktop, isScrollMobile } = context.conditions;

            if (isDesktop) {
                gsap.to("#Laptop", {
                    autoAlpha: 1,
                    fillOpacity: 1,
                    duration: 1.5,
                    strokeWidth: 2,
                    scale: 1,
                });
                gsap.to(desktopText.current, { autoAlpha: 1 });
            }

            if (isTablet) {
                gsap.to("#IPAD", {
                    autoAlpha: 1,
                    fillOpacity: 1,
                    duration: 0.5,
                    strokeWidth: 2,
                    scale: 1,
                });
                gsap.to(tabletText.current, { autoAlpha: 1 });
            }

            if (isMobile) {
                gsap.to("#iphone", {
                    autoAlpha: 1,
                    fillOpacity: 1,
                    duration: 0.5,
                    strokeWidth: 2,
                    scale: 1,
                });
                gsap.to(mobileText.current, { autoAlpha: 1 });
            }

            let target = isScrollDesktop ? ".desktop" : ".mobile";
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".gray",
                    scrub: 1,
                    start: "top top",
                    end: "200%",
                    pinSpacer: false,
                }
            });

            tl.to(target, { scale: 2, rotation: 360 })
                .to(target, { scale: 1 });
            gsap.to(target, {
                backgroundColor: "#2c7ad2",
                duration: 0.8,
                ease: "none",
                repeat: -1,
                yoyo: true
            });

            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        });

    }, []);

    return (
        <div className="max-w-[1140px] mx-auto px-3 overflow-hidden">
            <h3 className='text-white text-3xl text-center mt-12'>gsap.matchMedia()</h3>
            <div className="mx-auto w-fit mt-8 relative">
                <svg
                    className="max-w-full h-auto"
                    height="452px"
                    viewBox="0 0 720 452"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <g id="devices" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        {/* Laptop */}
                        <g
                            id="Laptop"
                            transform="translate(1.000000, 1.000000)"
                            stroke="#8492A5"
                        >
                            <path
                                d="M594,0 L98,0 C84.50415,0 73,11.0738184 73,24.7901127 L73,351.027995 L619,351.027985 L619,24.7901127 C618.999971,11.0728209 607.537479,0 594,0 Z"
                                id="bezel"
                                strokeWidth="2"
                                fill="#FEFEFE"
                            ></path>
                            <circle id="webcam" strokeWidth="2" cx="347" cy="19" r="4"></circle>
                            <g id="bottom" transform="translate(0.000000, 351.000000)">
                                <path
                                    d="M640.812,31.01 L51.288,31.01 C20.641,31.01 0,20.494 0,16.022 L0,2.428 C0,1.084 1.335,0 2.995,0 L689.104,0 C690.766,0 692.103,1.084 692.103,2.428 L692.103,16.557 C692.096,20.092 676.112,31.01 640.812,31.01 Z"
                                    id="Shape"
                                    strokeWidth="2"
                                    fill="#FDFDFD"
                                ></path>
                                <path d="M0.5,14.5 L690.242676,14.5" id="Line" strokeLinecap="square"></path>
                            </g>
                            <rect
                                id="screen"
                                fill="#FFFFFF"
                                x="95"
                                y="39"
                                width="501.073853"
                                height="292.009"
                            ></rect>
                            <path
                                d="M421,352 L421,355.087 C421,357.288 416.666719,357.952714 413.386719,357.952714 L278.815286,357.952714 C275.364286,357.952714 271,357.289 271,355.087 L271,352"
                                id="touchpad"
                                fill="#FFFFFF"
                            ></path>
                        </g>
                        {/* Tablet (iPad) */}
                        <g
                            id="IPAD"
                            className="tablet"
                            transform="translate(239.000000, 32.500000)"
                            stroke="#7E89A3"
                        >
                            <path
                                d="M202.986,317 L12.097,317 C5.462,317 0.083,311.623 0.083,304.99 L0.083,12.093 C0.083,5.46 5.461,0.083 12.097,0.083 L202.986,0.083 C209.622,0.083 215,5.46 215,12.093 L215,304.99 C215,311.623 209.622,317 202.986,317 Z"
                                id="bezel"
                                strokeWidth="2"
                                fill="#FDFDFD"
                            ></path>
                            <rect
                                id="screen"
                                fill="#FFFFFF"
                                x="17"
                                y="32"
                                width="181.999"
                                height="252.917"
                            ></rect>
                            <circle id="lock" cx="108.021" cy="300.021" r="8.021"></circle>
                            <circle id="camera" cx="106.99" cy="16.99" r="2.99"></circle>
                        </g>
                        {/* iPhone */}
                        <g
                            id="iphone"
                            transform="translate(281.5, 54.5)"
                            stroke="#7E89A3"
                        >
                            <path
                                d="M130,257.964 C130,266.797 122.809,273.956 113.938,273.956 L16.063,273.956 C7.192,273.956 0.001,266.797 0.001,257.964 L0.001,16.073 C0.001,7.24 7.192,0.081 16.063,0.081 L113.938,0.081 C122.809,0.081 130,7.24 130,16.073 L130,257.964 Z"
                                id="bezel"
                                strokeWidth="2"
                                fill="#FDFDFD"
                            ></path>
                            <rect
                                id="screen"
                                fill="#FFFFFF"
                                x="9"
                                y="36"
                                width="111.93"
                                height="199.084"
                            ></rect>
                            <path
                                d="M77,25.746 C77,26.381 76.561,26.893 76.02,26.893 L55.918,26.893 C55.376,26.893 54.938,26.38 54.938,25.746 L54.938,23.166 C54.938,22.531 55.377,22.019 55.918,22.019 L76.02,22.019 C76.561,22.019 77,22.532 77,23.166 L77,25.746 Z"
                                id="speaker"
                            ></path>
                            <circle id="camera" cx="66" cy="12" r="3"></circle>
                            <ellipse id="lock" cx="65.04" cy="254.001" rx="10.04" ry="10.001"></ellipse>
                        </g>
                    </g>
                </svg>
                <p ref={desktopText} className='text-white text-2xl text-center absolute bottom-0 right-[33%]'>This is Desktop screen</p>
                <p ref={tabletText} className='text-white text-2xl text-center absolute bottom-0 right-[33%]'>This is Tablet screen</p>
                <p ref={mobileText} className='text-white text-xl text-center'>This is Mobile screen</p>
            </div>
            <div className="gray">
                <div className="mt-20">
                    <div>
                        <p className="text-white text-3xl text-center">When the viewport is less than 800px, the "Mobile" &lt;div&gt; will animate. Otherwise, "Desktop" will.</p>
                    </div>
                    <div>
                        <div className="items-center flex max-md:flex-col  min-h-[100vh]">
                            <div className="w-full md:w-[50%] flex justify-center">
                                <div className="mobile w-[150px] h-[50px] md:w-[200px] md:h-[100px] bg-purple-400 rounded-lg flex justify-center items-center text-white">Mobile</div>
                            </div>
                            <div className="w-full md:w-[50%] flex justify-center max-md:mt-32">
                                <div className="desktop w-[150px] h-[50px] md:w-[200px] md:h-[100px] bg-green-400 rounded-lg flex justify-center items-center text-white">Desktop</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveAnimation