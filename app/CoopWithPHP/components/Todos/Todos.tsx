"use client"

import { useState } from "react"
import { Form } from "./Form/Form"
import {List} from "./List/List"

export type Todo = {
  id:number,
  title:string,
  body:string,
  completed:boolean
}

const Todos:React.FC = ()=>{
  const [todos, setTodos] = useState<Todo[]>([]);
  return(
    <div>
      <Form setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Todos