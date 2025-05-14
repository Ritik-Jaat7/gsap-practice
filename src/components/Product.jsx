"use client"

import gsap from "gsap"
import Image from "next/image"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Product = () => {
    const centerImgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".wrapper",
                    start: "top top",
                    end: "+=45%",
                    pin: true,
                    scrub: true,
                    markers: false,
                },
            });

            tl.to(centerImgRef.current, {
                scale: 8,
                transformOrigin: "center center",
                ease: "power1.inOut",
                duration: 5,
            })
                .to(centerImgRef.current, {
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: "power1.out",
                });

        });
        return () => ctx.revert();
    }, []);

    const PRODUCT_DATA_LIST = [
        {
            image: "/assets/images/cloth-1.webp",
            title: "Product 1"
        },
        {
            image: "/assets/images/cloth-2.webp",
            title: "Product 2"
        },
        {
            image: "/assets/images/cloth-3.webp",
            title: "Product 3"
        },
        {
            image: "/assets/images/hero-img.webp",
            title: "Product 4"
        }
    ]

    return (
        <div className="py-24  relative overflow-hidden">
            <div className="wrapper relative">
                <div className='max-w-[1140px] mx-auto px-4'>
                    <div className="pt-10">
                        <h2 className="text-6xl fw-bold leading-[120%] text-white text-center">Explore Our Product</h2>
                        <div className="flex justify-between items-center mt-8">
                            <Image
                                src="/assets/images/hello-right.svg"
                                alt="hello-right"
                                width={329}
                                height={500}
                                className="mt-8 hello-right-img"
                            />
                            <div className="grid grid-cols-2 gap-5">
                                {PRODUCT_DATA_LIST.map((obj, i) =>
                                    <div key={i} className="w-full max-w-[306px] p-1.5 bg-white rounded-lg hello-right-img">
                                        <Image
                                            src={obj.image}
                                            width={300}
                                            height={300}
                                            alt="product-img"
                                            className="h-[294px] object-fit-cover"
                                        />
                                        <p className="mt-2 text-base text-gray-500">{obj.title}</p>
                                        <p className="text-gray-500 leading-[120%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    ref={centerImgRef}
                    src="/assets/images/main-home.webp"
                    alt="main-home"
                    className="!min-h-screen absolute top-0 left-0 object-cover !h-screen main-home pointer-events-none"
                    fill
                />
            </div>
        </div>
    )
}

export default Product
