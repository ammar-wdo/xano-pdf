import { NextResponse } from "next/server";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  export const POST = async (req:Request)=>{
    try {

const body = await req.json()


console.log(body)
return NextResponse.json({success:true,message:"data recieved",url:""},{status:200})
        
    } catch (error) {
        console.error(error)
        return NextResponse.json({success:false,error:"Internal server error"},{status:500})
    }
  }