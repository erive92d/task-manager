import { NextResponse } from "next/server";
import connect from "@/db";
import User from "@/models/User"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async (request: any) => {
  
    const session = await getServerSession(authOptions)
    console.log(session,"server")
    if(!session) {
        return new NextResponse(
            JSON.stringify({
                status: 'fail',
                message: 'You are not logged in',
            }),
            { status: 401 }
        );
    }

    const userEmail = session?.user?.email

    try {
        await connect()
        const users = await User.findOne({email:userEmail}).populate("tasks")
        console.log(users)
        return new NextResponse(JSON.stringify(users), {status:200})
    } catch (error) {
        return new NextResponse("Error", {status: 501})
    }
}
