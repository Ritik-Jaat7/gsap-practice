import React from 'react'

const Travel = () => {
  const LIST_ITEMS = [
    "Travel",
    "Home",
    "Office",
    "kitchen",
    "Fashion",
    "furniture",
    "Books",
    "Lighting",
    "Tech",
    "Decor",
    "Bath&Bed",
    "More",
  ]
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className='max-w-[1271px] mx-auto'>
        <ul className='flex flex-wrap gap-4 justify-center items-center mt-20 px-7'>
          {LIST_ITEMS.map((item, index) => (
            <div key={index} className='max-w-[217px] w-full h-[67px] border border-[#2E2A27] rounded-4xl flex justify-center items-center'><span className='text-[42px]'>{item}</span></div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Travel