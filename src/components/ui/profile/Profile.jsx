"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import Image from 'next/image'
import React, { useState } from 'react'
import { Card } from "@heroui/react";
import { FaUserEdit } from 'react-icons/fa';
import { authClient } from "@/lib/auth-client";

function Profile({ userInfo }) {
  const [isProfile, setIsProfile] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    await authClient.updateUser({
      image: userData.image_url,
      name: userData.name,
    })
    setIsProfile(false)
  }

  return (
    <div>
      {isProfile ? <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Full Name</Label>
        <Input placeholder="Your full name" />
      </TextField>
      <TextField
        isRequired
        name="image_url"
        type="text"
      >
        <Label>Profile Image</Label>
        <Input placeholder="Enter Img Link" />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit" className="bg-color">
          <Check />
          Save
        </Button>
        <Button onClick={()=> setIsProfile(false)} className="border border-[#6161c9] bg-[#c6c6c988]">Cancel</Button>
      </div>
    </Form> : <Card className="w-full px-8 py-12 rounded-2xl items-stretch md:flex-row bg-[#dadadfab]">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <Image
          alt={userInfo.name}
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={userInfo.image}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-xl">{userInfo.name}</Card.Title>
          <Card.Description>
            {userInfo.email}
          </Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col text-center">
            <span className="text-sm opacity-70 font-medium text-foreground">Total Buy</span>
            <span className="text-2xl">8</span>
          </div>
          <Button onClick={()=> setIsProfile(true)} className="w-full sm:w-auto bg-color"><FaUserEdit /> Edit Prpfile</Button>
        </Card.Footer>
      </div>
    </Card>}
    </div>
  )
}

export default Profile