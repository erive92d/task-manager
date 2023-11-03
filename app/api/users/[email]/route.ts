import { NextResponse } from "next/server";
import connect from "@/db";
import User from "@/models/User"

export const GET = async (request: any, {params}:string) => {

    const {email} = params
   
    const userEmail = email

    try {
        await connect()
        const users = await User.findOne({email:userEmail}).populate("tasks")
        
        if(!users) {
             return new NextResponse("Cond find tasks", {status: 502})

        }
        return new NextResponse(JSON.stringify(users), {status:200})
    } catch (error) {
        return new NextResponse("Error", {status: 501})
    }
}
