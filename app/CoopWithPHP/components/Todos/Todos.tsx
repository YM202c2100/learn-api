"use client"

import { Form } from "./Form/Form"
import {List} from "./List/List"

const Todos:React.FC = ()=>{
  return(
    <div>
      <Form/>
      <List/>
    </div>
  )
}

export default Todos