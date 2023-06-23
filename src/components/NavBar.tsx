import Logo from "../assets/Site_Icon.png"
import Menu from "./Menu"

import {GiHamburgerMenu} from "react-icons/gi"
import {RiCloseFill} from "react-icons/ri"
import {FiExternalLink} from "react-icons/fi"

import {useState} from "react"

function NavBar() {
	const [drawerState, changeDrawerState] = useState(false);
	return (
		<header className="grid-flow-row md:grid-flow-col p-5 text-center items-center gap-4">
			<div className="flex items-center p-4 gap-4">
				<img src={Logo} alt="logo" className="w-16 h-16"/>
				<h1 className="text-lg text-center md:text-3xl font-semibold flex-1">VARDAAN HOSPITAL & MATERNITY CENTER, GAYA</h1>
				{!drawerState?<GiHamburgerMenu onClick={()=>changeDrawerState(!drawerState)} className="flex-2 w-5 h-5 absolute right-4 top-12 z-1"/>:<RiCloseFill onClick={()=>changeDrawerState(!drawerState)} className="flex-2 w-5 h-5 fixed right-4 top-12 z-10"/>}
			</div>
			<Menu visible={drawerState} changeVisibility={changeDrawerState} />
			<a href="https://goo.gl/maps/GQ7vDQbR9p3r1ChK6" target="_blank" rel="noopner" className="grid"><span className="flex items-center mx-auto">Gewalbigha, Gaya, Bihar 823001  <FiExternalLink/></span></a>
			<div className="text-[12px] md:text-md text-center grid grid-flow-col gap-5 w-52 mx-auto my-5 uppercase font-medium">  <a href="tel:+916203188133" className="p-3 border-2 border-black hover:border-b-8 hover:pb-1 transition-all ">Phone</a><a href="mailto:contact@vardaangaya.com" className="p-3 border-2 border-black hover:border-b-8 transition-all hover:pb-1">Email</a></div>
		</header>
		)
}

export default NavBar