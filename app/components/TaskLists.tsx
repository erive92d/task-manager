import {useState, useEffect} from "react"
import { getTasks } from "@/controllers/getTasks"
import { getMe } from "@/controllers/getMe"
import Link from "next/link"

interface TaskProps {
    title: string
    level: number
    description:string
    _id:string
}


export default function TaskLists() {

    const [tasks, setTasks] = useState<TaskProps[] | null>(null)
    useEffect(() => {
        const grabTasks = async () => {
            const data = await getMe()
            setTasks(data.tasks)
        }
        grabTasks()
    }, [])
 
  return (
    <div>
        {tasks && tasks.map((task) => (
            <div className=" border-b py-2" key={task._id}>
                <Link href={`/task/${task._id}`}>
                    <h1>
                        {task.title}
                    </h1>
                </Link>
              
            </div>
        ))}

    </div>
  )
}


