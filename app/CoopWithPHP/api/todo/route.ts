import { NextResponse } from "next/server"
import { ROOT_PATH } from "../config"
import { throwErrorWithStatus } from "../helper"

export async function POST(request: Request){
  const formData = await request.formData()
  const res = await fetch(ROOT_PATH+"todo/index.php",{
    method:"POST",
    body:formData
  })

  if(!res.ok){
    throwErrorWithStatus(res)
  }

  const data = await res.json()
  return NextResponse.json(data);
}