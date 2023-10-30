import React from 'react'
import UserInfo from '../components/UserInfo'
import Link from 'next/link'

export default async function Home() {
  
  return (
    <div className='p-4'>
        <div className='flex justify-between py-2'>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
          <Link href="/add-task">
            <button className='btn btn-sm btn-success text-white'>
              +
            </button>
          </Link>
        </div>
          <UserInfo />
    </div>
  )
}
