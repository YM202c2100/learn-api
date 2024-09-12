import { Dispatch, useEffect } from "react";
import { Todo } from "../Todos";

const List:React.FC<{todos: Todo[], setTodos:Dispatch<React.SetStateAction<Todo[]>>}> = ({todos, setTodos})=>{
  useEffect(()=>{
    async function fetchAllTodos(){
      const res = await fetch("CoopWithPHP/api/todo")
      const todos:Todo[] = await res.json();
      setTodos(todos);
    }

    fetchAllTodos()
  },[])
  return(
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <div>
            <span>タイトル:</span>
            <span>{todo.title}</span>
          </div>
          <div>
            <span>追記:</span>
            <span>{todo.body}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export {List};