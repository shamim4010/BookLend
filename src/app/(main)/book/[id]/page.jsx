import React, { Suspense } from 'react'
import Loading from '../../loading';
import SingaleBook from '@/components/ui/homeUi/singaleBook/SingaleBook';

const booksPromise = async () => {
   const res = await fetch('https://book-lend-blue.vercel.app/books.json', {
    cache: 'no-store'
  });
  return await res.json(); 
}

async function BookDetails({ params }) {
    const booksData = booksPromise();
    const name = await params;
    console.log(name.id)
    let names = '';
    for (let i = 0; i < name.id.length; i++){
      console.log(name.id[i]);
      if (name.id[i] === '%' ){
        names += ' ';
        i+=2
      }
      else{
        names += name.id[i];
      }
    }
    console.log(names);

    return (
        <div>
            <Suspense fallback={<Loading />} >
            <SingaleBook {...{booksData, names}} />
            </Suspense>
        </div>
    )
}

export default BookDetails