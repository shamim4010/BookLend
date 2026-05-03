import HoomBanner from '@/components/shared/Header/Banner/HoomBanner'
import TopBooks from '@/components/ui/homeUi/topbooks/TopBooks';
import React, { Suspense } from 'react'
import Marquee from 'react-fast-marquee'
import Loading from './loading';

const booksPromise = async () => {
  const res = await fetch('https://book-lend-blue.vercel.app/books.json', {
    cache: 'no-store'
  });
  return await res.json();
}

const marqueeText = (
  <>
    <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 mx-3 shadow-md">
      <span className="text-2xl">🏷️</span>
      <span className="font-bold text-white">20% OFF</span>
      <span className="text-white/80">|</span>
      <span className="text-white">The Whispering Woods</span>
    </div>

    <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 py-2 mx-3 shadow-md">
      <span className="text-2xl">🏷️</span>
      <span className="font-bold text-white">25% OFF</span>
      <span className="text-white/80">|</span>
      <span className="text-white">Clean Code</span>
    </div>

    <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-2 mx-3 shadow-md">
      <span className="text-2xl">👑</span>
      <span className="font-bold text-white">FREE</span>
      <span className="text-white/80">|</span>
      <span className="text-white">Circe</span>
    </div>

    <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-2 mx-3 shadow-md">
      <span className="text-2xl">🏷️</span>
      <span className="font-bold text-white">30% OFF</span>
      <span className="text-white/80">|</span>
      <span className="text-white">The Song of Achilles</span>
    </div>

    <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-5 py-2 mx-3 shadow-md">
      <span className="text-2xl">🏷️</span>
      <span className="font-bold text-white">15% OFF</span>
      <span className="text-white/80">|</span>
      <span className="text-white">The Seven Husbands of Evelyn Hugo</span>
    </div>

    <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2 mx-3 shadow-md">
      <span className="text-2xl">👑</span>
      <span className="font-bold text-white">FREE</span>
      <span className="text-white/80">|</span>
      <span className="text-white">JavaScript The Good Parts</span>
    </div>

    <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 py-2 mx-3 shadow-md">
      <span className="text-2xl">🏷️</span>
      <span className="font-bold text-white">10% OFF</span>
      <span className="text-white/80">|</span>
      <span className="text-white">The Night Circus</span>
    </div>

    <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-5 py-2 mx-3 shadow-md">
      <span className="text-2xl">🏷️</span>
      <span className="font-bold text-white">18% OFF</span>
      <span className="text-white/80">|</span>
      <span className="text-white">Where the Crawdads Sing</span>
    </div>

    <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2 mx-3 shadow-md">
      <span className="text-2xl">👑</span>
      <span className="font-bold text-white">FREE</span>
      <span className="text-white/80">|</span>
      <span className="text-white">The Nightingale</span>
    </div>

  </>
)

function Home() {
  const booksData = booksPromise();
  return (
    <div>
      <HoomBanner />
      <div className='my-12'>
        <Marquee speed={50} direction="left" pauseOnHover={true} loop={0} gradient={false}>
          <span className="flex gap-4">
            {marqueeText}
          </span>
        </Marquee>
      </div>
      <Suspense fallback={<Loading />}>
        <TopBooks {...{ booksData }} />
      </Suspense>
    </div>
  )
}

export default Home