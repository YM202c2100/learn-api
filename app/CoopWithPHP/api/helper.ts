export function throwErrorWithStatus(response:Response){
  switch (response.status){
    case 404:
      throw new Error('404 : Resource Not Found')
    case 500:
      throw new Error('500 : Server Internal Error')
    default:
      throw new Error(`Error : status-${response.status}`)
  }
}