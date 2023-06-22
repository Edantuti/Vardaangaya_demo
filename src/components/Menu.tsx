import { FC } from "react"
import { Outlet} from "react-router-dom"

interface IMenuProps{
    visible:boolean
}

const Menu: FC<IMenuProps> = (props): JSX.Element => {
    
    return (
        <>
            <nav className={props.visible?"fixed mb-4 bg-white h-full top-0 right-0 transition-all":"hidden fixed mb-4 bg-white h-full top-0 right-0 transition-all"}>
                <ul className="grid grid-flow-row w-96 mx-auto pt-56">
                    <li  className="px-2 py-1">Home</li>
                    <li  className="px-2 py-1">Speciality</li>
                    <li  className="px-2 py-1">Updates</li>
                    <li  className="px-2 py-1">Contact</li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Menu