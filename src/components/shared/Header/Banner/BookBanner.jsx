import React from 'react'

function BookBanner() {
  return (
    <div className='w-full rounded-2xl flex flex-col gap-4 justify-center items-center text-center'>
        <p className='px-3 py-1 rounded-2xl bg-[#adadf5] text-[#5b5bce]'>Explore the Sanctuary</p>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold opacity-90'>Explore Our Collection</h2>
        <p>Discover thousands of titles in our curated digital sanctuary, from timeless <br /> classics to modern technical masterpieces.</p>
    </div>
  )
}

export default BookBanner