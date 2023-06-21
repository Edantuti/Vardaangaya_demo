import Introduction from "../components/Home/Introduction"
import About from "../components/Home/About"
import Doctors from "../components/Home/Doctors"
import Facilities from "../components/Home/Facilities"
import Gallery from "../components/Home/Gallery"

function Home() {
    return (
        <>
            <Introduction/>
            <About/>
            <Doctors/>
            <Facilities/>
            <Gallery/>
        </>
    )
}

export default Home