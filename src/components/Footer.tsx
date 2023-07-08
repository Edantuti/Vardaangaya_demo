import Logo from "../assets/Site_Icon.png"



export default function Footer(){
	return (
		<footer className=" mt-6 mx-4 sm:grid flex flex-col sm:grid-cols-3 sm:grid-rows-1 gap-4 bg-blue-400 p-4 rounded-tl rounded-tr bottom-0 ">
			<div className="mx-auto grid col-span-2 gap-4">
				<div className="flex flex-col">
					<img className="w-40 h-40 p-6" alt="" src={Logo} />
					<div className="mx-auto p-2 grid grid-cols-2 md:grid-cols-2 gap-8">
						<a className="social-icons__icon w-6 h-6" href="https://www.facebook.com/Vardaan-hospital-and-maternity-centre-105063481385168/" aria-label="Open Facebook in a new tab" rel="noopener noreferrer" target="_blank">
							<svg role="img" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path></svg>
						</a>
						<a className="social-icons__icon w-5 h-5" href="https://www.youtube.com/channel/UC8_GuJg7y0cqghgSZj8xGBA" aria-label="Open YouTube in a new tab" rel="noopener noreferrer" target="_blank">
							<svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
						</a>
					</div>
				</div>
			</div>
			<iframe className="border-none col-span-1 w-44 h-44 mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3563559092077!2d84.9986428!3d24.7832483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bd204dfb3f9%3A0xb146c96ce50e654b!2sVardaan%20Hospital%20%26%20Maternity%20Centre!5e0!3m2!1sen!2sin!4v1685556938775!5m2!1sen!2sin"	loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			<span className="text-center col-span-3 mx-auto text-slate-100">© 2023 Vardaan Hospital. All rights reserved. </span>
		</footer>
		)
}