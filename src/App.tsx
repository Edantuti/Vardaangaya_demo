import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Speciality from "./pages/Speciality"
import Contact from "./pages/Contact"
import Updates from "./pages/Updates"
import Footer from "./components/Footer"

import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {

  return (
    <>
      <NavBar/>
      <Home />
      <Footer/>
    </>
  )
}

export default App
