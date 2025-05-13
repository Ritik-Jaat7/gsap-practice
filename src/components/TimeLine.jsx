"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TimeLine = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".heading", {
                opacity: 0,
                duration: 1.5,
                ease: "power1.out",
                y: -50,
            });

            tl.from(".box", {
                opacity: 0,
                y: 50,
                scale: 0.5,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);



    return (
        <div ref={containerRef} className="max-w-[950px] mx-auto">
            <h4 className='text-center text-3xl font-bold mt-5 heading'>FOR SALE</h4>
            <div className="grid grid-cols-3 gap-6 mt-10">

                <div
                    className="w-64 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg box"
                >
                </div>
                <div
                    className="w-64 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg box"
                >
                </div>
                <div
                    className="w-64 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg box"
                >
                </div>
                <div
                    className="w-64 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg box"
                >
                </div>
                <div
                    className="w-64 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg box"
                >
                </div>
                <div
                    className="w-64 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg box"
                >
                </div>
            </div>
        </div>
    );
};

export default TimeLine;
