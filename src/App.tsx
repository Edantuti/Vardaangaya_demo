// import NavBar from "./components/NavBar"
import Header from './components/Header';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    
    <main className="lg:mx-48 md:mx-28 mx-5">
      <Header />
      {/* <NavBar/> */}
      <hr className='h-1 bg-sky-400' />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
