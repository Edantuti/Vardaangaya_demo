import Logo from "../assets/Site_Icon.png"

function NavBar() {
	return (
		<header className="grid-flow-row md:grid-flow-col md:align-baseline place-content-center p-5">
			<img src={Logo} alt="logo" className="w-24 h-24 mx-auto mb-10"/>
			<h1 className="text-lg text-center md:text-3xl font-semibold">VARDAAN HOSPITAL & MATERNITY CENTER, GAYA</h1>
			<p className=" text-[12px] md:text-md text-center"> Phone Number: <a href="tel:+916203188133">+91 62031 88133</a>, Email: contact@vardaangaya.com, Location: <a href="https://goo.gl/maps/GQ7vDQbR9p3r1ChK6" target="_blank" rel="noopener" >Gewalbigha, Gaya, Bihar 823001</a> </p>
		</header>
		)
}

export default NavBar