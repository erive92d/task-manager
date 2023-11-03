"use client"
import React from 'react'
import UserInfo from '../components/UserInfo'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import TaskLists from '../components/TaskLists';
export default function Home() {
  
    const { data:session } = useSession();

    if(!session) {
        return <h1>Loading</h1>
    }


  return (
    <div className="bg-white flex flex-col mx-auto rounded-md w-96">
          <UserInfo data={session}/>
          <TaskLists/>
    </div>
  )
}
