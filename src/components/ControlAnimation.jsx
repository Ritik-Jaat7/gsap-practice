"use client"
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"

const ControlAnimation = () => {
    const animationRef = useRef(null);

    useEffect(() => {
        // Create a GSAP timeline and store it in the ref
        animationRef.current = gsap.timeline()
            .to("#blue-box", {
                x: 800,
                duration: 5,
                delay: 0.8,
                yoyo: true,
                repeat: -1,
            });
    }, []);

    const handlePlay = () => {
        animationRef.current.play();
    };

    const handlePause = () => {
        animationRef.current.pause();
    };

    const handleReverse = () => {
        animationRef.current.reverse();
    };

    const handleRestart = () => {
        animationRef.current.restart();
    };

    return (
        <div className='max-w-[1140px] mx-auto px-4'>
            <h2 className='text-4xl text-center leading-[135%] mt-8'>Control Animation</h2>
            <div className="w-full p-5 bg-white mt-5 flex ">
                <div id='blue-box' className="w-24 h-24 bg-cyan-600"></div>
            </div>
            <div className="flex justify-center mt-5 gap-5">
                <button onClick={handlePlay} className='py-2.5 px-7 rounded-lg bg-green-500 text-white cursor-pointer'>Play</button>
                <button onClick={handlePause} className='py-2.5 px-7 rounded-lg bg-gray-500 text-white cursor-pointer'>Pause</button>
                <button onClick={handleReverse} className='py-2.5 px-7 rounded-lg bg-yellow-500 text-white cursor-pointer'>Reverse</button>
                <button onClick={handleRestart} className='py-2.5 px-7 rounded-lg bg-orange-300 text-white cursor-pointer'>Restart</button>
            </div>
        </div>
    )
}

export default ControlAnimation;