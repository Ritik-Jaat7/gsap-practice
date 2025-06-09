"use client"
import React from 'react'
import Week1 from './components/Week1'
import { usePathname } from 'next/navigation'
import Week2 from './components/Week2'
import Week3 from './components/Week3'

const Main = () => {
    const pathName = usePathname();

    const slug = pathName.replace("/task/", "");
    const pages = [
        {
            slug: "week-1",
            page: <Week1 />,
        },
        {
            slug: "week-2",
            page: <Week2 />,
        },
        {
            slug: "week-3",
            page: <Week3 />
        }
    ]
    return (
        <div>
            {pages.map((obj, i) => obj.slug === slug && (
                <div key={i} className="w-full">
                    {obj.page}
                </div>
            ))}
        </div>
    )
}

export default Main