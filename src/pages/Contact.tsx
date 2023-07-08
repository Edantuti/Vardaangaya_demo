import Image1 from "../assets/gallery/image1.jpg"
import Image2 from "../assets/gallery/image2.jpg"
import Image3 from "../assets/gallery/image3.jpg"
import Image4 from "../assets/gallery/image4.jpg"
import Image5 from "../assets/gallery/image5.jpg"
import Image6 from "../assets/gallery/image6.jpg"
import Image7 from "../assets/gallery/image7.jpg"
import Image8 from "../assets/gallery/image8.jpg"
import Image9 from "../assets/gallery/image9.jpg"
import Image11 from "../assets/gallery/image11.jpg"

import { FiExternalLink } from "react-icons/fi"
import Marquee from "react-fast-marquee"

export default function Contact():JSX.Element{



    return (
        <>
            <section className="h-full">
                <h3 className=" text-center text-2xl uppercase font-roboto ">Contact</h3>
                <div className="text-center my-10 w-10/12 mx-auto">
                    <p className="text-2xl my-10">We are available 24x7 over the phone. For all your needs give us a call at <a href="tel:+916203188133" className="text-blue-600">(+91) 62031-88-133.</a> You can also always visit us at our centre.</p>
                    <a href="https://goo.gl/maps/GQ7vDQbR9p3r1ChK6" target="_blank" rel="noopner" className="grid text-blue-600 hover:text-blue-800 visited:text-purple-600 transition-all"><span className="flex items-center mx-auto">Gewalbigha, Gaya, Bihar 823001  <FiExternalLink/></span></a>
                    <div className="text-[12px] md:text-md text-center grid grid-flow-row gap-5 md:grid-flow-col w-78 mx-auto my-5 uppercase font-medium">  <a href="tel:+916203188133" className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all ">Phone</a><a href="mailto:contact@vardaangaya.com" className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all hover:pb-1">contact@vardaangaya.com</a><a href="mailto:vardaangaya@gmail.com" className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all hover:pb-1">vardaangaya@gmail.com</a></div>
                    <Marquee pauseOnHover className="flex md:h-80 sm:96 overflow-hidden md:my-10 my-0 z-0">
                        <img src={Image1} alt="hospital image" className="md:h-96 h-60 m-4 rounded "/>
                        <img src={Image2} alt="hospital image" className="md:h-96 h-60 m-4 rounded"/>
                        <img src={Image3} alt="hospital image" className="md:h-96 h-60 m-4 rounded"/>
                        <img src={Image4} alt="hospital image" className="md:h-96 h-60 m-4 rounded"/>
                        <img src={Image5} alt="hospital image" className="md:h-96 h-60 m-4 rounded"/>
                        <img src={Image6} alt="hospital image" className="md:h-96 h-60 m-4 rounded"/>
                        <img src={Image7} alt="hospital image" className="md:h-96 h-60 m-4 rounded"/>
                        <img src={Image8} alt="hospital image" className="md:h-96 h-60 m-4 rounded"/>
                        <img src={Image9} alt="hospital image" className="md:h-96 h-60 m-4 rounded"/>
                        <img src={Image11} alt="hospital image" className="md:h-96 h-60 m-4 rounded"/>
                    </Marquee>
                </div>
            </section>
            {/* //TODO: Create Form for the Contact Process
            //TODO: Create Marquee of photos
            //TODO: Make Buttons for phone numbers and emails */}
        </>
    )
}