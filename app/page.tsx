import Image from 'next/image'
import Landing from './components/Landing'
import {getServerSession} from "next-auth"
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if(session) {
      redirect("/dashboard")
  } else {
    return (
      <div>
        <Landing/>
      </div>
    )
  }
  
}

