import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className='flex flex-col items-center gap-2 justify-center h-screen'>
      <h1 className='text-2xl font-bold'>Task Manager</h1>
      <div className='space-y-2'>
        <div className='text-white flex flex-col gap-2'>
          <input type="text" placeholder="username" className="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="password" className="input input-bordered w-full max-w-xs" />    
        </div>
        <div className='flex gap-2'>
          <button className='btn btn-success'>Login</button>
          <Link href="/user/account/register">
            <button className='btn btn-info'>Signup</button>

          </Link>
        </div>     
        
      </div>
   
    </div>
  )
}