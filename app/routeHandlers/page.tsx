"use client"

import { useState } from "react"

type PokeJson = {
  data:{name:string}
}

export default function Home() {
  const [pokeData, setPokeData] = useState<PokeJson>()
  const [pokeId, setPokeId] = useState<string>("")

  const submitHandler = async()=>{
    const res = await fetch(`/api?id=${pokeId}`)
    const data = await res.json()
    setPokeData(data)
  }

  return (<>
    <form>
      <input
        type="number" min={1} value={pokeId}
        onChange={(e)=>{
          if(parseInt(e.target.value) > 0){
            setPokeId(e.target.value)
          }
        }}
        className="border"
      />
      <input type="button" onClick={submitHandler} className="border p-1" value={"送信"}/>
    </form>

    <div>
      {pokeData && pokeData.data.name}
    </div>
  </>);
}
