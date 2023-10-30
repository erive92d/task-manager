"use client"

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