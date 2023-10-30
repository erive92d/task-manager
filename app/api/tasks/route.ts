import { NextRequest, NextResponse } from "next/server";
import connect from "@/db";
import Task from "@/models/Task"
import { useSession } from "next-auth/react";
import User from "@/models/User";
import { getServerSession } from "next-auth";

export const POST = async (req: NextRequest) => {
    const session = await getServerSession()
    if(!session) {
        return new NextResponse(
            JSON.stringify({
                status: 'fail',
                message: 'You are not logged in',
            }),
            { status: 401 }
        );
    }

    const userEmail = session?.user?.email || null


    try {
        const {title, level, description} = await req.json()
        if(!userEmail) {
            return new NextResponse("User must be logged in", {status:500})
        }
        await connect()

        const newTask = new Task(
            { title, level, description}
         )

         newTask.save()
 
        const user = await User.findOneAndUpdate(
            {
                email: userEmail
            }, 
            {
                $addToSet: { tasks: newTask}
            }, {
                new: true
            }
        )
        return new NextResponse(JSON.stringify(user), {status:200})
    } catch (error) {
        return new NextResponse("Error", {status: 500})
    }
}

export const GET = async (req:NextRequest, res:NextResponse) => {
       
    try {
        // const {userEmail} = await req.json()
        // const user = await User.find({email: userEmail})
        // console.log(user)
        const tasks = await Task.find()
        return new NextResponse(JSON.stringify(tasks), {status:200})

    } catch (error) {
        
    }
}
