import OT from "../../assets/World_class_OT.jpg"
import Infra from "../../assets/Infra.jpg"
import Ortho from "../../assets/Ortho.jpg"
import Team from "../../assets/Team.jpg"

export default function Facilities(){
	const facilitiesObject = [
	{id:1, name:"High Tech Equipment", description:<span>We are also equipped with <b className="font-extrabold">in house diagnostic centre</b> with digital high frequency <b className="font-extrabold">X-ray</b>, <b className="font-extrabold">ultrasonography</b> with colour Doppler and a <b className="font-extrabold">pathology collection centre</b> in collaboration with Lal path labs.</span>, img:Infra},
	{id:2, name:"World class OT", description:<span>We have <b className="font-extrabold">trained nursing staff, OT technicians</b> and administrative staff for <b className="font-extrabold">round the clock care of surgical in-patients and expecting mothers.</b> The hospital is equipped with <b className="font-extrabold">advance life support with transport and ICU ventilators and anaesthesia workstations.</b></span>, img:OT},
	{id:3, name:"Cold Orthopaedics", description:<span>In a short span, Vardaan hospital has carved a niche name for itself in <b className="font-extrabold">elective orthopaedic surgeries like -Total knee & hip replacement, spine surgery and arthroscopic ligament reconstructions,</b> the orthopaedic division being popularly known as ‘Cold Orthopaedics’.</span>, img:Ortho},
	{id:4, name:"Highly Skilled Team", description:<span><b className="font-extrabold">Ability to handle advanced and high risk obstetrics on regular basis</b> has also resulted in reverse patient drain from many major cities around to our hospital in Gaya over last few years.</span>, img:Team},
		]


	return (
		<section>
			<h2 className="text-center text-6xl py-10">Facilites</h2>
			{facilitiesObject.map((obj)=>(
				<div key={obj.id} className="mx-5 mt-5 grid h-[30%] sm:h-[20%] gap-4 overflow-hidden rounded p-4 grid-rows-2  sm:grid-cols-2">
					<img className={(obj.id%2)===1?"row-span-2 rounded mx-auto sm:my-auto sm:w-[90%] bg-slate-100 shadow-md shadow-slate-600 order-1":"row-span-2 rounded mx-auto sm:my-auto sm:w-[90%]  bg-slate-100 shadow-md shadow-slate-600 order-1 md:order-2"} src={obj.img} alt={obj.name} />
					<div className={(obj.id%2)===1?"my-auto flex flex-col gap-10 row-span-2 order-2":"my-auto flex flex-col gap-10 row-span-2 order-2 md:order-1"}>
						<h2 className="rounded my-auto mx-auto text-center text-4xl font-mono">{obj.name}</h2>
						<p className="text-lg rounded font-roboto">{obj.description}</p>
					</div>
				</div>
			))}
		</section>
		)
}