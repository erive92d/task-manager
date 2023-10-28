import Image from 'next/image'
import Landing from './components/Landing'
import {getServerSession} from "next-auth"
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
    if(session) {
        console.log(session.user)
        redirect("/dashboard")
    }
  return (
    <div>
      <Landing/>
    </div>
  )
}

