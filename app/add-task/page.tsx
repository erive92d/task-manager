"use client"
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'
import { useState } from 'react'

type TaskProps = {
    title: string
    description: string
    level:number
}

export default function AddTask() {

    const router = useRouter()

    const [task, setTask] = useState<TaskProps>({
        title:"",
        description: "",
        level: 0
    })
    const [error, setError] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    setError("")
    const {name, value} = e.currentTarget
    setTask({...task, [name]: value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const {title, description, level} = task

    if(!title || !description) {
        setError("Cannot leave empty!")
        return
    }
    const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({title, description, level})
    })

    if(!response.ok) {
        setError("Unable to add task")
        return;
    }

    router.push("/dashboard")
    router.refresh()
    setTask({
        title: "",
        description: "",
        level: 0
    })

  }
   

  return (
    <div className='flex flex-col justify-center items-center h-96'>
        <form onSubmit={handleSubmit} className='bg-white p-4 rounded w-96 h-96 flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor='title'>Title</label>
                    <input name="title" onChange={handleChange} value={task.title} className='input input-ghost px-2 input-bordered bg-white'  type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='description'>Description</label>
                    <textarea name="description" onChange={handleChange} value={task.description} className='textarea px-2 textarea-lg text-sm textarea-bordered bg-white' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-gray-700' htmlFor='level'>Priority Level</label>
                    <input name="level" type="range" onChange={handleChange} value={task.level} min={0} max={5}  className="range range-primary" />
                </div>
                <div>
                    {error && <h1 className='text-white bg-red-500  p-2 text-sm rounded'>{error}</h1>}
                    <button className='btn btn-success text-white'>Submit</button>
                </div>
            </form>
    </div>
  
  )
}

