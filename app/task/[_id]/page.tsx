import { getSingleTask } from '@/controllers/getSingleTask'
import React from 'react'

type TaskProps = {
  params: {
    _id:string
  }
}

export default async function grabTask({params}:TaskProps) {

  const task = await getSingleTask(params._id)

  return (
    <div className='flex flex-col justify-center items-center h-96'>
      <div className='flex flex-col items-center bg-white p-2 w-96 gap-2 rounded-lg'>
        <div>
          <h1 className='text-2xl font-bold'>{task.title}</h1>
        </div>
        <div >
          <textarea className='textarea bg-white textarea-lg p-1 textarea-bordered' value={task.description} />
        </div>
        <div>
          <h1>Priority</h1>
          <p>{task.level} / 5</p>
        </div>
        <button className='btn btn-success text-white'>Start</button>
      </div>
    </div>
  )
}
