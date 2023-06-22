import Logo from "../assets/Site_Icon.png"
import Menu from "./Menu"
function NavBar() {
	return (
		<header className="grid-flow-row md:grid-flow-col p-5 text-center gap-4">
			<div className="flex items-center p-4 gap-4">
				<img src={Logo} alt="logo" className="w-16 h-16"/>
				<h1 className="text-lg text-center md:text-2xl font-semibold mx-auto">VARDAAN HOSPITAL & MATERNITY CENTER, GAYA</h1>
				<a href="https://goo.gl/maps/GQ7vDQbR9p3r1ChK6" target="_blank" rel="noopener" className="w-20">Gewalbigha, Gaya, Bihar 823001</a>
			</div>
			<Menu />
			<div className="text-[12px] md:text-md text-center grid grid-flow-col gap-5 w-52 mx-auto mb-5 uppercase font-medium">  <a href="tel:+916203188133" className="p-3 border-2 border-black hover:border-b-8 hover:pb-1 transition-all ">Phone</a><a href="mailto:contact@vardaangaya.com" className="p-3 border-2 border-black hover:border-b-8 transition-all hover:pb-1">Email</a></div>
			
			
			
		</header>
		)
}

export default NavBar