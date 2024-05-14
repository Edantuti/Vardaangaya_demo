import { useRouteError } from "react-router-dom"

export default function ErrorElement(){
  //@ts-ignore
  const error:{status:string, statusText:string, data:string} = useRouteError()
  console.error(error)
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <h1>{error.status}-{error.statusText}</h1>
      <p>{error.data}</p>
    </div>
  )
}