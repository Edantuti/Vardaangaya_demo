


export default function About(){
	return (
		<>
		<section className="m-5">
		<h2 className="text-center text-4xl">About us</h2>
		<div className="flex md:flex-row flex-col p-4 rounded bg-slate-50 mx-auto my-10  ">
  			{/*<img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="int" srcset="" class="rounded md:w-96 w-72 h-auto mx-auto" />*/}
		<iframe className="md:w-[600px] w-[100%] md:h-[380px] mx-auto" width="600" height="380" src="https://www.youtube.com/embed/HKKLRl38VXk" title="Come walk with us, again!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		<div className="flex-row md:w-[60%] w-[100%] mx-auto">
  			<p className="px-10 py-5 text-lg">Vardaan hospital is a premium hospital in Gaya. It provides services in <strong>Trauma & Orthopaedics</strong> and <strong>Obstetrics & Gynaecology.</strong></p>
  			<p className="px-10 py-5 text-lg">The hospital is renowned in the region for its <strong>innovative approach towards patient care</strong> at every step. Clean operating rooms, active infection control policy, and Patient Queue Management to reduce wait times. It offers single AC suite rooms & OPD waiting area.</p>
  		</div>
		</div>
		</section>
		</>
		)
}

