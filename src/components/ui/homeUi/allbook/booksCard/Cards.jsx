import Image from 'next/image'
import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
    <div>
        <h2>{item.title}</h2>
    </div>
  )
}

export default Cards