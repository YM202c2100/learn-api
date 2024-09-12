import { NextResponse } from "next/server"
import { ROOT_PATH } from "../config"
import { throwErrorWithStatus } from "../helper"
import { Todo } from "../../components/Todos/Todos"

export async function POST(request: Request){
  const formData = await request.formData()
  const res = await fetch(ROOT_PATH+"todo/index.php",{
    method:"POST",
    body:formData
  })

  if(!res.ok){
    throwErrorWithStatus(res)
  }

  const json = await res.json();

  return NextResponse.json(json);
}

export async function GET(){
  const res = await fetch(ROOT_PATH+"todo/index.php")

  const todos:Todo[] = await res.json()

  return NextResponse.json(todos)
}