"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Menu, X } from "lucide-react";
import gsap from 'gsap'
import Icons from './Icon'

const Header = () => {
    const headerRef = useRef(null)
    const dropdownRef = useRef(null)
    const mobileMenuRef = useRef(null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.5 } })
            tl.from('#navbar', { opacity: 0, y: -30 })
                .from("#logo", { opacity: 0, x: -20 }, "-=0.3")
                .from(["#link1", "#link2", "#link3", "#link4"], {
                    opacity: 0,
                    x: 20,
                    stagger: 0.1
                }, "-=0.3")
        }, headerRef)

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            gsap.to(mobileMenuRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                display: "flex"
            })
        } else {
            gsap.to(mobileMenuRef.current, {
                autoAlpha: 0,
                y: -20,
                duration: 0.3,
                ease: "power2.in",
                display: "none"
            })
        }
    }, [isMenuOpen])

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
    const closeDropdown = () => setIsDropdownOpen(false)
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className='max-xl:px-5' ref={headerRef}>
            <div id='navbar' className='max-w-[1140px] mx-auto bg-white mt-8 px-4 rounded-md py-2 shadow-md flex justify-between relative z-30 items-center'>
                <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={100}
                    height={60}
                    id='logo'
                />
                <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(prev => !prev)}>
                    {isMenuOpen ? <X color='#26d78a' size={28} /> : <Menu color='#26d78a' size={28} />}
                </div>
                <ul className='flex gap-8 items-center max-md:hidden'>
                    <Link id='link1' href='/' className='text-xl text-green-500'>Hero</Link>
                    <Link id='link2' href='/time-line' className='text-xl text-green-500'>Timeline</Link>
                    <Link id='link3' href='/basic' className='text-xl text-green-500'>Basic</Link>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            id='link4'
                            onClick={toggleDropdown}
                            className='text-xl text-green-500 flex items-center gap-2'
                        >
                            Task
                            <Icons
                                icon="downIcon"
                                className={`transition-transform duration-300 mt-2 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-[102px]">
                                <Link href="/task/week-1" className="block py-2 hover:bg-gray-100 text-green-500 text-center" onClick={closeDropdown}>
                                    Week 1
                                </Link>
                                <Link href="/task/week-2" className="block py-2 hover:bg-gray-100 text-green-500 text-center" onClick={closeDropdown}>
                                    Week 2
                                </Link>
                                <Link href="/task/week-3" className="block py-2 hover:bg-gray-100 text-green-500 text-center" onClick={closeDropdown}>
                                    Week 3
                                </Link>
                            </ul>
                        )}
                    </div>
                </ul>
                <ul
                    ref={mobileMenuRef}
                    className='bg-white absolute top-full left-0 w-full min-h-[200px] z-20 justify-center items-center flex-col gap-5 rounded-md md:hidden hidden'
                >
                    <Link href='/' className='text-xl text-green-500' onClick={() => setIsMenuOpen(false)}>Hero</Link>
                    <Link href='/time-line' className='text-xl text-green-500' onClick={() => setIsMenuOpen(false)}>Timeline</Link>
                    <Link href='/basic' className='text-xl text-green-500' onClick={() => setIsMenuOpen(false)}>Basic</Link>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className='text-xl text-green-500 flex items-center gap-2'
                        >
                            Task
                            <Icons
                                icon="downIcon"
                                className={`transition-transform duration-300 mt-2 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-[102px]">
                                <Link href="/task/week-1" className="block py-2 hover:bg-gray-100 text-green-500 text-center" onClick={closeDropdown}>
                                    Week 1
                                </Link>
                                <Link href="/task/week-2" className="block py-2 hover:bg-gray-100 text-green-500 text-center" onClick={closeDropdown}>
                                    Week 2
                                </Link>
                                <Link href="/task/week-3" className="block py-2 hover:bg-gray-100 text-green-500 text-center" onClick={closeDropdown}>
                                    Week 3
                                </Link>
                            </ul>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Header
