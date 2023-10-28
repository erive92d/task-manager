
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

type formProps = {
    email: string
    password: string
  }

export default function LoginForm() {

    const [userForm, setUserForm] = useState<formProps>(
        {
          email:"",
          password:""
        }
      )
    
      const [error, setError] = useState<string>("")
    
      const router = useRouter()
    
      const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault()
          const { name , value } = e.currentTarget
          setUserForm({...userForm, [name]:value})
      }
    
      const handleLogin = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    
        const { email, password } = userForm
    
        if(!email || !password) {
          setError("Must not leave blanks")
          return
        }
    
        try {
          const res = await signIn("credentials", {
            email, password, redirect: false
          })
          if(!res || !res.ok) {
            setError("Unable to log in")
            return 
          }
          if(res.error) {
            setError("Invalid Creds")
            return
          }
        
         
    
          router.push("/dashboard")
        } catch (error) {
          console.log(error)
        }
        // const form = e.target as HTMLFormElement
        // form.reset()
      }
    
    
      return (
        <div className='flex flex-col items-center gap-2 justify-center h-screen'>
          <h1 className='text-2xl font-bold'>Task Manager</h1>
          {error && <h1 className='bg-red-500 p-2 rounded-xl text-white'>{error}</h1>}
          <form onSubmit={handleLogin} className='space-y-2'>
            <div className='text-white flex flex-col gap-2'>
              <input name="email" onChange={handleFormChange} type="text" placeholder="email" className="input input-bordered w-full max-w-xs" />
              <input name="password" onChange={handleFormChange} type="text" placeholder="password" className="input input-bordered w-full max-w-xs" />    
            </div>
            <div className='flex gap-2'>
              <button  className='btn btn-success'>Login</button>
              <Link href="/user/account/register">
                <button className='btn btn-info'>Signup</button>
    
              </Link>
            </div>     
            
          </form>
       
        </div>
      )
}
