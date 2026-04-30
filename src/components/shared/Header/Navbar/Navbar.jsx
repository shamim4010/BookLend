"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaBookOpen, FaHome, FaRegUserCircle } from 'react-icons/fa'
import { GiSpellBook } from 'react-icons/gi'

function Navbar() {
    const pathName = usePathname()

    const liLinks = <>
        <li><Link href='/' className={pathName === '/' ? 'text border-b-2 border-[#2f2ebe] navAnimat': ''}><FaHome /> Home</Link></li>
        <li><Link href='/allbooks' className={pathName === '/allbooks' ? 'text border-b-2 border-[#2f2ebe] navAnimat': ''}><FaBookOpen /> All Books</Link></li>
        <li><Link href='/profile' className={pathName === '/profile' ? 'text border-b-2 border-[#2f2ebe] navAnimat': ''}><FaRegUserCircle /> My Profile</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
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
                <Link href="/" className="text text-2xl flex items-center gap-2 cursor-pointer drop-shadow-[0_0_12px_rgba(47,46,190,1)]"><GiSpellBook/> BookLend</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {liLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/auth/login" className="btn btn-sm bg border-none text-white rounded-sm">Login</Link>
            </div>
        </div>
    )
}

export default Navbar