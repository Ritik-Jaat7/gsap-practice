'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Discover = () => {
    useEffect(() => {
        const texts = gsap.utils.toArray(".discover-text")

        texts.forEach((text, i) => {
            gsap.to(text, {
                yPercent: 100,
                ease: "power1.out",
                duration: 1.5,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: text,
                    start: "top 20%",
                    end: "top 10%",
                    scrub: true,
                    markers: false,
                }
            })
        })
    }, [])

    return (
        <div className='min-h-screen  discoverContainer pb-20'>
            <div className="pt-32 space-y-4">
                {["Discover", "the best in", "minimal", "design"].map((line, index) => (
                    <div
                        key={index}
                        className="overflow-hidden"
                    >
                        <h2 className={`text-[173px] font-semibold tracking-[-7px] text-white text-center  ${index === 1 ? "!italic !font-medium" : ""} ${index === 3 ? "!leading-[130%]" : "leading-[90%]"} discover-text`}>
                            {line}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Discover
