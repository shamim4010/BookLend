import React, { use } from 'react'
import Card from './sbookCard/Card';

function SingaleBook({ booksData, names }) {
    const books = use(booksData)
    const singleBook = books.filter(item => item.title === names);
    console.log(singleBook)
    return (
        <div>
            {singleBook.map(item => {
                return (
                    <Card key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default SingaleBook