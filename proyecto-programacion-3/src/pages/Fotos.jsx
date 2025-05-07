import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Productos() {
  const navigate = useNavigate();
  const [imgurl, setimgurl] = useState();
  const consulta = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(response);
    setimgurl(response.data.message);
  };
  return (
    <div className="contenedorFotos">
      <h2>Foto aleatoria de un perro 🐶</h2>
      <div className="imagen">
        <img src={imgurl}></img>
      </div>
      <button onClick={consulta}>Consultar</button>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
  );
}
