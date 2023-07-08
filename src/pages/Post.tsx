import { FC } from "react";
import { useLoaderData } from "react-router-dom";




const Post:FC = ():JSX.Element =>{
    const postData:any = useLoaderData() as Promise<any>;
    
    return(
        <>
            <section className="h-full">
                <h3 className="ml-20 my-10 text-4xl font-roboto">{postData.post_object.map((obj:any)=>(postData.post_url===obj.url&&(obj.post_name)))}</h3>
                <article className="ml-20 flex flex-col w-[60%]">
                    {postData.post_object.map((obj:any)=>(
                        (postData.post_url===obj.url 
                            &&  (
                                obj.post_content.map((content:any,id:any)=>(
                                    <p key={id} className="my-2">{content}</p>
                                ))
                            )
                        )
                    ))}
                </article>
            </section>
        </>
    )    
}

export default Post