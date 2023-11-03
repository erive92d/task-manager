
import Link from "next/link"
import {useState, useEffect} from "react"
import { getTasks } from "@/controllers/getTasks"
import { getMe } from "@/controllers/getMe"
import {AiOutlineDelete} from "react-icons/ai"
import {BiEditAlt} from "react-icons/bi"
import { TaskProps } from "@/props"
import DeleteTask from "./DeleteTask"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

const getData = async () => {
    const tasks = await getMe()
    return await tasks.json()
}


export default async function TaskLists() {
    // const tasks = await getTasks(email)
    // console.log(tasks)
    // const [tasks, setTasks] = useState<TaskProps[] | null>(null)
    // useEffect(() => {
    //     get
    // }, [])
    const tasks = await getData()


  return (
    <div className="">
        {tasks ? tasks.map((task) => (
            <div className="flex justify-between border-b py-2 px-2" key={task._id}>
                <div className="">
                    <Link href={`/task/${task._id}`}>
                        <h1 className="font-bold text-lg">
                            {task.title}
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <Link href={`/edit-task/${task._id}`} className="text-orange-300 text-xl">
                        <BiEditAlt />
                    </Link>
                    <DeleteTask id={task._id}/>
                  
                 </div>


            </div>
        ))
            :
            <div className="h-96 flex flex-col items-center justify-center">
                <span className="loading loading-ring loading-lg"></span>
            </div>
    }

    </div>
  )
}


