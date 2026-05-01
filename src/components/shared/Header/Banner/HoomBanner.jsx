import Image from 'next/image'
import 'animate.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';

function HoomBanner() {
  return (
    <div className='w-full h-140 rounded-2xl bg-indigo-100 relative overflow-hidden'>
      <div className='w-full h-full bg-[#dedef171] absolute z-10 flex flex-col gap-4 justify-center items-center text-center p-6'>
        <p className='px-3 py-1 rounded-2xl bg-[#adadf5] text-[#5b5bce]'>Explore the Sanctuary</p>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold opacity-90'>Find Your Next Read</h2>
        <p>Discover a curated collection of wisdom, stories, and technical excellence.<br />Borrow your next favorite book instantly in our digital reading environment.</p>
        <Link href="/allbooks" className='btn bg-color border-none text-white animate__pulse'>Browse Now <FaLongArrowAltRight /></Link>
      </div>
      <div className="absolute left-[-60px] top-0 z-0 opacity-0 md:opacity-20 lg:opacity-60 xl:opacity-100 transition-all duration-400 ease-smooth">
        <Image src="/banner-1st.png" width={550} height={550} className='rotate-[-12deg] rounded-xl' alt='book-1' />
      </div>
      <div className="absolute right-[-60px] bottom-[-80px] z-0 opacity-0 lg:opacity-20 xl:opacity-100 transition-all duration-400 ease-smooth">
        <Image src="/banner-2nd.png" width={550} height={550} className='rotate-[12deg] rounded-xl' alt='book-2' />
      </div>

    </div>
  )
}


export default HoomBanner