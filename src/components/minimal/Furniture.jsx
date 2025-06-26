"use client"
import React, { useEffect, useState } from 'react'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)
const Furniture = ({ bgColorRef }) => {
    const [heading, setHeading] = useState("Furniture")
    const imageData = [
        { src: "/assets/images/single-bed.webp", width: 334, height: 500, className: 'w-[85px] h-[111px] md:w-[200px] md:h-[300px] xl:w-[334px] xl:h-[500px]' },
        { src: "/assets/images/study-table.webp", width: 248, height: 325, className: 'w-[63px] h-[83px] md:w-[140px] md:h-[180px] xl:w-[248px] xl:h-[325px] xl:mt-[270px] mt-[80px] md:mt-[160px]' },
        { src: "/assets/images/white-chair.webp", width: 162, height: 212, className: 'w-[41px] h-[54px] md:w-[90px] md:h-[120px] xl:w-[162px] xl:h-[212px]' },
        { src: "/assets/images/brown-sofa.webp", width: 420, height: 551, className: 'w-[107px] h-[140px] md:w-[220px] md:h-[300px] xl:w-[420px] xl:h-[551px] xl:mt-[450px] mt-[120px] md:mt-[250px]' },
        { src: "/assets/images/white-lamp.webp", width: 384, height: 503, className: 'w-[85px] h-[111px] md:w-[200px] md:h-[260px] xl:w-[384px] xl:h-[503px]' },
        { src: "/assets/images/lamp.webp", width: 285, height: 373, className: 'w-[63px] h-[83px] md:w-[150px] md:h-[190px] xl:w-[285px] xl:h-[373px] xl:mt-[317px] mt-[60px] md:mt-[170px]', wrapper: true },
        { src: "/assets/images/night-table.webp", width: 186, height: 244, className: 'w-[41px] h-[54px] md:w-[90px] md:h-[120px] xl:w-[186px] xl:h-[244px]' },
        { src: "/assets/images/circle-lamp.webp", width: 483, height: 633, className: 'min-w-[107px] h-[140px] md:min-w-[240px] md:h-[320px] xl:min-w-[483px] xl:h-[633px] xl:mt-[230px] mt-[80px] md:mt-[150px]' },
        { src: "/assets/images/book-light.webp", width: 448, height: 588, className: 'w-[107px] h-[140px] md:min-w-[240px] md:h-[300px] xl:min-w-[448px] xl:h-[588px] object-cover' },
        { src: "/assets/images/pot.webp", width: 356, height: 467, className: 'w-[85px] h-[111px] md:w-[180px] md:h-[230px] xl:w-[356px] xl:h-[467px] xl:ml-[250px] ml-[40px] md:ml-[130px]', wrapper: true },
        { src: "/assets/images/office-light.webp", width: 356, height: 467, className: 'md:w-[180px] md:h-[230px] xl:w-[356px] xl:h-[467px] !opacity-0' },
        { src: "/assets/images/two-chairs.webp", width: 248, height: 325, className: 'md:w-[140px] md:h-[180px] xl:w-[248px] xl:h-[325px] !opacity-0' },
        { src: "/assets/images/office-light.webp", width: 334, height: 438, className: 'w-[85px] h-[111px] md:w-[170px] md:h-[230px] xl:w-[334px] xl:h-[438px] mt-[100px] md:mt-[150px]' },
        { src: "/assets/images/two-chairs.webp", width: 248, height: 325, className: 'w-[63px] h-[83px] md:w-[140px] md:h-[180px] xl:w-[248px] xl:h-[325px] xl:mt-[100px] mt-[55px] md:mt-[80px]', wrapper: true },
        { src: "/assets/images/gold-biskuts.webp", width: 162, height: 212, className: 'w-[41px] h-[54px] md:w-[90px] md:h-[120px] xl:w-[162px] xl:h-[212px]', wrapper: true },
        { src: "/assets/images/chair-table-laptop.webp", width: 420, height: 551, className: 'w-[107px] h-[140px] md:min-w-[240px] md:h-[300px] xl:min-w-[420px] xl:h-[551px]' },
        { src: "/assets/images/less-more.webp", width: 334, height: 438, className: 'w-[85px] h-[111px] md:min-w-[170px] md:h-[230px] xl:min-w-[334px] xl:h-[438px] mt-[100px] md:mt-[150px]' },
        { src: "/assets/images/tech-5.webp", width: 248, height: 325, className: 'w-[63px] h-[83px] md:min-w-[140px] md:h-[180px] xl:min-w-[248px] xl:h-[325px]', wrapper: true },
        { src: "/assets/images/camera.webp", width: 162, height: 212, className: 'w-[41px] h-[54px] md:min-w-[90px] md:h-[120px] xl:min-w-[162px] xl:h-[212px] mt-20' },
        { src: "/assets/images/digital-watch.webp", width: 420, height: 551, className: 'w-[107px] h-[140px] md:min-w-[240px] md:h-[300px] xl:min-w-[420px] xl:h-[551px] mt-40' },
        { src: "/assets/images/cycle.webp", width: 420, height: 551, className: 'w-[107px] h-[140px] md:min-w-[240px] md:h-[300px] xl:min-w-[420px] xl:h-[551px]' },
        { src: "/assets/images/sony.webp", width: 334, height: 438, className: 'xl:min-w-[334px] w-[85px] h-[111px] md:w-[170px] md:h-[230px] ml-8 md:ml-[100px] xl:ml-[250px] xl:mt-28 xl:h-[438px]', wrapper: true },
    ]


    useEffect(() => {
        gsap.set(".gridImages", { yPercent: 30 })
        gsap.to(".furnitureContainer", {
            scrollTrigger: {
                trigger: ".furnitureContainer",
                start: "top 75%",
                end: "+=200%",
                pin: true,
                scrub: 2,
                markers: false,
                onUpdate: (self) => {
                    const progress = self.progress;
                    if (progress < 0.25) {
                        setHeading("Furniture");
                        gsap.to(document.body, { backgroundColor: "#E8E2DA", duration: 1, ease: "power1.out" });
                        gsap.to(".pinHeading", { color: "#2E2A27", duration: 1, ease: "power1.out" })
                        gsap.to(bgColorRef.current, { fill: "#111111", duration: 1, })
                        gsap.to(".nav-item", { color: "#111111", duration: 1, })
                        gsap.to(".navBorder", { borderColor: "#111111", backgroundColor: "#E8E2DA", duration: 1, })
                    } else if (progress < 0.45) {
                        setHeading("Decor");
                        gsap.to(document.body, { backgroundColor: "#2E2A27", duration: 1, ease: "power1.out" });
                        gsap.to(".pinHeading", { color: "#E8E2DA", duration: 1, ease: "power1.out" });
                        gsap.to(bgColorRef.current, { fill: "#E8E2DA", duration: 1, },)
                        gsap.to(".nav-item", { color: "#E8E2DA", duration: 1, },)
                        gsap.to(".navBorder", { borderColor: "#E8E2DA", backgroundColor: "#2E2A27", duration: 1, },)
                    } else if (progress < 0.75) {
                        setHeading("Office");
                        gsap.to(document.body, { backgroundColor: "#E8E2DA", duration: 1, ease: "power1.out" });
                        gsap.to(".pinHeading", { color: "#2E2A27", duration: 1, ease: "power1.out" })
                        gsap.to(bgColorRef.current, { fill: "#111111", duration: 1, })
                        gsap.to(".nav-item", { color: "#111111", duration: 1, })
                        gsap.to(".navBorder", { borderColor: "#111111", backgroundColor: "#E8E2DA", duration: 1, })
                    } else if (progress < 0.95) {
                        setHeading("Tech");
                        gsap.to(document.body, { backgroundColor: "#2E2A27", duration: 1, ease: "power1.out" });
                        gsap.to(".pinHeading", { color: "#E8E2DA", duration: 1, ease: "power1.out" });
                        gsap.to(bgColorRef.current, { fill: "#E8E2DA", duration: 1, },)
                        gsap.to(".nav-item", { color: "#E8E2DA", duration: 1, },)
                        gsap.to(".navBorder", { borderColor: "#E8E2DA", backgroundColor: "#2E2A27", duration: 1, },)
                    } else {
                        setHeading("Tech");
                        gsap.to(document.body, { backgroundColor: "#fce4ec", duration: 1, ease: "power1.out" });
                        gsap.to(document.body, { backgroundColor: "#E8E2DA", duration: 1, ease: "power1.out" });
                        gsap.to(".pinHeading", { color: "#2E2A27", duration: 1, ease: "power1.out" })
                        gsap.to(bgColorRef.current, { fill: "#111111", duration: 1, })
                        gsap.to(".nav-item", { color: "#111111", duration: 1, })
                        gsap.to(".navBorder", { borderColor: "#111111", backgroundColor: "#E8E2DA", duration: 1, })
                    }
                }

            }
        })
        gsap.to(".gridImages", {
            yPercent: -100,
            scrollTrigger: {
                trigger: ".furnitureContainer",
                start: "top 75%",
                end: "+=200%",
                scrub: 2,
                markers: false,
            }
        })
        const boxes = gsap.utils.toArray(".slideImg")
        boxes.forEach((img, index) => {
            gsap.to(img, {
                yPercent: -20,
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
                <h2 className='text-[54px] xl:text-[200px] font-bold capitalize pinHeading'>{heading}</h2>
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
                            <div key={index} className="xl:flex xl:items-center xl:justify-center">
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