import { Link } from "react-router-dom"



export default function About(){
	const UpdatesObject=[{
		title:"France's computer navigation in knee transplant started for the first time in the country from Gaya"
	}]

	return (
		<>
		<section className="mx-5 my-10 font-roboto grid md:grid-flow-dense gap-4">
		<h2 className="text-center text-4xl font-mono md:col-span-2 col-span-1">About us</h2>
		<div className="lg:w-96 w-auto col-span-1 row-span-1 bg-slate-50 rounded-md my-10">
			<h3 className="text-center my-5">Latest Updates</h3>
			<div className="flex flex-col gap-2 ">
				{UpdatesObject.map((obj:any)=>(<h4 className="bg-slate-100 rounded-md p-4 m-2 text-sm"><Link to="/updates">{obj.title}</Link></h4>))}
			</div>
		</div>
		<div className="flex lg:flex-row flex-col p-4 rounded bg-slate-50 mx-auto my-10	col-span-1 row-span-1">
			<iframe className="lg:w-[600px] w-[100%] lg:h-[380px] mx-auto" width="600" height="380" src="https://www.youtube.com/embed/HKKLRl38VXk" title="Come walk with us, again!"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
			<div className="flex-row lg:w-[60%] w-[100%] mx-auto">
				<p className="px-10 py-5 text-lg">Vardaan hospital is a premium hospital in Gaya. It provides services in <strong>Trauma & Orthopaedics</strong> and <strong>Obstetrics & Gynaecology.</strong></p>
				<p className="px-10 py-5 text-lg">The hospital is renowned in the region for its <strong>innovative approach towards patient care</strong> at every step. Clean operating rooms, active infection control policy, and Patient Queue Management to reduce wait times. It offers single AC suite rooms & OPD waiting area.</p>
			</div>
		</div>
		</section>
		</>
		)
}

