'use client'
import React, { use } from 'react'
import Cards from './booksCard/Cards'

function AllBookss({booksDataP}) {
  const books = use(booksDataP)
  console.log(books)
  return (
    <div>
      {books.map(item => {
        return (
          <Cards key={item.id} item={item} />
        )
      })}
    </div>
  )
}

export default AllBookss