"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

const Features = () => {
    const featRef = useRef(null)
    const FEATURES_DATA_LIST = [
        "Find out which visa you might want",
        "Receive a checklist with all necessary documents",
        "Write your CV / Motivation Letter with Herbert",
        "Help prepare for your visa interview",
        "Practice your German interactively with Herbert",
        "Let Herbert guide you through your fresh start "
    ]
    useEffect(() => {
        const ctx = gsap.context(() => {
            const headSlipt = new SplitText(".head", { type: "chars" })
            const paraSlipt = new SplitText(".feature-para", { type: "words" })
            gsap.from(headSlipt.chars, {
                scrollTrigger: '.head',
                y: 20,
                autoAlpha: 0,
                stagger: 0.05,
                duration: 0.6,
                ease: 'power2.out'
            })
            gsap.from(paraSlipt.words, {
                scrollTrigger: '.feature-para',
                autoAlpha: 0,
                stagger: 0.05,
                duration: 1.2,
                ease: 'power2.out'

            })
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".main",
                    pin: true,
                    start: "top top",
                    end: '+=210%',
                    scrub: 1,
                }
            })
            tl.from(".centerImg", {
                scale: 1.3,
                duration: 0.5,

            })
            tl.from(".left-content-box", {
                x: -1000,
                duration: 1,
                stagger: 0.5,
            }, "<")
            tl.from(".right-content-box", {
                x: 1000,
                duration: 1,
                stagger: 0.5,
            }, "<")
        })
        return () => ctx.revert()
    }, [])

    return (
        <div ref={featRef} className="pt-18 pb-32">
            <div className='max-w-[1140px] mx-auto px-4 main'>
                <h2 className='text-6xl fw-bold leading-[120%] text-white text-center head'>Main Features</h2>
                <p className='text-base leading-[150%] text-white max-w-[556px] text-center mx-auto mt-8 feature-para'>Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed.</p>
                <div className="flex justify-between mt-24">
                    <div className="flex flex-col justify-between">
                        {FEATURES_DATA_LIST.slice(0, 3).map((obj, i) => (
                            <div key={i} className="max-w-[285px] flex flex-col items-end left-content-box">
                                <div className="size-10 bg-white rounded-full text-light-blue flex justify-center items-center text-2xl">
                                    {2 * i + 1}
                                </div>
                                <p className='text-xl leading-100 font-medium text-white mt-4 text-end'>{obj}</p>
                            </div>
                        ))}
                    </div>
                    <Image
                        src="/assets/images/center-men.svg"
                        alt='center-men'
                        width={344}
                        height={460}
                        className='centerImg'
                    />
                    <div className="flex flex-col justify-between">
                        {FEATURES_DATA_LIST.slice(3, 6).map((obj, i) => (
                            <div key={i} className="max-w-[285px] right-content-box">
                                <div className="size-10 bg-white rounded-full text-light-blue flex justify-center items-center text-2xl">
                                    {2 * i + 2}
                                </div>
                                <p className='text-xl leading-100 font-medium text-white mt-4'>{obj}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features