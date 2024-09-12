import { Todo } from "../Todos";

const List:React.FC<{todos: Todo[]}> = ({todos})=>{
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
            <span>{todo.title}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export {List};