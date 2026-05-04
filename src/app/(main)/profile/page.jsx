'use client'
import Profile from "@/components/ui/profile/Profile"
import Loading from "../loading";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

function Profiles() {
  const [book, setBook] = useState([]);
  const { data: session, isPending } = authClient.useSession()

  useEffect(() => {
    const bookD = JSON.parse(localStorage.getItem('bookData')) || [];
    setBook(bookD);
  }, [])

  const userInfo = session?.user;

  return (
    <div>
      {isPending ? <Loading /> : <Profile {...{userInfo, book}} />}
    </div>
  )
}

export default Profiles