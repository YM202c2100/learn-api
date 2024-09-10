import Link from "next/link";

export default function Home(){
  return(
    <ul className="space-y-8 underline">
      <li><Link href={"/serverAction"}>Server Actions</Link></li>
      <li><Link href={"/ReactHookForm"}>React Hook Form</Link></li>
      <li><Link href={"/RouteHandlers"}>Route Handlers</Link></li>
    </ul>
  )
}