import { Dispatch, FormEvent, useRef, useState } from "react"
import { throwErrorWithStatus } from "@/app/CoopWithPHP/api/helper";
import type { Todo } from "../Todos";

const Form:React.FC<{setTodos:Dispatch<React.SetStateAction<Todo[]>>}> = ({setTodos})=>{
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  async function submitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    
    try {
      //DBに新規Todoの情報を追加
      //戻り値はDBに追加した新規Todoのレコード
      const res = await fetch("CoopWithPHP/api/todo",{
        method: "POST",
        body: formData
      })
  
      if(!res.ok){
        throwErrorWithStatus(res)
      }

      const newTodo = await res.json()

      setTodos(todos => [...todos, newTodo])
      if(titleRef.current && bodyRef.current){
        titleRef.current.value = "";
        bodyRef.current.value = "";
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
          <input type="text" ref={titleRef} name="title" required className="border border-black"/>
        </div>
        <div className="mb-4">
          <p>説明文</p>
          <textarea ref={bodyRef} name="body" className="border border-black"/>
        </div>
        <button type="submit" className="border border-black">送信</button>
      </form>
    </div>
  )
}

export {Form}