import { NextResponse } from "next/server";
import connect from "@/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    try {
        await connect()
        console.log("connected to the posts")
        return new NextResponse("Success")
    } catch (error) {
        return new NextResponse("Error")
    }
}