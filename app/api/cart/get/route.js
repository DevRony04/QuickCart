import connectDB from "@/config/db";
import { getAuth, User } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(request){
    try {
        const {userid} = getAuth(request)

        await connectDB()
        const user = await User.findById(userid)

        const {cartItems} = user

        return NextResponse.json({success:true,cartItems})
    } catch (error) {
        return NextResponse.json({success:false,message:error.message})
    }
}