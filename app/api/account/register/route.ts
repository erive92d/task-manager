import { NextRequest, NextResponse } from "next/server";
import connect from "@/db";
import User from "@/models/User"
import bcrypt from "bcryptjs"

export const POST = async (req: NextRequest) => {
  
    try {
        const {name, email, password} = await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)
        await connect()
        const newUser = new User(
           { name, email, password: hashedPassword}
        )
        newUser.save()
        // res.status(200).json({ token, user });
        return new NextResponse(JSON.stringify(newUser), {status:200})
    } catch (error) {
        return new NextResponse("Error", {status: 500})
    }
}

// export const GET = async (request: any) => {
//     try {
//         await connect()
//         console.log("connected to the posts")
//         const users = await User.find()
//         return new NextResponse(JSON.stringify(users), {status:200})
//     } catch (error) {
//         return new NextResponse("Error", {status: 500})
//     }
// }
