import './App.css';
import Contact from './pages/contact';
import Home from './pages/home';
import NavBar from './components/navbar';
import Footer from './components/footer'
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <NavBar/> 
      <BrowserRouter>
        <Routes>
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<Home />} />
        </Routes> 
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
