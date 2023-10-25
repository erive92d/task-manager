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
        <div>
          <button className='btn btn-success'>Login</button>
        </div>     
        
      </div>
   
    </div>
  )
}
