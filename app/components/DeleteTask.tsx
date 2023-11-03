
import { deleteTask } from '@/controllers/deleteTask'
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

type DeleteProps = {
    id:string | undefined
}

export default function DeleteTask({id}:DeleteProps) {

    const router = useRouter()

    const handleDelete = async () => {
       
        try {
            const confirm = window.confirm("Are you sure?")
            if(confirm) {
               const response = await deleteTask(id)
               if(response.ok) {
                 router.refresh()
               }
            }
            
        } catch (error) {
            console.log("could not delete")
            return
        }
    }

  return (
    <button onClick={handleDelete} className="text-red-600 text-xl">
        <AiOutlineDelete/>
    </button > 
  )
  
  
}
