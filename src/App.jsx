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
                <Switch>
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/solutions" element={<Solutions/>}/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
