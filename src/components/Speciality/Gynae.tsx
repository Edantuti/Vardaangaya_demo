import Image8 from "../../assets/gallery/image8.jpg"

export default function Gynae(){
    const gynaeObjectList = [
        {id:1, title:"Normal Delivery", description:"lorem", url:"normal delivery"},
        {id:2, title:"Emergency and Elective Caesarean Section", description:"lorem", url:"emergency and elective caesarean section"},
        {id:3, title:"Hysteroscopy", description:"lorem", url:"hysteroscopy"},
        {id:4, title:"Laparoscopic Tubal Ligation", description:"lorem", url:"laparoscopic"},
        {id:5, title:"Hysterectomy/ Laparotomy", description:"lorem", url:"hysterectomy or  laparotomy"},
        {id:6, title:"Assisted Reproduction", description:"lorem", url:"assisted reproduction"}
    ]
    return (
        <>
            <article className="grid grid-rows-2 sm:grid-cols-2 mx-4 rounded-sm shadow">
                <div className="my-auto sm:px-10 row-span-2">
                    <h2 className="text-2xl font-roboto mt-4">Gynaecology</h2>
                    <ul className="flex flex-col gap-4 text-xl font-mono my-8">
                        {gynaeObjectList.map((obj)=>(
                            <li className="flex flex-col">
                                <h3>{obj.title}</h3>
                                <p className="line-clamp-1 text-sm">{obj.description}</p>
                                <a href={`gynae/${obj.url}`} className="text-xs text-blue-600">Read more</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <img src={Image8} alt="gynaecology" className="h-auto w-[80%] rounded mx-auto my-auto shadow row-span-2"/>
            </article>
        </>
    )
}
