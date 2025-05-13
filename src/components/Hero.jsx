"use client";
import Image from "next/image";
import Icons from "./Icon";
import gsap from 'gsap';
import { useEffect, useRef } from "react";
import SplitText from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const headSplit = new SplitText(".heading", { type: 'chars' })
            const paraSplit = new SplitText(".para", { type: 'words' })
            const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } });
            tl.from(headSplit.chars, {
                autoAlpha: 0,
                duration: 0.01,
                stagger: 0.05,
            })
                .from(paraSplit.words, {
                    y: -20,
                    autoAlpha: 0,
                    stagger: 0.05,
                    duration: 1,
                    ease: 'elastic.inOut'
                })
                .from('.btn', { scale: 0, x: -50 });

            gsap.to(".white-layer", {
                width: "0",
                duration: 1,
                ease: "power2.out",
                delay: 0.5,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="pb-14">
            <div ref={heroRef} className="max-w-[1140px] mx-auto px-4">
                <div className="grid grid-cols-2 justify-between items-center mt-8">
                    <div className="mt-0">
                        <h1 className="text-6xl fw-bold leading-[120%] text-white max-w-[420px] heading">Beautiful Color Contrast!</h1>
                        <p className="text-2xl text-white font-normal mt-3.5 para">Over 50 Collections to Choose for!</p>
                        <button className="flex gap-2 btn items-center py-[10px] px-7 bg-white rounded-md mt-14 cursor-pointer text-[#A23045] hover:scale-[0.98] font-medium">
                            SHOP NOW <span><Icons icon="rightArrow" /></span>
                        </button>
                    </div>
                    <div className="mt-0 flex justify-end">
                        <div className="w-[500px] h-[500px] relative rounded-lg overflow-hidden">
                            <div className="absolute w-[500px] h-[500px] bg-white rounded-lg white-layer"></div>
                            <Image
                                src="/assets/images/hero-img.webp"
                                alt="hero"
                                width={500}
                                height={500}
                                className="w-[500px] h-[500px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
