"use server"

import { redirect } from "next/navigation"
import { FormState } from "./page"

export const postAction = async (prev:FormState, inputData:FormData)=>{
    const id = inputData.get("id")
    if(!id){
        return {errors:{id:"idが不足しています"}}
    }
    const name = inputData.get("name")
    if(!name){
        return {errors:{name:"nameが不足しています"}}
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