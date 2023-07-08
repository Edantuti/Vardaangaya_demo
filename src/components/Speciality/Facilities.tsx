
import { Link } from "react-router-dom"
import XRay from "../../assets/Infra.jpg"


export default function Facilities(){
    const facilitiesObjectList = [
        {id:1, title:"X-Ray Centre (High frequency X-ray with CareStream computerised radiography)",description:"", url:"x-ray"},
        {id:2, title:"Ultrasound", description:"", url:"ultrasound"},
        {id:3, title:"Physiotherapy Centre (with Sports Rehabilitation)", description:"", url:"physiotherapy"},
        {id:4, title:"24x7 In-House Pharmacy", description:"", url:"pharmacy"},
        {id:5, title:"Pathology collection centre in collaboration with Global Diagnostics, a channel partner of Lal Path Labs, New Delhi", description:"", url:"pathology"}
    ]
    return(
        <>
        <article className="grid grid-rows-2 sm:grid-cols-2 mx-4">
            <img src={XRay} alt="facilities" className="row-span-2 rounded mx-auto my-auto shadow order-1" />
            <div className="my-auto px-10 row-span-2 order-2">
                <h2 className="text-2xl font-roboto mt-4">Facilities @ Vardaan</h2>
                <ul className="flex flex-col gap-4 text-xl font-mono my-8"> 
                    {facilitiesObjectList.map((obj)=>(<li key={obj.id} className="flex flex-col">
                        <h3>{obj.title}</h3>
                        <p className="line-clamp-1 text-sm">{obj.description}</p>
                        <Link to={`/facilities/${obj.url}`} className="text-blue-600 text-xs">Read more</Link>
                    </li>))}
                </ul>
            </div>
        </article>
        </>
    )
}
