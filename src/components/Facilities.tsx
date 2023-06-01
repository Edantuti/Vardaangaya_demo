import OT from "../assets/World_class_OT.jpg"
import Infra from "../assets/Infra.jpg"
import Ortho from "../assets/Ortho.jpg"
import Team from "../assets/Team.jpg"

export default function Facilities(){
	const facilitiesObject = [
	{id:1, name:"High Tech Equipment", description:<span>We are also equipped with <strong>in house diagnostic centre</strong> with digital high frequency <strong>X-ray</strong>, <strong>ultrasonography</strong> with colour Doppler and a <strong>pathology collection centre</strong> in collaboration with Lal path labs.</span>, img:Infra},
	{id:2, name:"World class OT", description:<span>We have <strong>trained nursing staff, OT technicians</strong> and administrative staff for <strong>round the clock care of surgical in-patients and expecting mothers.</strong> The hospital is equipped with <strong>advance life support with transport and ICU ventilators and anaesthesia workstations.</strong></span>, img:OT},
	{id:3, name:"Cold Orthopaedics", description:<span>In a short span, Vardaan hospital has carved a niche name for itself in <strong>elective orthopaedic surgeries like -Total knee & hip replacement, spine surgery and arthroscopic ligament reconstructions,</strong> the orthopaedic division being popularly known as ‘Cold Orthopaedics’.</span>, img:Ortho},
	{id:4, name:"Highly Skilled Team", description:<span><strong>Ability to handle advanced and high risk obstetrics on regular basis</strong> has also resulted in reverse patient drain from many major cities around to our hospital in Gaya over last few years.</span>, img:Team},
		]


	return (
		<section>
			<h2 className="text-center text-6xl py-10">Facilites</h2>
			{facilitiesObject.map((obj)=>(obj.id%2==1?(
			<div key={obj.id} className="mx-5 mt-5 grid h-[30%] sm:h-[20%] gap-4 overflow-hidden rounded p-4 sm:grid-cols-2 sm:grid-rows-2 bg-slate-50">
				<img className="row-span-2 rounded mx-auto sm:my-auto sm:w-[90%]  bg-slate-100 shadow-md shadow-slate-600" src={obj.img} alt={obj.name} />
				<h2 className="row-span-1 rounded my-auto mx-auto text-center text-4xl font-semibold">{obj.name}</h2>
				<p className="text-lg rounded">{obj.description}</p>
			</div>
			):(<div key={obj.id} className="mx-5 mt-5 grid h-[30%] sm:h-[20%] gap-4 overflow-hidden rounded p-4 sm:grid-cols-2 sm:grid-rows-2 bg-slate-50">
				
				<h2 className="row-span-1 rounded my-auto mx-auto text-center text-4xl font-semibold">{obj.name}</h2>
				<img className="row-span-2 rounded mx-auto sm:my-auto sm:w-[90%]  bg-slate-100 shadow-md shadow-slate-600" src={obj.img} alt={obj.name} />
				<p className="text-lg rounded">{obj.description}</p>

			</div>)))}
		</section>
		)
}