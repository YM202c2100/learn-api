'use client'
import { FieldValues, useForm } from "react-hook-form";
import { useRouter  } from "next/navigation";

export default function Contact(){
  const router = useRouter();

  interface IformData {
    name:string
    email:string
    comment:string
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IformData>()

  const onSubmit = async (data:FieldValues) => {
    try {
      // const endpoint = process.env.NEXT_PUBLIC_FETCH_URL as string
      // console.log(endpoint);
      // const response = await fetch(endpoint, {
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      //   body:JSON.stringify(data)
      // })
      // const result = await response.json()
      // router.push('/complete');
      console.log(data);
      router.push("/ReactHookForm")
      
    } catch (error) {
      console.log(error);
      // router.push('/error');
      router.push("/ReactHookForm")
    }
      
  }

  return (
    <>
    <section className="Contact">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <label>
              <span className="required">必須</span>
              <span className="label">お名前（漢字）</span>
              <input
                type="text"
                {...register("name", {
                  required: "お名前（漢字）を入力してください",
                  maxLength: {
                    value: 20,
                    message: "20文字以下で入力してください",
                  },
                })}
                className="border border-black"
              />
            </label>
            {errors.name?.message && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          <div className="form-item">
            <label>
              <span className="required">必須</span>
              <span className="label">メールアドレス</span>
              <input
                type="text"
                {...register("email", {
                  required: "メールアドレスを入力してください",
                  maxLength: {
                    value: 50,
                    message: "50文字以下で入力してください",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                    message: "正しいメールアドレスを入力してください。",
                  },
                })}
                className="border border-black"
              />
            </label>
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="form-item">
            <label>
              <span className="required">必須</span>
              <span className="label">コメント</span>
              <textarea
                {...register("comment", {
                  required: "コメントを入力してください",
                  maxLength: {
                    value: 1000,
                    message: "1000文字以下で入力してください",
                  },
                })}
                className="border border-black"
              />
            </label>
            {errors.comment?.message && (
              <p className="error-message">{errors.comment.message}</p>
            )}
          </div>
          <div className="submit-button">
            <button type="submit" className="border border-black">送信</button>
          </div>
        </form>
      </section>
	  </>
    )
}