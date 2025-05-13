"use client"
import Image from 'next/image'
import gsap from "gsap"
import { useEffect } from 'react'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const CommonAnimation = ({ heading, para, src }) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const headingSlipt = new SplitText(".common-heading", { type: "chars" })
            const commonParaSlipt = new SplitText(".common-para", { type: "words" })
            const tl = gsap.timeline()
            tl.from(headingSlipt.chars, {
                scrollTrigger:".common-heading",
                x: -20,
                autoAlpha: 0,
                duration: 0.3,
                stagger: 0.1,
            })
                .from(commonParaSlipt.words, {
                    scrollTrigger: ".common-para",
                    x: 20,
                    autoAlpha: 0,
                    stagger: 0.05,
                    duration: 1,
                    ease: "power1.inOut",
                })
                .from(".list-circle", {
                    scrollTrigger: ".list-circle",
                    y: -20,
                    autoAlpha: 0,
                    duration: 0.5,
                    stagger: 0.4,
                    ease: "power2.inOut",
                })
            return () => ctx.revert
        })
    }, [])

    return (
        <div className="py-18">
            <div className='max-w-[1140px] mx-auto px-4 '>
                <div className="flex justify-between items-center">
                    <div className="max-w-[470px]">
                        <h2 className='text-6xl fw-bold leading-[120%] text-white common-heading'>{heading}</h2>
                        <p className='text-base leading-150 text-white mt-5 common-para'>{para}</p>
                        <ul className='list-disc mt-4 ml-6'>
                            <li className='text-white list-circle'>In-depth insights into visa application assessment</li>
                            <li className='text-white list-circle'>Clarification on complex cases and exceptions</li>
                            <li className='text-white list-circle'>Nuanced interpretations of immigration laws and regulations</li>
                        </ul>
                    </div>
                    <div className="">
                        <Image
                            src={src}
                            width="392"
                            height="457"
                            alt='hello'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonAnimation