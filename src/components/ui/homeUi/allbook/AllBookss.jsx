'use client'
import React, { use } from 'react'
import Cards from './booksCard/Cards'

function AllBookss({ booksDataP, search }) {
  const books = use(booksDataP);

  console.log(books)

  const filterBooks = books.filter(item => item.category === search);

  const searchBook = books.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  console.log('Search Item', searchBook)

  const catagory = ['Story','Tech','Science']

  return (
    <div className='grid place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {search.length === 0 ? books.map(item => {
        return (
          <Cards key={item.id} item={item} />
        )
      }) : catagory.includes(search) ? filterBooks.map(item => {
        return (
          <Cards key={item.id} item={item} />
        )
      }) : searchBook.map(item => {
        return (
          <Cards key={item.id} item={item} />
        )
      })}
    </div>
  )
}

export default AllBookss