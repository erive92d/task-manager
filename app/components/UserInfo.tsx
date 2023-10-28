"use client"

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function UserInfo() {
    const { data:session } = useSession();

    if(!session) {
        return <h1>Loading</h1>
    }

  return (
    <div>
        <div>
            <div>
                <h1>{session.user?.name}</h1>
                <h1>{session.user?.email}</h1>

            </div>
            <button className="btn" onClick={() => signOut()}> LogOut</button>
        </div>
    </div>
  )
}
