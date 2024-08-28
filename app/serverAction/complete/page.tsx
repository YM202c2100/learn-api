import Link from "next/link";

export default function page(){
  return(
    <div>
      <p>送信完了</p>
      <Link 
        href={"/serverAction"}
        className="border border-black"
      >フォーム入力画面に戻る</Link>
    </div>
  )
}