import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/home"
import { About } from "./Pages/about"
import { OSPage } from "./Pages/OS"

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<OSPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
    </Router>
  );
}

export default App;
