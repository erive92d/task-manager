"use client"
import {getServerSession} from "next-auth"
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignupForm from '@/app/components/SignupForm'



// eslint-disable-next-line @next/next/no-async-client-component
export default  function Signup() {

    // const session = await getServerSession(authOptions)

    // if(session) {
    //     console.log(session)
    //     redirect("/dashboard")
    // }
    return <SignupForm />
  
}
