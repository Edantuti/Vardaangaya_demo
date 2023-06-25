
import Facilities from "../components/Speciality/Facilities"
import Gynae from "../components/Speciality/Gynae"
import Infra from "../components/Speciality/Infra"
import Ortho from "../components/Speciality/Ortho"
function Speciality():JSX.Element{
    return (
        <>
        <section className="flex flex-col gap-10 my-4">
            <h2 className="text-center text-2xl uppercase font-roboto">Speciality/Facilities</h2>
            <Ortho/>
            <Gynae/>
            <Facilities/>
            <Infra/>
        </section>
        </>
    )
}

export default Speciality