import HoomBanner from '@/components/shared/Header/Banner/HoomBanner'
import React from 'react'
import Marquee from 'react-fast-marquee'

function Home() {
  return (
    <div>
      <HoomBanner />
      <div className='my-12'>
        <Marquee>
          SHAMIM
        </Marquee>
      </div>
    </div>
  )
}

export default Home