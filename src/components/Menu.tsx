import { Dispatch, FC, SetStateAction } from "react"
import { Link} from "react-router-dom"

import Logo from "../assets/Site_Icon.png"

interface IMenuProps{
    visible:boolean
    changeVisibility: Dispatch<SetStateAction<boolean>>
}

const Menu: FC<IMenuProps> = (props): JSX.Element => {
    
    return (
        <>
            <nav className={props.visible?"fixed mb-4 sm:w-96 w-full bg-white h-full top-0 right-0 transition-all shadow-lg z-10":"fixed sm:w-96 w-96 mb-4 bg-white h-full top-0 -right-96 transition-all z-10"}>
                <img src={Logo} alt="" className="w-24 h-24 mx-auto my-28"/>
                <div className="grid grid-flow-row mx-auto">
                    <Link to="/" onClick={()=>{props.changeVisibility(!props.visible)}} className="px-2 py-1">Home</Link>
                    <Link to="/speciality" onClick={()=>{props.changeVisibility(!props.visible)}} className="px-2 py-1">Speciality</Link>
                    <Link to="/updates" onClick={()=>{props.changeVisibility(!props.visible)}} className="px-2 py-1">Updates</Link>
                    <Link to="/contact" onClick={()=>{props.changeVisibility(!props.visible)}} className="px-2 py-1">Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Menu