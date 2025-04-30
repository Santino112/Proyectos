import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Usuario() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [responseData, setResponseData] = useState(null);
  const handleSubmit = () => {
    axios
      .post(
        "https://reqres.in/api/users",
        {
          name: name,
          job: job,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1",
          },
        }
      )
      .then((response) => {
        console.log("Respuesta:", response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="contenedorInputs">
      <h1>Formulario</h1>
      <div className="inputs">
        <label>Nombre: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="inputs">
        <label>Trabajo: </label>
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
      <button onClick={() => navigate("/")}>Home</button>
      { responseData && name && job &&(
        <div className="datosUsuario">
          <h2>Informacion</h2>
          <ul>
            <li>Name: {responseData.name}</li>
            <li>Job: {responseData.job}</li>
            <li>Id: {responseData.id}</li>
            <li>Date: {responseData.createdAt}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
