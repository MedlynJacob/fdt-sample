import './App.css';
import Contact from './pages/contact';
import Home from './pages/home';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<Home />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
