import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import styles from './style';
import { About, Home} from './pages';
const  App = () =>(
  <div className="w-full overflow-hidden  ">
      <BrowserRouter>
   
      
   <Routes>
     <Route exact path='/about' element={<About />} />
     <Route exact path='/' element={<Home />} />
     
   </Routes>

</BrowserRouter>
  </div>

);



export default App;
