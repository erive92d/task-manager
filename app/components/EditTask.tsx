"use client"

import { useRouter } from 'next/navigation'

import React, { FormEvent, useState } from 'react'
import { TaskProps } from '@/props'
import { putEditTask } from '@/controllers/editTask'

export default function EditTask(task:TaskProps) {
    console.log(task)
    const router = useRouter()
    const [newTask, setNewTask] = useState<TaskProps>(
        {
            title: task.title,
            description: task.description,
            level: task.level
        }
    )

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    const {name, value } = e.currentTarget
    setNewTask({
        ...newTask, [name]:value
    })
 }

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
 
    try {
        const response = await putEditTask(task._id, newTask)
        if(response.ok) {
            router.push("/dashboard")
            router.refresh()
        } else {
            alert("Unable to edit")
            return
        }

        
    } catch (error) {
        alert("Failed to edit")
        return
    }
 }

 return (
     <div className='flex flex-col justify-center items-center h-96'>
     <form onSubmit={handleSubmit} className='bg-white p-4 rounded w-96 h-96 flex flex-col gap-4'>
             <div className='flex flex-col'>
                 <label htmlFor='title'>Title</label>
                 <input name="title" onChange={handleChange} value={newTask.title} className='input input-ghost px-2 input-bordered bg-white'  type="text" />
             </div>
             <div className='flex flex-col'>
                 <label htmlFor='description'>Description</label>
                 <textarea name="description" onChange={handleChange} value={newTask.description} className='textarea px-2 textarea-lg text-sm textarea-bordered bg-white' />
             </div>
             <div className='flex flex-col'>w
                 <label className='text-gray-700' htmlFor='level'>Priority Level</label>
                 <input name="level" type="range" onChange={handleChange} value={newTask.level} min={0} max={5}  className="range range-primary" />
             </div>
             <div>
                 {/* {error && <h1 className='text-white bg-red-500  p-2 text-sm rounded'>{error}</h1>} */}
                 <button className='btn btn-warning text-white'>Finish Edit</button>
             </div>
         </form>
 </div>
   
 )
  
}
