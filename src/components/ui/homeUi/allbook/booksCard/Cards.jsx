'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { animated, useInView } from 'react-spring'
import { toast } from 'react-toastify';

function Cards({ item }) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 80,
        scale: 0.92,
        filter: "blur(8px)",
      },
      to: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      },
      config: {
        mass: 1,
        tension: 180,
        friction: 22,
      },
    }),
    {
      rootMargin: "-10% 0%",
      once: false,
    }
  );

  const { data: session } = authClient.useSession()

  const bookDetails = () => {
    if (!session) {
      toast.error("Please Logni First", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }

  console.log(item)
  return (
    <animated.div ref={ref} style={springs}>
      <div className="card bg-white h-120 rounded-xl shadow-sm p-4">
        <figure className='rounded-md'>
          <Image
            src={item.image_url}
            alt={item.title} width={250} height={250} className='rounded-md hover:scale-[1.2] transition-all duration-500 ease-smooth' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            {session ? <Link href={`/book/${item.title}`} className="btn border-none bg-indigo-100 hover:bg-indigo-500">More Details</Link> : <button onClick={bookDetails} className="btn border-none bg-indigo-100 hover:bg-indigo-500">More Details</button>}
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Cards