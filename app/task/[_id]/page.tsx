"use client"

import { getSingleTask } from '@/controllers/getSingleTask'
import { TaskProps } from '@/props'
import React, { useEffect, useState } from 'react'

type ParamProps = {
  params: {
    _id:string
  }
}

export default  function GrabTask({params}:ParamProps) {

  const [task, setTask] = useState<TaskProps | null>(null)

  useEffect(() => {
    getSingleTask(params._id)
    .then(res => setTask(res))
  }, [params])

  if(!task) return <h1>Loading</h1>

  return (
    <div className='flex flex-col justify-center items-center h-96'>
      <div className='flex flex-col items-center bg-white p-2 w-96 gap-2 rounded-lg'>
        <div>
          <h1 className='text-2xl font-bold'>{task.title}</h1>
        </div>
        <div >
          <p>{task.description}</p>
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
