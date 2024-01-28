import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Projectinside from "./Projects/Projectinside";
import Contactinside from "./Contact/Contactinside";
import Aboutinside from "./About/Aboutinside";



function App() {
  return (
<div className="bg-black">
<Router>
<Navbar/>
<Routes>
 <Route path='/' element={<Home/>}></Route>
<Route path ='/Contactinside' element={<Contactinside/>}></Route>
<Route path='/Projectinside' element={<Projectinside/>}></Route>
<Route path='/Aboutinside' element={<Aboutinside/>}></Route> 
</Routes>
</Router> 
</div>
  );
}
export default App;
