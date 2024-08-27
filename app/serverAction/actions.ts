"use server"

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

    fetch("http://localhost:3001/todo",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
    })
}