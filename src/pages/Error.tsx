import {FC} from "react"

const ErrorElement: FC = ():JSX.Element =>{
    return (
        <>
            <h1 className="text-4xl text-center mt-[20%]">Error 404</h1>
            <p className="text-2xl text-center my-5">Not Found</p>
        </>
    )
} 

export default ErrorElement