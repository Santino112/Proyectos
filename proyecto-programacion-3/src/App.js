import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fotos from "./pages/Fotos";
import Usuario from "./pages/Usuario";

function App() {
  return (
    <Router>
      Proyecto get y post
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fotos" element={<Fotos/>} />
      </Routes>
    </Router>
  );
}

export default App;
