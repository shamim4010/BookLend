'use client'
import React, { use } from 'react'
import Cards from './booksCard/Cards'

function AllBookss({booksDataP, search}) {
  const books = use(booksDataP);

  console.log(books)
  return (
    <div className='grid place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {books.map(item => {
        return (
          <Cards key={item.id} item={item} />
        )
      })}
    </div>
  )
}

export default AllBookss