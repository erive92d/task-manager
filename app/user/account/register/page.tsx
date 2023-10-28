"use client"

import React, { FormEvent, useState } from 'react'

type formProps = {
    name: string
    email: string
    password: string
}

export default function Signup() {

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

            const checkUserExist = await fetch("http://localhost:3000/api/account/userExists", {
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
    {error && <h1 className='text-red-500'>{error}</h1>}
    <form onSubmit={handleCreate} className='space-y-2'>
      <div className='text-white flex flex-col gap-2'>
        <input name="name" type="text" onChange={handleForm} placeholder="full name.." className="input input-bordered w-full max-w-xs" />
        <input name="email" type="text" onChange={handleForm}  placeholder="email address.." className="input input-bordered w-full max-w-xs" />    
        <input name="password" type="text" onChange={handleForm}  placeholder="password" className="input input-bordered w-full max-w-xs" />    
      </div>
      <div>
        <button className='btn btn-success'>Register</button>
      </div>     
      
    </form>
 
  </div>
  )
}
