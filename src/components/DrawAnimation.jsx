'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap';

const DrawAnimation = () => {
    useEffect(() => {
        const paths = document.querySelectorAll('.path1, .path2');

        paths.forEach(path => {
            const length = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length
            });

            gsap.to(path, {
                strokeDashoffset: 0,
                duration: 5,
                ease: 'power2.out',
                delay: 0.5,
                stagger: 1,
            });
        });
    }, []);
    return (
        <div>
            <h1 className='text-4xl text-center leading-[135%] mt-8'>
                SVG Draw Animation
            </h1>
            <div className="w-full p-5 bg-white mt-5 flex justify-center">
                <svg width="168" height="147" viewBox="0 0 168 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='path1' d="M4 55.8749L43.9167 4M43.9167 4L87.1385 50.8085C89.4537 53.3158 90.6033 54.5608 92.0642 55.2179C93.5332 55.8749 95.1698 55.8749 98.427 55.8749H163.667L133.33 16.45C128.62 10.3287 126.265 7.26812 123.048 5.63406C119.822 4 116.15 4 108.797 4H43.9167Z" stroke="#14AE5C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path className='path2' d="M75.8496 38.5833V142.333M75.8496 142.333H11.9829V45.9928M75.8496 142.333H155.683V47.2291M19.9663 34.2604V4M43.9801 73.1666H43.9083M43.9163 142.333V107.75M107.783 90.4582H123.75" stroke="#14AE5C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default DrawAnimation