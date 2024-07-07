import Navitems from './components/navitems.jsx';
import { Outlet } from "react-router-dom";
import Footer from '/src/components/Footer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
     <Navitems />
     <Outlet />
     < Footer />
    </>
  )
}

export default App ;
