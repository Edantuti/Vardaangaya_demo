import { Link } from "react-router-dom"
import Image8 from "../../assets/gallery/image8.jpg"

export default function Gynae(){
    const gynaeObjectList = [
        {id:1, title:"Normal Delivery", description:"", url:"normal delivery"},
        {id:2, title:"Emergency and Elective Caesarean Section", description:"", url:"emergency and elective caesarean section"},
        {id:3, title:"Hysteroscopy", description:"", url:"hysteroscopy"},
        {id:4, title:"Laparoscopic Tubal Ligation", description:"", url:"laparoscopic"},
        {id:5, title:"Hysterectomy/ Laparotomy", description:"", url:"hysterectomy or  laparotomy"},
        {id:6, title:"Assisted Reproduction", description:"", url:"assisted reproduction"}
    ]
    return (
        <>
            <article className="grid grid-rows-2 sm:grid-cols-2 mx-4">
                <div className="my-auto px-10 row-span-2 order-2 md:order-1">
                    <h2 className="text-2xl font-roboto mt-4">Gynaecology</h2>
                    <ul className="flex flex-col gap-4 text-xl font-mono my-8">
                        {gynaeObjectList.map((obj)=>(
                            <li key={obj.id} className="flex flex-col">
                                <h3>{obj.title}</h3>
                                {obj.description && <p className="line-clamp-1 text-sm">{obj.description}</p>}
                                {obj.url && <Link to={`/gynae/${obj.url}`} className="text-xs text-blue-600">Read more</Link>}
                            </li>
                        ))}
                    </ul>
                </div>
                <img src={Image8} alt="gynaecology" className="h-auto w-[80%] rounded mx-auto my-auto shadow row-span-2 order-1 md:order-2"/>
            </article>
        </>
    )
}
