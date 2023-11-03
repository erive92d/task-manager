import { TaskProps } from "@/props"

export const putEditTask = async (id:string | undefined, newTask:TaskProps) => {
  
    try {
        const response = await fetch(`http://localhost:3000/api/tasks/${id}` , {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            }, 
            body: JSON.stringify(newTask),
          
        })

        return response

    } catch (error) {
        throw new Error("Failed to fetch single task")
    }
}