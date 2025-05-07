import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Usuario() {
<<<<<<< HEAD
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [job, setJob] = useState("");
    const [responseData, setResponseData] = useState(null);
    const envio = async () => {
        const datos = {
            name: 'Santino',
            job: 'trolo'
        }
        const response = await axios.post("https://reqres.in/api/users", datos);
        console.log(response);
        setResponseData(response.data);
    };
    return (
        <div className="container mt-5 text-center">
            <h2>Cargue su usuario</h2>
            <div>
                <form onSubmit={envio}>
                    <div>
                        <label for="username">Usuario</label>
                        <input
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="job">Trabajo</label>
                        <input
                            id="job"
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
            <button onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
    );
}
=======
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
>>>>>>> 64b56b927d2f8712e45f232dc64de6f1500904a7
