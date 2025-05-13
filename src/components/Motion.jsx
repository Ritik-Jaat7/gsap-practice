'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import DrawAnimation from './DrawAnimation';
import ChainTask from './ChainTask';

gsap.registerPlugin(SplitText);

const Motion = () => {
    useEffect(() => {
        const split = new SplitText("#para1", { type: 'chars' });

        gsap.from(split.chars, {
            y: 20,
            autoAlpha: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: 'power2.out'
        });

    }, []);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.6 } });
        tl.set("#para2", {
            scaleY: 0,
            scaleX: 0.5,
        })
        tl.to("#para2", {
            scaleY: 0.5,
            scaleX: 0.5
        })
        tl.to("#para2", {
            scaleY: 1,
            scaleX: 1,
        })

    }, []);

    return (
        <div className='max-w-[1140px] mx-auto px-4 pb-5'>
            <div className="mt-10">
                <h2 className='text-4xl text-center leading-[135%]'>
                    Text Animation
                </h2>
                <div className="w-full p-5 bg-white mt-5">
                    <p id='para1' className='text-[40px] leading-[150%] font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <h1 className='text-4xl text-center leading-[135%] mt-8'>
                    Text Animation Second
                </h1>
                <div className="w-full p-5 bg-white mt-5">
                    <p id='para2' className='text-[40px] leading-[150%] font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <DrawAnimation />
                <ChainTask />
            </div>
        </div>
    );
};

export default Motion;
