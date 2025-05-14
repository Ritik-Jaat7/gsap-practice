"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const ParaEffect = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".top-bar",
                start: "top top",
                end: "+=300%", // long enough to show all 3 images
                pin: true,
                scrub: true,
                markers: false,
            },
        })
        tl.fromTo(".second-layer", { y: "100%" }, { y: "0%" })
        tl.fromTo(".third-layer", { y: "100%" }, { y: "0%" })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className="w-full">
            <div className="top-bar relative h-screen overflow-hidden">
                <div className="layer absolute top-0 left-0 w-full h-full bg-[url(/assets/images/store-1.webp)] bg-cover bg-center z-10" >
                    <h2 className="text-6xl fw-bold leading-[120%] text-white text-center pt-5">Visit Our Store</h2>
                </div>
                <div className="second-layer layer absolute top-0 left-0 w-full h-full bg-[url(/assets/images/store-2.webp)] bg-cover bg-center z-20" >
                </div>
                <div className="third-layer layer absolute top-0 left-0 w-full h-full bg-[url(/assets/images/store-3.webp)] bg-cover bg-center z-30" >
                </div>
            </div>
        </div>
    )
}

export default ParaEffect
