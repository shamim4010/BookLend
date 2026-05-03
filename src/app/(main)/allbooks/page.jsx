'use client'
import BookBanner from "@/components/shared/Header/Banner/BookBanner"
import AllBookss from "@/components/ui/homeUi/allbook/AllBookss"
import { Suspense, useState } from "react";
import Loading from "../loading";
import SearchBook from "@/components/ui/homeUi/searchBook/SearchBook";

const booksPromise = async () => {
  const res = await fetch('https://book-lend-blue.vercel.app/books.json', {
    cache: 'no-store'
  });
  return await res.json();
}

function AllBooks() {
  const [search, setSearch] = useState('');
  const booksDataP = booksPromise()
  console.log(booksDataP)
  console.log('shamim', search)
  return (
    <div>
      <BookBanner />
      <SearchBook {...{setSearch}} />
      <Suspense fallback={<Loading />}>
        <AllBookss {...{booksDataP, search}} />
      </Suspense>
    </div>
  )
}

export default AllBooks