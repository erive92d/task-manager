import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'


async function getUsers() {
  const response = await fetch("http://localhost:3000/api/users", {cache:"no-store"})
  if(!response.ok) return notFound()
  return response.json()
}


export default async function Landing() {
  const get = await getUsers()

  
  return (
    <div className='p-5 flex flex-col justify-center items-center h-screen'>
        <div className='flex flex-col gap-2'>
            <div className=''>
                <h1 className='text-2xl font-bold'>Landing</h1>
                <p>Creative Design</p>
            </div>
            <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam esse odit hic ipsa quia modi amet et praesentium in, veniam placeat deleniti tempore, alias earum, odio ducimus pariatur rerum?</p>
            <div>
              <Link href='/user/account/login'>
                <button className='btn btn-info'>
                  Join us
                </button>
              </Link>
              
            </div>
        </div>
    </div>
  )
}



