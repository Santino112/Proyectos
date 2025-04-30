import { useNavigate } from "react-router-dom";

function Botones() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/Fotos")}>Ir a fotos</button>
      <button onClick={() => navigate("/Usuario")}>Ir al usuario</button>
    </div>
  );
}
export default Botones;
