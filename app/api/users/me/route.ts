import { NextResponse } from "next/server";
import connect from "@/db";
import User from "@/models/User"
import { getServerSession } from "next-auth";

export const GET = async () => {
    const session = await getServerSession()
    // if(!session) {
    //     return new NextResponse(
    //         JSON.stringify({
    //             status: 'fail',
    //             message: 'You are not logged in',
    //         }),
    //         { status: 401 }
    //     );
    // }

    const userEmail = session?.user?.email
    try {
        await connect()
        const users = await User.findOne({email:userEmail}).populate("tasks")
        if(!users) {
            return new NextResponse("Could not find user", {status: 501})
        }
        return new NextResponse(JSON.stringify(users), {status:200})
    } catch (error) {
        return new NextResponse("Error", {status: 500})
    }
}
