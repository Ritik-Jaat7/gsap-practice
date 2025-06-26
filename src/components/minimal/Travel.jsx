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
    <div className="min-h-[50vh] lg:min-h-screen flex flex-col justify-center items-center">
      <div className='max-w-[1271px] mx-auto'>
        <ul className='flex flex-wrap gap-2 lg:gap-4 justify-center items-center mt-20 px-2 lg:px-7'>
          {LIST_ITEMS.map((item, index) => (
            <div key={index} className='lg:max-w-[217px] lg:w-full lg:h-[67px] border border-[#2E2A27] rounded-4xl flex justify-center items-center max-sm:py-2 max-sm:px-3 max-md:py-3.5 max-md:px-4 max-lg:py-2 max-lg:px-4.5'><span className='text-[12px] sm:text-xl lg:text-[42px]'>{item}</span></div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Travel