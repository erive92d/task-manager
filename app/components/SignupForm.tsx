import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import Link from 'next/link'

type formProps = {
    name: string
    email: string
    password: string
}

export default function SignupForm() {
    const router = useRouter()
    const [userForm, setUserForm] = useState<formProps>(
        {
            name:"",
            email:"",
            password:""
        }
    )

    const [error, setError] = useState<string>("")

    const handleForm = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.currentTarget
        setError("")
        setUserForm({...userForm, [name]:value})
    }

    const handleCreate = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { name, password, email} = userForm

        if (!name || !password || !email) {
            setError("All fields are necessary")
            return
        }
        try {

            const checkUserExist = await fetch("http://localhost:3000/api/account/userexists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(email)
            })

            const { user } = await checkUserExist.json()
            
            if(user) {
              
                setError("User email already exists")
               
                return
            }

            //if user doesn't exist, proceed to registration

            const response = await fetch("http://localhost:3000/api/account/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userForm)
            })
            if(response.ok) {
                // const data = await response.json()
                //if success, empty all the inputs in the form
                const form = e.target as HTMLFormElement
                form.reset()
                router.push("/user/account/login")
                // const data = await response.json()
            }
           
          
            // const data = await test.json()
            // console.log(data)
        } catch (error) {
            console.error(error)
        }
       
    }

  return (
    <div className='flex flex-col items-center gap-2 justify-center h-screen'>
        <h1 className='text-2xl font-bold'>Create an account</h1>
        {error && <h1 className='text-white p-2 rounded-xl font-thin bg-red-500'>{error}</h1>}
        <form onSubmit={handleCreate} className='space-y-2'>
            <div className='text-white flex flex-col gap-2'>
                <input name="name" type="text" onChange={handleForm} placeholder="full name.." className={`input input-bordered input-group-md w-full max-w-xs ${error ? "input-error" : ""}`} />
                <input name="email" type="email" onChange={handleForm}  placeholder="email address.." className={`input input-bordered input-group-md w-full max-w-xs ${error ? "input-error" : ""}`} />    
                <input name="password" type="password" onChange={handleForm}  placeholder="password" className={`input input-bordered input-group-md w-full max-w-xs ${error ? "input-error" : ""}`} />    
            </div>
            <div className='flex justify-between'>
                <button className='btn btn-success'>Register</button>
                <p className='w-1/2'>
                    Already have an account? 
                    <span className='link text-sm '>
                        <Link href="/user/account/login">Log in</Link>
                    </span>
                </p>
            </div>     
        
        </form>
    
  </div>
  )
}
