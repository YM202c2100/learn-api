import { postAction } from "./actions";

export default function page(){

    return(
        <div>
            <form action={postAction}>
                <input type="number" name="id" placeholder="idを入力" className="border border-black"/><br />
                <input type="text" name="name" placeholder="名前を入力" className="border border-black"/><br />
                <button type="submit">送信</button>
            </form>
        </div>
    )
}