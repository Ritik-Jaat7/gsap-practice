"use client"
import React, { useEffect } from 'react'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)
const Furniture = () => {
    const imageData = [
        { src: "/assets/images/single-bed.webp", width: 334, height: 500, className: 'w-[334px] h-[500px]' },
        { src: "/assets/images/study-table.webp", width: 248, height: 325, className: 'w-[248px] h-[325px] mt-[270px]', wrapper: true },
        { src: "/assets/images/white-chair.webp", width: 162, height: 212, className: 'w-[162px] h-[212px]' },
        { src: "/assets/images/brown-sofa.webp", width: 420, height: 551, className: 'w-[420px] h-[551px] mt-[450px]' },
        { src: "/assets/images/white-lamp.webp", width: 384, height: 503, className: 'w-[384px] h-[503px]' },
        { src: "/assets/images/lamp.webp", width: 285, height: 373, className: 'w-[285px] h-[373px] mt-[317px]', wrapper: true },
        { src: "/assets/images/night-table.webp", width: 186, height: 244, className: 'w-[186px] h-[244px]' },
        { src: "/assets/images/circle-lamp.webp", width: 483, height: 633, className: 'min-w-[483px] h-[633px] mt-[230px]' },
        { src: "/assets/images/book-light.webp", width: 448, height: 588, className: 'min-w-[448px] h-[588px] object-cover' },
        { src: "/assets/images/pot.webp", width: 356, height: 467, className: 'w-[356px] h-[467px] ml-[250px] ', wrapper: true },
        { src: "/assets/images/office-light.webp", width: 356, height: 467, className: 'w-[356px] h-[467px] !opacity-0' },
        { src: "/assets/images/two-chairs.webp", width: 248, height: 325, className: 'w-[248px] h-[325px] !opacity-0' },
        { src: "/assets/images/office-light.webp", width: 334, height: 438, className: 'w-[334px] h-[438px] mt-[100px]' },
        { src: "/assets/images/two-chairs.webp", width: 248, height: 325, className: 'w-[248px] h-[325px] mt-[100px]', wrapper: true },
        { src: "/assets/images/gold-biskuts.webp", width: 162, height: 212, className: 'w-[162px] h-[212px]', wrapper: true, },
        { src: "/assets/images/chair-table-laptop.webp", width: 420, height: 551, className: 'min-w-[420px] h-[551px] ', },
        { src: "/assets/images/less-more.webp", width: 334, height: 438, className: 'min-w-[334px] h-[438px] mt-[100px]', },
        { src: "/assets/images/tech-5.webp", width: 248, height: 325, className: 'min-w-[248px] h-[325px]', wrapper: true, },
        { src: "/assets/images/camera.webp", width: 162, height: 212, className: 'min-w-[162px] h-[212px] mt-20', },
        { src: "/assets/images/digital-watch.webp", width: 420, height: 551, className: 'min-w-[420px] h-[551px] mt-40', },
        { src: "/assets/images/cycle.webp", width: 420, height: 551, className: 'min-w-[420px] h-[551px]', },
        { src: "/assets/images/sony.webp", width: 334, height: 438, className: 'min-w-[334px] mt-28 h-[438px] ml-[250px]', wrapper: true, },
    ]

    useEffect(() => {
        gsap.set(".gridImages", { yPercent: 30 })
        gsap.to(".furnitureContainer", {
            scrollTrigger: {
                trigger: ".furnitureContainer",
                start: "top 75%",
                end: "+=200%",
                pin: true,
                scrub: 3,
                markers: false,
            }
        })
        gsap.to(".gridImages", {
            yPercent: -100,
            scrollTrigger: {
                trigger: ".furnitureContainer",
                start: "top 75%",
                end: "+=200%",
                scrub: 3,
                markers: false,
            }
        })
        const boxes = gsap.utils.toArray(".slideImg")
        boxes.forEach((img, index) => {
            gsap.to(img, {
                yPercent: -30,
                scrollTrigger: {
                    trigger: ".furnitureContainer",
                    start: "top 80%",
                    end: "+=200%",
                    scrub: 3,
                    markers: false,
                }
            })
        })
    }, [])

    return (
        <div className='min-h-screen'>
            <div className="max-w-[1380px] mx-auto relative furnitureContainer">
                <h2 className='text-[200px] font-bold capitalize'>Furniture</h2>
                <div className="grid grid-cols-4 absolute top-0 left-0 z-10 gridImages">
                    {imageData.map((item, index) => {
                        const img = (
                            <Image
                                key={index}
                                src={item.src}
                                alt={`furniture-${index}`}
                                width={item.width}
                                height={item.height}
                                className={`${item.className} object-cover slideImg`}
                                priority
                            />
                        );
                        return item.wrapper ? (
                            <div key={index} className="flex items-center justify-center">
                                {img}
                            </div>
                        ) : img;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Furniture