"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Grid = () => {
    const cellsRef = useRef([]);
    const [show, setShow] = useState(false);
    const showTween = useRef(null);
    const hideTween = useRef(null);

    useEffect(() => {
        const cells = cellsRef.current;
        showTween.current = gsap.to(cells, {
            backgroundColor: "black",
            borderColor: "grey",
            duration: 0.3,
            stagger: {
                amount: 1.25,
                grid: [20, 20],
                from: [0.5, 0],
            },
            ease: "power1.inOut",
            paused: true,
        });

        hideTween.current = gsap.to(cells, {
            backgroundColor: "white",
            borderColor: "black",
            duration: 0.3,
            stagger: {
                amount: 1,
                grid: [20, 20],
                from: [0.5, 1],
            },
            ease: "power1.out",
            paused: true,
        });
    }, []);

    const toggleGridColor = () => {
        if (show) {
            showTween.current?.pause();
            hideTween.current?.invalidate().restart();
        } else {
            hideTween.current?.pause();
            showTween.current?.invalidate().restart();
        }
        setShow(!show);
    };

    return (
        <div className="w-screen h-screen grid grid-cols-20 grid-rows-20 relative">
            {Array.from({ length: 400 }).map((_, index) => (
                <div
                    key={index}
                    className="border border-black bg-white"
                    ref={(el) => {
                        if (el) cellsRef.current[index] = el;
                    }}
                />
            ))}
            <button
                className="top-8 left-10 absolute bg-gray-400 p-3 cursor-pointer"
                onClick={toggleGridColor}
            >
                Change the grid Color
            </button>
        </div>
    );
};

export default Grid;
