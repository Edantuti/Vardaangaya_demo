import Image4 from "../../assets/gallery/image4.jpg"

export default function Ortho(){
    const orthoObjectList = [
        {id:1, title:"Total Hip and Knee Replacement", description:"Vardaan offers best hip and knee replacement in Gaya. We arrange best products from India, and we also ensure a quick recovery (called rehabilitation). Our patients start walking on their feet within 2 days of the surgery. Today, let us help you in understanding the hip and knee replacement.", url:"total hip and knee replacement"},
        {id:2, title:"Arthroscopy & Sports Surgery", description:"Vardaan provides timely and accurate diagnosis of all sports related injuries. It also provides best arthroscopy in Gaya. Sports are very important for overall well-being of a person, especially in the young age. Sons and daughters of Gaya have represented the state and country in various sports. However, the sports also sometimes causes sprains and other injuries. Vardaan Gaya addresses to these sports injuries on priority to ensure you are up and running (literally) in no time!", url:"arthrosocopy"},
        {id:3, title:"Spine and backache Surgery",description:"Vardaan Hospital in Gaya offers Spine surgery which is offered by very few hospitals. In the following paragraphs, we will try to summarise few of the common issues related to back and spines. In the coming months, Vardaan Hospital will also try to upload some videos on taking care of the back. Sitting and standing straight, for example, helps a lot and is easily achievable with some discipline.", url:"spine and backache surgery"},
        {id:4, title:"Complex Orthopaedics Trauma",description:"", url:"complex orthopaedics trauma"},
        {id:5, title:"Rheumatology", description:"", url:"rheumatology"}
    ]

    return (
        <>
            <article className="grid grid-rows-2 sm:grid-cols-2 mx-4">
                <img src={Image4} alt="facilities" className="h-auto w-[80%] rounded mx-auto my-auto shadow  row-span-2 order-1" />
                    <div className="my-auto px-10 row-span-2 order-2">
                        <h2 className="text-2xl font-roboto mt-4">Orthopaedics</h2>
                        <ul className="flex flex-col gap-4 text-xl font-mono my-6"> 
                        {orthoObjectList.map((obj)=>(<li key={obj.id} className="flex flex-col">
                                <h3>{obj.title}</h3>
                                {obj.description && <p className="line-clamp-2 text-sm">{obj.description}</p>}
                                {obj.url && <a href={`ortho/${obj.url}`} className="text-blue-600 text-xs">Read more</a>}
                            </li>)
                        )}
                        </ul>
                    </div>
            </article>
        </>
    )
}