import { NextResponse } from "next/server";
import connect from "@/db";
import User from "@/models/User"

export const GET = async (request: any) => {
    try {
        await connect()
        console.log("connected to the posts")
        const users = await User.find()
        return new NextResponse(JSON.stringify(users), {status:200})
    } catch (error) {
        return new NextResponse("Error", {status: 500})
    }
}
