import Image from 'next/image'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const imageData = [
    { src: "/assets/images/single-bed.webp", width: 334, height: 500, className: 'w-[334px] h-[500px]' },
    { src: "/assets/images/study-table.webp", width: 248, height: 325, className: 'w-[248px] h-[325px] mt-[370px]', wrapper: true },
    { src: "/assets/images/white-chair.webp", width: 162, height: 212, className: 'w-[162px] h-[212px]' },
    { src: "/assets/images/brown-sofa.webp", width: 420, height: 551, className: 'w-[420px] h-[551px] mt-[450px]' },
    { src: "/assets/images/white-lamp.webp", width: 384, height: 503, className: 'w-[384px] h-[503px]' },
    { src: "/assets/images/lamp.webp", width: 285, height: 373, className: 'w-[285px] h-[373px] mt-[317px]', wrapper: true },
    { src: "/assets/images/night-table.webp", width: 186, height: 244, className: 'w-[186px] h-[244px]' },
    { src: "/assets/images/circle-lamp.webp", width: 483, height: 633, className: 'min-w-[483px] h-[633px] mt-[230px]' },
    { src: "/assets/images/book-light.webp", width: 448, height: 588, className: 'min-w-[448px] h-[588px] object-cover mt-[-100px]' },
    { src: "/assets/images/pot.webp", width: 356, height: 467, className: 'w-[356px] h-[467px] ml-[250px] mt-[-70px]', wrapper: true },
    { src: "/assets/images/office-light.webp", width: 356, height: 467, className: 'w-[356px] h-[467px] mt-[100px]' }

]
const firstRowImages = imageData.slice(0, 10);
const secondRowImages = imageData.slice(10); // Starts from office-light

const Furniture = ({ bgColorRef }) => {
    const headingTexts = ["Furniture", "Decor", "office", "Tech"];
    useEffect(() => {
        gsap.set(".gridImages", {
            yPercent: 18,
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".furnitureContainer",
                start: "top 80%",
                end: "bottom top",
                scrub: true,
                pin: true,
                markers: false,
                onUpdate: (self) => {
                    const progress = self.progress;
                    let index = Math.floor(progress * (headingTexts.length - 1));
                    if (progress === 1) {
                        index = headingTexts.length - 1;
                    }

                    const heading = document.querySelector(".heading");
                    if (heading && heading.innerText !== headingTexts[index]) {
                        heading.innerText = headingTexts[index];
                    }
                },
            },
        })

        tl.to(".gridImages", {
            yPercent: -100,
            duration: 1,
        })
            .to("body", {
                backgroundColor: "#2E2A27",
                delay: 0.01,
            }, "<")
            .to(".heading", {
                color: "#E8E2DA",
                delay: 0.01,
            }, "<")
            .to(".nav-item", {
                color: "#FFFFFF",
                delay: 0.01,
            }, "<")
            .to(".navBorder", {
                borderColor: "#FFFFFF",
                backgroundColor: "#2E2A27",
                delay: 0.01,
            }, "<")
            .to(bgColorRef.current, {
                fill: "#E8E2DA",
                delay: 0.01,
            }, "<")
            .to("body", {
                backgroundColor: "#E8E2DA",
                delay: 0.01,
            })
            .to(bgColorRef.current, {
                fill: "#E8E2DA",
                delay: 0.01,
            })
            .to(".navBorder", {
                borderColor: "#FFFFFF",
                backgroundColor: "#2E2A27",
                delay: 0.01,
            }, "<")

        const boxes = gsap.utils.toArray(".slideImg")

        boxes.forEach((img) => {
            gsap.to(img, {
                yPercent: -50,
                scrollTrigger: {
                    trigger: ".gridImages",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                    markers: true,
                    id: 'img slider'
                },
            })
        })
    }, [])


    return (
        <div className='max-w-[1380px] mx-auto relative furnitureContainer'>
            <h2 className='text-[130px] font-bold absolute left-0 top-0 heading capitalize'>Furniture</h2>

            <div className="grid grid-cols-4 relative z-10 gridImages">
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
                    )
                    return item.wrapper ? (
                        <div key={index} className="flex items-center justify-center h-[325px]">
                            {img}
                        </div>
                    ) : img
                })}
            </div>
        </div>
    )
}

export default Furniture
