import Link from 'next/link'
import React from 'react'

export default function Landing() {
  return (
    <div className='p-5 flex flex-col justify-center items-center h-screen'>
        <div className='flex flex-col gap-2'>
            <div className=''>
                <h1 className='text-2xl font-bold'>Landing</h1>
                <p>Creative Design</p>
            </div>
            <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam esse odit hic ipsa quia modi amet et praesentium in, veniam placeat deleniti tempore, alias earum, odio ducimus pariatur rerum?</p>
            <div>
              <Link href='/user'>
                <button className='btn btn-info'>
                  Join us
                </button>
              </Link>
              
            </div>
        </div>


    </div>
  )
}
