import { NextResponse } from "next/server"
import { ROOT_PATH } from "../config"

export async function POST(request: Request){
  const formData = await request.formData()
  const res = await fetch(ROOT_PATH+"todo/index.php",{
    method:"POST",
    body:formData
  })

  if(!res.ok){
    switch (res.status){
      case 404:
        throw new Error('404 : Resource Not Found')
      case 500:
        throw new Error('500 : Server Internal Error')
      default:
        throw new Error(`Error : status:${res.status}`)
    }
  }

  const data = await res.json()
  return NextResponse.json(data);
}