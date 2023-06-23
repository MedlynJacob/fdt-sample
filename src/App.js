import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { About} from './pages';
const  App = () =>(
  <BrowserRouter>
   
      
      <Routes>
        <Route exact path='/about' element={<About />} />
        
      </Routes>

  </BrowserRouter>
);



export default App;
