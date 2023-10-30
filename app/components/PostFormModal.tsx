"use client"
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react';
type TaskProps = {
    title: string
    description: string
    level:number
}

export default function PostFormModal() {
    const router = useRouter()
    const { data } = useSession();

    const userEmail = data?.user?.email

    const [task, setTask] = useState<TaskProps>({
        title:"",
        description: "",
        level: 0
    })
    const [error, setError] = useState<string>("")

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        body: JSON.stringify({title, description, level, userEmail})
    })

    if(!response.ok) {
        setError("Unable to add task")
        return;
    }


    setTask({
        title: "",
        description: "",
        level: 0
    })

    router.refresh()

  }


  return (
    <div>
        <label htmlFor="my_modal_6" className="btn btn-sm btn-success text-white">+</label>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box text-gray-700 bg-white">
                <h3 className="font-bold text-lg">Enter Task</h3>
                <form onSubmit={handleSubmit} className='text-white flex flex-col'>
                    <label className='text-gray-700' htmlFor='title'>Title</label>
                        <input name="title"  onChange={handleRange} className='input input-ghost input-bordered ' value={task.title} type='text'/>
                        <label className='text-gray-700' htmlFor='description'>Description</label>
                        <input name="description"  onChange={handleRange} className=' textarea textarea-ghost textarea-bordered' value={task.description} type='text'/>
                    <label className='text-gray-700' htmlFor='level'>Priority Level</label>
                        <input name="level" type="range" min={0} max={5} onChange={handleRange} value={task.level} className="range range-primary" />
              
                <div className="modal-action">
                    {error && <h1 className='text-white bg-red-500 p-2 rounded'>{error}</h1>}
                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                    <button value="submit" className='btn btn-success text-white'>Post</button>
                </div>
                </form>
                </div>
            </div>
    </div>
   
  )
}
