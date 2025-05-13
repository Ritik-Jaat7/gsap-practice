"use client";
import { gsap } from "gsap";
import { useEffect } from "react";

const Hero = () => {
    const animateBox1 = () => {
        gsap.to('#box1', {
            x: 1000,
            duration: 1,
            repeat: -1,
            yoyo: true,
        });
    };

    const animateBox2 = () => {
        gsap.from("#box2", {
            x: 1000,
            duration: 1,
            repeat: -1,
            yoyo: true,
            borderRadius: "50%",
        });
    };
    const animateBox3 = () => {
        gsap.fromTo("#box3", {
            x: 0,
            duration: 1,
            repeat: -1,

        }, {
            x: 550,
            y: 30,
            duration: 1,
            repeat: -1,
            rotate: 360,
            borderRadius: "50%",
        });
    }
    useEffect(() => {
        gsap.set("#box4", {
            x: 0,
            y: 0,
            width: "150px",
            height: "150px",
            backgroundColor: "red",
        })
    }, []);
    return (
        <div className="mt-8 max-w-[1140px] mx-auto px-4">
            <div className="flex gap-8">
                <button
                    onClick={animateBox1}
                    className="mt-4 px-4 py-2 bg-red-700 text-white round"
                >
                    Click to start Animation of Box 1
                </button>
                <button
                    onClick={animateBox2}
                    className="mt-4 px-4 py-2 bg-blue-800 text-white rounde"
                >
                    Click to start Animation of Box 2
                </button>
                <button onClick={animateBox3}
                    className="mt-4 px-4 py-2 bg-green-700 text-white rounded">
                    Click to start Animation of Box 3
                </button>
            </div>
            <div
                id="box1"
                className="w-[150px] h-[150px] bg-red-500 text-white flex items-center justify-center text-xl mt-3"
            >
                Use of to()
            </div>

            <div
                id="box2"
                className="w-[150px] h-[150px] bg-blue-700 text-white flex items-center justify-center text-xl mt-14"
            >
                Use of from()
            </div>
            <div
                id="box3"
                className="w-[150px] h-[150px] bg-green-700 text-white flex items-center justify-center text-xl mt-14"
            >
                Use of fromTo()
            </div>
            <div id="box4" className="mt-14 text-center text-white text-xl flex items-center justify-center">
                <p className="">Use of set()</p>
            </div>
        </div>
    );
};

export default Hero;
