import React, { useEffect } from 'react'
import gsap from "gsap"
const ChainTask = () => {
    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(".green-circle", {
            x: 500,
            rotate: 360,
            duration: 1,
            delay: 1,
            stagger: 0.8,
            borderRadius: "150px"
        })
            .to(".green-circle2", {
                x: 500,
                rotate: 360,
                duration: 1,
                delay: 0.1,
                stagger: 0.8,
                borderRadius: "150px",
                backgroundColor: "#01245E"
            })
            .to(".green-circle3", {
                x: 500,
                rotate: 360,
                duration: 1,
                delay: 0.1,
                stagger: 0.8,
                borderRadius: "150px",
                backgroundColor: "#B60102"
            })
            .to(".green-circle4", {
                x: 500,
                rotate: 360,
                duration: 1,
                delay: 0.1,
                stagger: 0.8,
                borderRadius: "150px",
                backgroundColor: "#2C252C"
            })
            .to(".green-circle5", {
                x: 500,
                rotate: 360,
                duration: 1,
                delay: 0.1,
                stagger: 0.8,
                borderRadius: "150px",
                backgroundColor: "#AD02FF"
            })
    }, [])

    return (
        <div className='max-w-[1140px] mx-auto px-4'>
            <h2 className='text-4xl text-center leading-[135%] mt-8'>Chain Task with to()</h2>
            <div className="w-full p-5 bg-white mt-5 space-y-4">
                <div className="size-16 bg-green-500 green-circle"></div>
                <div className="size-16 bg-green-500 green-circle2"></div>
                <div className="size-16 bg-green-500 green-circle3"></div>
                <div className="size-16 bg-green-500 green-circle4"></div>
                <div className="size-16 bg-green-500 green-circle5"></div>
            </div>
        </div>
    )
}

export default ChainTask