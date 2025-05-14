"use client";
import Image from 'next/image';
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const CommonAnimation = ({ heading, para, src }) => {
    const commonHeadingRef = useRef(null);
    const commonParaRef = useRef(null);
    const imgRef = useRef(null);
    const listRefs = useRef([]);
    const sectionRef = useRef(null); 

    useEffect(() => {
        const ctx = gsap.context(() => {
            const headingSplit = new SplitText(commonHeadingRef.current, { type: "chars" });
            const paraSplit = new SplitText(commonParaRef.current, { type: "words" });

            gsap.timeline({
                scrollTrigger: {
                    trigger: commonHeadingRef.current,
                }
            })
                .from(headingSplit.chars, {
                    x: -20,
                    autoAlpha: 0,
                    duration: 0.3,
                    stagger: 0.05,
                }, 0)
                .from(paraSplit.words, {
                    x: 20,
                    autoAlpha: 0,
                    duration: 0.6,
                    stagger: 0.03,
                    ease: "power1.inOut",
                })
                .from(listRefs.current, {
                    y: -20,
                    autoAlpha: 0,
                    duration: 0.4,
                    stagger: 0.2,
                    ease: "power2.inOut",
                })
                .from(imgRef.current, {
                    scale: 0,
                    autoAlpha: 0,
                    duration: 1.2,
                    delay: 0.5,
                }, 0);

            // Parallax Image Effect
            gsap.to(imgRef.current, {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",  
                    end: "bottom top",    
                    scrub: true,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const setListRef = (el, index) => {
        listRefs.current[index] = el;
    };

    const LIST_DATA = [
        "In-depth insights into visa application assessment",
        "Clarification on complex cases and exceptions",
        "Nuanced interpretations of immigration laws and regulations"
    ];

    return (
        <div className="py-18 overflow-hidden" ref={sectionRef}>
            <div className='max-w-[1140px] mx-auto px-4 '>
                <div className="flex justify-between items-center max-lg:flex-col-reverse">
                    <div className="max-w-[533px] max-lg:mt-8">
                        <h2 ref={commonHeadingRef} className='text-3xl lg:text-6xl fw-bold leading-[120%] text-white '>{heading}</h2>
                        <p ref={commonParaRef} className='text-base leading-150 text-white mt-5'>{para}</p>
                        <ul className='list-disc mt-4 ml-6'>
                            {LIST_DATA.map((text, index) => (
                                <li
                                    key={index}
                                    ref={(el) => setListRef(el, index)}
                                    className='text-white'
                                >
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Image
                            src={src}
                            ref={imgRef}
                            width="392"
                            height="457"
                            alt="illustration"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonAnimation;
