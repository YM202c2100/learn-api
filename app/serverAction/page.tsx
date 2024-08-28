"use client"

import { useFormState, useFormStatus } from "react-dom";
import { postAction } from "./actions";


const SubmitButton:React.FC = ()=>{
    const {pending} = useFormStatus()
    return(
        <button 
            type="submit"
            disabled={pending}
            className="border border-black"
        >
            {pending ? "送信中…":"送信する"}
        </button>
    )
} 

export type FormState = {
    values?:{
        name?:string,
        id?:number
    },
    errors?:{
        name?:string,
        id?:string
    }
}

export default function page(){
    const [formState, formAction] = useFormState<FormState, FormData>(postAction, {})
    return(
        <div>
            <form action={formAction}>
                <input type="number" name="id" placeholder="idを入力" className="border border-black"/><br />
                <p>{formState.errors?.id && formState.errors.id}</p>
                <input type="text" name="name" placeholder="名前を入力" className="border border-black"/><br />
                <p>{formState.errors?.name && formState.errors.name}</p>
                <SubmitButton/>
            </form>
        </div>
    )
}