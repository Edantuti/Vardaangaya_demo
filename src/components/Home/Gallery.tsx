
import Image1 from "../../assets/gallery/image1.jpg"
import Image2 from "../../assets/gallery/image2.jpg"
import Image3 from "../../assets/gallery/image3.jpg"
import Image4 from "../../assets/gallery/image4.jpg"
import Image5 from "../../assets/gallery/image5.jpg"
import Image6 from "../../assets/gallery/image6.jpg"
import Image7 from "../../assets/gallery/image7.jpg"
import Image8 from "../../assets/gallery/image8.jpg"
import Image9 from "../../assets/gallery/image9.jpg"
import Image11 from "../../assets/gallery/image11.jpg"
import Image12 from "../../assets/Computerised_Alignment .png"
import Image13 from "../../assets/Computerised__Guided_Alignment_Surgery.png"
import Image14 from "../../assets/After-Knee_replacement1 .png"
import Image15 from "../../assets/After-Knee_replacement 2.png"
import Image16 from "../../assets/After_HipJoint replacement.png"




function Gallery(){

	return (
		<>
		<h2 className="text-center text-5xl my-7">Gallery</h2>
		<div className="flex md:flex-row flex-col gap-4 m-6">
			<div className="flex flex-col gap-4 my-auto">
				<img className="rounded shadow-md shadow-neutral-300" src={Image1} alt="image 1"/>
				<img className="rounded shadow-md shadow-neutral-300" src={Image2} alt="image 2"/>
				<img className="rounded shadow-md shadow-neutral-300" src={Image12} alt="image 9"/>
			</div>
			<div className="flex flex-col gap-4 my-auto">
				<img className="rounded shadow-md shadow-neutral-300" src={Image3} alt="image 3"/>
				<img className="rounded shadow-md shadow-neutral-300" src={Image4} alt="image 4"/>
				<img className="rounded shadow-md shadow-neutral-300" src={Image13} alt="image 11"/>
			</div>
			<div className="flex flex-col gap-4 my-auto">
				<img className="rounded shadow-md shadow-neutral-300 " src={Image5} alt="image 5"/>
				<img className="rounded shadow-md shadow-neutral-300 " src={Image6} alt="image 6"/>
				<img className="rounded shadow-md shadow-neutral-300" src={Image14} alt="image14"/>
			</div>
			<div className="flex flex-col gap-4 my-auto">
				<img className="rounded shadow-md shadow-neutral-300" src={Image7} alt="image 7"/>
				<img className="rounded shadow-md shadow-neutral-300" src={Image8} alt="image 8"/>
				<img className="rounded shadow-md shadow-neutral-300" src={Image15} alt="image 15"/>
			</div>
			<div className="flex flex-col gap-4 my-auto">
				<img className="rounded shadow-md shadow-neutral-300" src={Image9} alt="image 9"/>
				<img className="rounded shadow-md shadow-neutral-300" src={Image11} alt="image 11"/>
				<img className="rounded shadow-md shadow-neutral-300" src={Image16} alt="image 16"/>
			</div>
			
		</div>
		</>
		)
}

export default Gallery