import { createPdf } from "@/app/lib/PdfGenerator";
import { blobToBuffer, uploadToXano } from "@/app/lib/util";
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
    const body = await req.json()
    try {




      // Generate the PDF (returns a Blob)
      const pdfBlob = await createPdf(body);
      console.log("PDF BLOB",pdfBlob)

      // Convert the Blob to a Buffer
      const pdfBuffer = await blobToBuffer(pdfBlob);
      console.log("PDF Buffer",pdfBlob)


    //   Upload the PDF to Xano
      const pdfUrl = await uploadToXano(pdfBuffer, body.user.id || ''); // Pass userId here
      console.log("PDF URL",JSON.stringify(pdfUrl)) 




console.log(JSON.stringify(body))
return NextResponse.json({success:true,message:"File Uploaded",url:pdfUrl,body},{status:200,headers:corsHeaders})
        
    } catch (error) {
        console.error(error)
        return NextResponse.json({success:false,error:"Internal server error",body},{status:500,headers:corsHeaders})
    }
  }