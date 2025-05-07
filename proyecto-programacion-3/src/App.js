import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fotos from "./pages/Fotos";
import Usuario from "./pages/Usuario";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fotos" element={<Fotos/>} />
        <Route path="/Usuario" element={<Usuario/>} />
      </Routes>
    </Router>
  );
}

export default App;
