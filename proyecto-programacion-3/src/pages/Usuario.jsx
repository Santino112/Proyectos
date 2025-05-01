import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Usuario() {
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