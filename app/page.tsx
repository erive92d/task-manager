import Image from 'next/image'
import Landing from './components/Landing'
import {getServerSession} from "next-auth"
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UserInfo from './components/UserInfo'
import TaskLists from './components/TaskLists'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  if(!session) {
      redirect("/user")
  } else {
  return (
    <div className="bg-white flex flex-col mx-auto rounded-md w-96">
          <UserInfo data={session}/>
          {/* <TaskLists session={session}/> */}
          <TaskLists />
    </div>
  )
  }
  
}

