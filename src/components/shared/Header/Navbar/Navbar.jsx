"use client"
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React from 'react'
import { FaBookOpen, FaHome, FaRegUserCircle } from 'react-icons/fa'
import { GiSpellBook } from 'react-icons/gi'
import 'animate.css';

function Navbar() {
    const pathName = usePathname()
    const { data: session, isPending } = authClient.useSession()
    console.log(session)

    const userInfo = session?.user;

    const logOut = async () => {
        await authClient.signOut();
        redirect('/auth/login')
    }

    const liLinks = <>
        <li><Link href='/' className={pathName === '/' ? 'text border-b-2 border-[#2f2ebe] navAnimat rounded-none': ''}><FaHome /> Home</Link></li>
        <li><Link href='/allbooks' className={pathName === '/allbooks' ? 'text border-b-2 border-[#2f2ebe] navAnimat rounded-none': ''}><FaBookOpen /> All Books</Link></li>
        <li><Link href='/profile' className={pathName === '/profile' ? 'text border-b-2 border-[#2f2ebe] navAnimat rounded-none': ''}><FaRegUserCircle /> My Profile</Link></li>
    </>

    return (
        <div className="navbar px-24 fixed z-100 w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {liLinks}
                    </ul>
                </div>
                <Link href="/" className="text text-2xl flex items-center gap-2 cursor-pointer active:animate__fadeIn drop-shadow-[0_0_12px_rgba(47,46,190,1)]"><GiSpellBook/> BookLend</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {liLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {isPending ? 'Loading': userInfo ? <div className='flex justify-center items-center gap-4'><div className='w-10 h-10 flex justify-center items-center overflow-hidden border-2 border-indigo-500 rounded-full'><Image src={userInfo.image} width={100} height='100' alt={userInfo.name} /></div> <button onClick={logOut} className='btn border-none bg-color text-white '>LogOut</button></div> : <Link href="/auth/login" className="btn btn-sm bg-color border-none text-white rounded-sm">Login</Link>}
            </div>
        </div>
    )
}

export default Navbar