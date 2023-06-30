import './App.css';
import Contact from './pages/contact';
import NavBar from './components/navbar';
import Footer from './components/footer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { About, Home} from './pages';
import Solutions from "./pages/solutions";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route exact path='/About' element={<About/>}/>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/Solutions' element={<Solutions/>}/>

                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
