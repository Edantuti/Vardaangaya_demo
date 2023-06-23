import UpdatesPost from "../components/Updates/UpdatesPost"

export default function Updates(){
    const updateObj = [
        {title:"France's computer navigation in knee transplant started for the first time in the country from Gaya", description:"It is great news that knee-replacement surgery in Gaya has started using Augmented Reality Computer Navigation. Dr. Kumar Anupam (Orthopaedic), Director of Vardan Hospital located at Gewalbigha Munni Masjid Gaya said that Augmented Reality Computer Navigation in knee replacement is a boon for patients. He said that for the first time in the country computer navigation has been started in Gaya by the French team in knee transplant. It is worth mentioning that about 500 knee transplants have been done by Dr. Kumar Anupam.", image_url:'https://res.cloudinary.com/cloudinarynew026/image/upload/w_828,c_scale,q_auto,e_sharpen/v1684657277/news/details/May2023/n4nfd125e8a-be16-4ce8-87e0-ac8501bf14e2.jpg', image_alt:"lorem text", sources:"	https://news4nation.com/news/france-s-computer-navigation-in-knee-transplant-started-for-the-first-time-in-the-country-from-gaya-732099"},
    ]
    return (
        <>
            <section className="my-4">
                <h2 className="text-center text-2xl uppercase font-roboto">Updates</h2>
                {updateObj.map((obj,value)=>(
                    <UpdatesPost key={value} post={obj}/>
                ))}
            </section>    
        </> 
    )
}