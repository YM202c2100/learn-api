export async function POST(request: Request){
  const reqForm = await request.formData()
  const title = reqForm.get('title')
  const body = reqForm.get('body')
  return Response.json({title:title, body:body});
  
  //戻り値は？
}