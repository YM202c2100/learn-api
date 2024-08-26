import type { NextRequest } from "next/server"

const GET = async (request: NextRequest)=>{
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        headers:{
            "ContentType":"application/json"
        }
    })
    const data = await res.json()

    return Response.json({data})
}

export {GET}