import {FC} from "react"
import { FiExternalLink } from "react-icons/fi"

type PostType = {
    title:string,
    description:string,
    image_url:string,
    image_alt:string,
    sources:string
}

interface IUpdatesPost{
    post:PostType
}

const UpdatesPost: FC<IUpdatesPost> = ({post}): JSX.Element =>{
    return (
        <>
            <div className="mx-5 mt-5 grid h-[30%] sm:h-[20%] gap-8 overflow-hidden rounded md:grid-cols-2 bg-slate-50">
				<img className="row-span-2 rounded-l h-full md:w-full md:my-auto  bg-slate-10" src={post.image_url} alt={post.image_alt} />
				<div className="mt-10 flex flex-col gap-5 mx-5">
                    <h2 className="row-span-1 rounded my-auto text-2xl font-roboto ">{post.title}</h2>
				    <p className="rounded font-mono text-sm line-clamp-5">{post.description}</p>
                    <span className="flex  items-center text-blue-600"><a href={post.sources}>Source</a> <FiExternalLink/></span>
                </div>
                
			</div>
        </>
    )
}

export default UpdatesPost