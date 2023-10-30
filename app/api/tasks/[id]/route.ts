import { NextRequest, NextResponse } from "next/server"
import Task from "@/models/Task"

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