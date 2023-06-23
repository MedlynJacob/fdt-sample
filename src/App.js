import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import styles from './style';
import { About, Home} from './pages';
const  App = () =>(
  <BrowserRouter>
   
      
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/home' element={<Home />} />
        
      </Routes>

  </BrowserRouter>
);



export default App;
