import Link from 'next/link'
import React from 'react'
import { BsFillShareFill } from 'react-icons/bs'
import { GiSpellBook } from 'react-icons/gi'
import { IoSend } from 'react-icons/io5'

function Footer() {
    return (
        <footer className="footer grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-base-200 text-base-content p-10">
            <nav className='flex flex-col gap-4'>
                <Link href="/" className="text text-2xl flex items-center gap-2 cursor-pointer drop-shadow-[0_0_12px_rgba(47,46,190,1)]"><GiSpellBook /> BookLend</Link>
                <p className='opacity-80 text-'>
                    Your digital sanctuary for intellectual growth and discovery. Elevating the modern reading experience through elegant design.
                </p>
                <div className='p-2 rounded-full border-1 border-[#2e2ebed2]'>
                    <BsFillShareFill />
                </div>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link href="/" className="hover:text-[#2f2ebe] hover:border-b hover:border-[#2f2ebe]">About us</Link>
                <Link href="/" className="hover:text-[#2f2ebe] hover:border-b hover:border-[#2f2ebe]">Contact</Link>
                <Link href="/" className="hover:text-[#2f2ebe] hover:border-b hover:border-[#2f2ebe]">Jobs</Link>
                <Link href="/" className="hover:text-[#2f2ebe] hover:border-b hover:border-[#2f2ebe]">Press kit</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link href="/" className="hover:text-[#2f2ebe] hover:border-b hover:border-[#2f2ebe]">Terms of use</Link>
                <Link href="/" className="hover:text-[#2f2ebe] hover:border-b hover:border-[#2f2ebe]">Privacy policy</Link>
                <Link href="/" className="hover:text-[#2f2ebe] hover:border-b hover:border-[#2f2ebe]">Cookie policy</Link>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join mt-2">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input border border-[#4d4da55e] focus:border-[#2f2ebe] focus:shadow-[0_0_4px_rgba(47,46,190,0.5)] rounded-lg join-item" />
                        <button className="btn bg border-none join-item text-white px-6 rounded-lg ml-4"><IoSend /></button>
                    </div>
                </fieldset>
            </form>
        </footer>
    )
}

export default Footer