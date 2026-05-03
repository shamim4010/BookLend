import React, { use } from 'react'
import Card from './topBookCard/Card';
import Link from 'next/link';

function TopBooks({ booksData }) {
    const books = use(booksData);

    const topBooks = [...books].sort((itemA, itemB) => itemB.rating - itemA.rating).slice(0, 4);
    console.log(topBooks)

    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {topBooks.map(item => {
                    return (
                        <Card key={item.id} {...{ item }} />
                    )
                })}
            </div>
            <div className='relative'>
                <Link href="/allbooks" className='btn border-none hover:bg-[#6161c9] hover:text-white mt-2 absolute right-0'>see All books...</Link>
            </div>
        </div>
    )
}

export default TopBooks