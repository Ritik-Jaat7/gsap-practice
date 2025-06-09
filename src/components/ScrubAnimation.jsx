"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const ScrubAnimation = () => {
    useEffect(() => {
        gsap.from("#line", {
            scrollTrigger: {
                trigger: "#line",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            width: 0,
            ease: "power2.inOut"

        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                anticipatePin: 1,
            }
        });

        tl.from("#line2", {
            width: 0,
            ease: "power2.inOut"
        });
    }, [])

    return (
        <div>
            <div className="min-h-screen bg-cyan-600 flex flex-col justify-center">
                <div className="max-w-[1140px] mx-auto">
                    <div id='line' className="w-[750px] h-[3px] bg-white"></div>
                    <p className='text-white w-[750px] mx-auto mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum velit, alias incidunt earum sapiente blanditiis neque laboriosam ipsum commodi! Dolores error quas illo molestiae pariatur ipsa dolorum facilis neque.</p>
                </div>
            </div>
            <div className="min-h-screen bg-emerald-700 flex flex-col justify-center section2">
                <div className="max-w-[1140px] mx-auto">
                    <div id='line2' className="w-[750px] h-[3px] bg-white"></div>
                    <p className='text-white w-[750px] mx-auto mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum velit, alias incidunt earum sapiente blanditiis neque laboriosam ipsum commodi! Dolores error quas illo molestiae pariatur ipsa dolorum facilis neque.</p>
                </div>
            </div>
        </div>
    )
}

export default ScrubAnimation