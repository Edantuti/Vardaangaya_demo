import Intro from "../assets/Intro.jpg"


export default function Introduction(){
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto overflow-hidden">
			<article className="flex flex-col my-auto mx-auto">
				<h2 className="text-3xl sm:text-5xl md:text-7xl">Healthcare</h2>
				<h2 className="text-3xl sm:text-5xl md:text-7xl">you've always</h2>
				<h2 className="text-3xl sm:text-5xl md:text-7xl">deserved.</h2>
			</article>
			<img className="rounded w-[80%] shadow-2xl shadow-slate-300 mx-auto" src={Intro} alt="Staff photo"/>
		</section>
		)
}