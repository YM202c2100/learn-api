"use server"

import { redirect } from "next/navigation"

export const postAction = async (inputData:FormData)=>{
    const id = inputData.get("id")
    const name = inputData.get("name")
    if(!id || !name){
        return
    }

    const formData = {
        id:id,
        name:name
    }

    try {
        const res = await fetch("http://localhost:3001/todo",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })

        if(!res.ok){
            throw new Error(`エラーステータス：${res.status}`)
        }

    } catch (error) {
        console.error(error);
    }
    redirect("/serverAction/complete")
}