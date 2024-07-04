import { NextResponse } from "next/server";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
  }


  export const POST = async (req:Request)=>{
    try {

const body = await req.json()


console.log(body)
return NextResponse.json({success:true,message:"data recieved",url:""},{status:200,headers:corsHeaders})
        
    } catch (error) {
        console.error(error)
        return NextResponse.json({success:false,error:"Internal server error"},{status:500,headers:corsHeaders})
    }
  }