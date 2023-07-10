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
                <p className="text-4xl mx-16 my-6 first-letter:uppercase lowercase"> Here are some images of before and after {postData.post_object.map((obj:any)=>(
                            (postData.post_url===obj.url 
                                &&  (
                                    obj.post_name                                 
                                )
                            )
                        ))  }</p>
                <div className="flex flex-wrap mx-16">
                        {postData.post_object.map((obj:any)=>(
                            (postData.post_url===obj.url 
                                &&  (
                                    obj.image.map((content:any,id:any)=>(
                                        <img key={id} src={content} alt={obj.post_name} className="m-2 max-h-[20rem]"/>
                                    ))
                                )
                            )
                        ))  }
                    </div>
            </section>
        </>
    )    
}

export default Post