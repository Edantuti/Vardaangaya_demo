import Megha from "../../assets/DrMegha.jpg"
import Anupam from "../../assets/DrAnupam.jpg"


export default function Doctors(){
	return (
		<>
		<h2 className="text-6xl text-center py-10 font-mono">Our Doctors</h2>
		<div className="flex md:flex-row flex-col gap-4 m-4 font-roboto">
				<div className="mx-auto flex-row sm:w-[550px] w-[100%] gap-4 overflow-hidden rounded bg-slate-100 shadow-md shadow-slate-300">
					<img src={Anupam} alt="Dr. Kumar Anupam" className="mx-auto my-16 h-auto w-72 rounded" />
					<h3 className="text-center text-3xl">Dr. Kumar Anupam</h3>
					<p className="text-center p-4 font-semibold">Consultant Arthroscopic & Replacement Surgeon</p>
					<p className="text-center px-8">MBBS(Chennai), MS(Ortho), MRCS(I), ISAKOS Fellowship (Sports Injury Centre, Safdarjung), Ex-consultant, Metro Multispecialty Hospital, Delhi NCR</p>
					<p className="mx-10 my-auto p-4 first-letter:text-3xl">Dr. Kumar Anupam is a dynamic surgeon with particular interest in Joint Replacement, Arthroscopic/Open ligament Reconstruction snd trauma surgeries. He has extensively trained at Sports Injury Centre, Safdarjung Hospital, New Delhi for such surgeries following which he was associated with Metro Multispeciality Hospital, Delhi-NCR as Consultant in Orthopaedics. He has experience of more than 2000 Joint surgeries like Total Hip Replacement, Total Knee Replacement and Arthroscopic Knee & Shoulder Stabilization procedures. He has to his credit many complex surgeris like Pelvi-acetabular trauma, Spinal fracture dislocation and peri-articular surgeries of knee, ankle, elbow and wrist.</p>
				</div>
			<div className="mx-auto flex-row sm:w-[550px] w-[100%] gap-4 overflow-hidden rounded bg-slate-100 shadow-md shadow-slate-300">
					<img src={Megha} alt="Dr. Megha Sinha" className="mx-auto my-16 h-auto w-72 rounded" />
					<h3 className="text-center text-3xl ">Dr. Megha Sinha</h3>
					<p className="text-center p-4 font-semibold ">Consultant Obstetrics and Gynecologist</p>
					<p className="text-center px-8">MBBS, MS(OBS & GYNAE) Safdarjung Hospital, MRCOG (I), F MAS, F ART, Ex-Senior resident Ram Manohar Lohia Hospital</p>
					<p className="mx-10 my-6 p-4 first-letter:text-3xl">Dr. Megha Sinha, MS is an alumnus of Safdarjung Hospital, New Delhi. Having trained at Asia’s busiest Obstetric and Gynaecology Unit, she holds plethora of experience in handling high risk obstetrics like Abruption, placenta Previa, placenta accreta and previous lscs. She also holds fellowship in minimal access surgery and assisted reproductive technology. She runs a dedicated 24*7 obstetric unit handling round the clock emergency.</p>
				</div>
		</div>
		</>
		)
}