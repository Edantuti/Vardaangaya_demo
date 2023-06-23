import Image4 from "../../assets/gallery/image4.jpg"

export default function Ortho(){
    const orthoObjectList = [
        {id:1, title:"Total Hip and Knee Replacement", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed maxime, rem possimus fugiat aliquam hic voluptatem inventore obcaecati distinctio, eveniet adipisci odio dolor esse ipsum itaque? Asperiores, laudantium. Deserunt!", url:"total hip and knee replacement"},
        {id:2, title:"Arthroscopy & Sports Surgery", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed maxime, rem possimus fugiat aliquam hic voluptatem inventore obcaecati distinctio, eveniet adipisci odio dolor esse ipsum itaque? Asperiores, laudantium. Deserunt!", url:"arthrosocopy"},
        {id:3, title:"Spine and backache Surgery",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed maxime, rem possimus fugiat aliquam hic voluptatem inventore obcaecati distinctio, eveniet adipisci odio dolor esse ipsum itaque? Asperiores, laudantium. Deserunt!", url:"spine and backache surgery"},
        {id:4, title:"Complex Orthopaedics Trauma",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed maxime, rem possimus fugiat aliquam hic voluptatem inventore obcaecati distinctio, eveniet adipisci odio dolor esse ipsum itaque? Asperiores, laudantium. Deserunt!", url:"complex orthopaedics trauma"},
        {id:5, title:"Rheumatology", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed maxime, rem possimus fugiat aliquam hic voluptatem inventore obcaecati distinctio, eveniet adipisci odio dolor esse ipsum itaque? Asperiores, laudantium. Deserunt!", url:"rheumatology"}
    ]

    return (
        <>
            <article className="grid grid-rows-2 sm:grid-cols-2 mx-4 rounded-sm shadow">
                <img src={Image4} alt="facilities" className="h-auto w-[80%] rounded mx-auto my-auto shadow  row-span-2" />
                    <div className="my-auto sm:px-10 row-span-2">
                        <h2 className="text-2xl font-roboto mt-4">Orthopaedics</h2>
                        <ul className="flex flex-col gap-4 text-xl font-mono my-6"> 
                        {orthoObjectList.map((obj)=>(<li key={obj.id} className="flex flex-col">
                                <h3>{obj.title}</h3>
                                <p className="line-clamp-2 text-sm">{obj.description}</p>
                                <a href={`ortho/${obj.url}`} className="text-blue-600 text-xs">Read more</a>
                            </li>)
                        )}
                        </ul>
                    </div>
            </article>
        </>
    )
}