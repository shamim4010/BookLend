'use client'
import { authClient} from '@/lib/auth-client'
import Image from 'next/image'
import React from 'react'
import { FaBookOpen, FaStar } from 'react-icons/fa'
import { toast } from 'react-toastify';

function Card({ item }) {
  const {data: session} = authClient.useSession();

  if(!session){
    toast.warning('Please Login to access thw book details')
  }

  return (
    <div className="card-side flex flex-col md:flex-row gap-8">
      <figure className='w-90 h-120 rounded-lg'>
        <Image
          src={item.image_url}
          alt={item.title} width="100" height="100" className='hover:scale-[1.1] transition-all duration-500 ease-smooth' />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-6xl font-bold">{item.title}</h2>
        <em className='text-xl text-[#4d4dad] font-semibold'>by {item.author}</em>
        <br />
        <div className='flex flex-col gap-8 sm:flex-row'>
          <div className='text-center'>
            <p className='font-semibold opacity-70'>Category</p>
            <p className='text-3xl'>{item.category}</p>
          </div>
          <div className='text-center'>
            <p className='font-semibold opacity-70'>Rating</p>
            <p className='text-3xl flex justify-center items-center gap-2'>{item.rating} <FaStar className='text-yellow-300' /></p>
          </div>
        </div>
        <br />
        <div>
          <p className='font-semibold'>Description</p>
          <p className='font-semibold opacity-70'>{item.description}</p>
        </div>
        <br />
        <span className='font-semibold w-30 text-center rounded-2xl p-1 bg-indigo-300 opacity-70'><div aria-label="status" className="status bg-green-800 rounded-full mr-1"></div> {item.available_quantity} copies left</span>
        <div className="card-actions mt-3">
          <button className="btn border-none bg-color text-white hover:scale-[1.05] transition-all duration-500 ease-smooth"><FaBookOpen /> Order This Book</button>
        </div>
      </div>
    </div>
  )
}

export default Card