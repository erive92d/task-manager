import { NextRequest, NextResponse } from "next/server"
import Task from "@/models/Task"
import { getServerSession } from "next-auth"

type ParamProp = {
    params: {
        id:string
    }
}

export const GET = async (req:NextRequest, {params}:ParamProp) => {
    const { id } = params
try {
    const task = await Task.findOne({_id: id})
    if(!task) {
        return new NextResponse("Task does not exist", {status:501})
    }
    return new NextResponse(JSON.stringify(task), {status:200})

} catch (error) {
    return new NextResponse("Failed", {status:500})
}  
}

export const PUT = async (req:NextRequest, {params}:ParamProp) => {

    const { id } = params
    const response = await req.json()

    const updatedTask = {
        title: response.title,
        description: response.description,
        level: response.level
    }

    try {
        const task = await Task.findByIdAndUpdate(
            {_id:id}, {title: updatedTask.title, description: updatedTask.description, level: updatedTask.level}
            )
        task.save()
  
        if(!task) {
            return new NextResponse("Task does not exist", {status:501})
        }

        return new NextResponse(JSON.stringify(task), {status:200})

    } catch (error) {
        return new NextResponse("Failed", {status:500})
    }  
}

export const DELETE = async (request:NextRequest, {params}:ParamProp) => {
    const {id} = params
   
    try {
        const task = await Task.findByIdAndDelete({_id:id})
       
  
        if(!task) {
            return new NextResponse("Task does not exist", {status:501})
        }

        return new NextResponse(JSON.stringify(task), {status:200})

    } catch (error) {
        return new NextResponse("Failed", {status:500})
    }  
}