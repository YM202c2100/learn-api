import { FormEvent, useState } from "react"
import { throwErrorWithStatus } from "@/app/CoopWithPHP/api/helper";

const Form:React.FC = ()=>{
  async function submitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    
    try {
      const res = await fetch("CoopWithPHP/api/todo",{
        method: "POST",
        body: formData
      })
  
      if(!res.ok){
        throwErrorWithStatus(res)
      }

    } catch (error) {
      console.error(error)
    }
  }

  return(
    <div>
      <form onSubmit={submitHandler} method="post" className="ml-4">
        <div className="mb-4">
          <p>タイトル</p>
          <input type="text" name="title" required className="border border-black"/>
        </div>
        <div className="mb-4">
          <p>説明文</p>
          <textarea name="body" className="border border-black"/>
        </div>
        <button type="submit" className="border border-black">送信</button>
      </form>
    </div>
  )
}

export {Form}