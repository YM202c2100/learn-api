"use client"

import { FormEvent, useState } from "react"
import { throwErrorWithStatus } from "../../api/helper";

const Form:React.FC = ()=>{
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
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

      setIsSuccess(true)

    } catch (error) {
      setIsSuccess(false)
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

      <div>
        {isSuccess && "追加完了-データベースを確認してください"}
      </div>
    </div>
  )
}

export {Form}