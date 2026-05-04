'use client'
import Profile from "@/components/ui/profile/Profile"
import Loading from "../loading";
import { authClient } from "@/lib/auth-client";

function Profiles() {
  const { data: session, isPending } = authClient.useSession()

  const userInfo = session?.user;

  return (
    <div>
      {isPending ? <Loading /> : <Profile {...{userInfo}} />}
    </div>
  )
}

export default Profiles