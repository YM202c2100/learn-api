const Form:React.FC = ()=>{
  return(
    <div>
      <form action="" method="post" className="ml-4">
        <div className="mb-4">
          <p>タイトル</p>
          <input type="text" name="title" required className="border border-black"/>
        </div>
        <div className="mb-4">
          <p>説明文</p>
          <textarea name="body" className="border border-black"/>
        </div>
        <button type="submit" className="border border-black">送信</button>
      </form>
    </div>
  )
}

export {Form}