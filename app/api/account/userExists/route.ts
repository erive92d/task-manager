import connect from "@/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        await connect()
        //we are grabbing the email provided by user
        const email = await req.json()
        //we will find if the user exist
        const user = await User.findOne({email}).select("_id")
        //return the user id if exists
        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
    }
}