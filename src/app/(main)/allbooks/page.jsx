import BookBanner from "@/components/shared/Header/Banner/BookBanner"
import AllBookss from "@/components/ui/homeUi/allbook/AllBookss"
import { Suspense } from "react";
import Loading from "../loading";

const booksPromise = async () => {
  const res = await fetch('https://book-lend-blue.vercel.app/books.json', {
    cache: 'no-store'
  });
  return await res.json();
}

function AllBooks() {
  const booksDataP = booksPromise()
  console.log(booksDataP)
  return (
    <div>
      <BookBanner />
      <Suspense fallback={<Loading />}>
        <AllBookss {...{booksDataP}} />
      </Suspense>
    </div>
  )
}

export default AllBooks