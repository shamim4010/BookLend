import React from 'react'
import { Button, Card, CloseButton } from "@heroui/react";
import Image from 'next/image';

function Cards({ item }) {
  return (
    <Card className="w-full items-stretch md:flex-row rounded-2xl ">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <Image
          alt={item.title}
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={item.image_url}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-2xl">{item.title}</Card.Title>
          <Card.Description>
            by {item.author}
          </Card.Description>
          <p className='bg-[#6161c969] text rounded-2xl w-20 py-1 text-center'>{item.category}</p>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <Button className="bg-color">Read Book</Button>
          </div>
        </Card.Footer>
      </div>
    </Card>
  )
}

export default Cards