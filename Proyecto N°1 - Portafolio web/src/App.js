import './App.css';

function alerta(){
  alert("Sos un trolaso!");
}

function App() {
  return (
    <div className='Contenedor1'>
      <h1>Hola a  todos</h1>
      <h2>Tetas</h2>
      <buttoN onClick={alerta}>Apretame</buttoN>
      <section></section>
    </div>
  );
}

export default App;
