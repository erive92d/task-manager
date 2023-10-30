"use client"

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import TaskLists from "./TaskLists";

export default function UserInfo() {
    const { data:session } = useSession();

    if(!session) {
        return <h1>Loading</h1>
    }

  return (
    <div className="bg-white  flex flex-col mx-auto rounded-md p-2">
            <div className="border-b py-4">
                <h1 className="text-2xl font-bold">Welcome {session.user?.name}!</h1>
            </div>
            <div>
                <TaskLists/>
            </div>
       
    </div>
  )
}
