"use client"

import Link from "next/link";

interface SessionProps {
    data:any
}

export default function UserInfo({data: {user}}:SessionProps) {
  
  return (
  
        <div className="flex  justify-between border-b py-4 px-2">
            <h1 className="text-2xl font-bold">Welcome {user?.name}!</h1>
            <Link href="/add-task">
                <button className='btn btn-sm btn-success text-white'>
                    +
                </button>
            </Link>
        </div>
  )
}
