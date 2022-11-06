import {BrowserRouter,Routes,Route,} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import MyServices from "./components/Myservices";
import './App.css';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
      < Nav />
    <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="/about" element={< About />}/>
      <Route path="/services" element={< MyServices />}/>
      <Route path="/contact" element={< Contact />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;