import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function SeccionN1() {
  return (
    <div className="d-sm-flex contenedor1">
      <div className="d-flex justify-content-center align-content-center container-fluid">
        <div className="contenedorImagenPersonal">
          <img
            className="img-fluid rounded-pill shadow-lg"
            src="\Images\WhatsApp_Image_2024-02-06_at_20.36.19-removebg-preview.png"
          ></img>
        </div>
      </div>
      <div className="d-sm-flex flex-column justify-content-end contenedorInfo">
        <h2 className="text-center text-sm-start fs-1 fs-md-2 fs-lg-1">
          SANTINO SCAMPONE GARCIA
        </h2>
        <div className="contenedorInfoPersonal">
          <p className="text-center text-sm-start fs-2 fs-md-3 fs-lg-1">
            Analísta de sistemas y desarrollador web. Apasionado por la
            programación y la obtención de nuevas habilidades. Tecnologías con
            las que me llevo bien:
          </p>
          <div className="d-sm-flex flex-wrap justify-content-start gap-4 contenedorIconos">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="img-svg html"
            >
              <title>HTML5</title>
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
            </svg>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="img-svg css"
            >
              <title>CSS</title>
              <path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63" />
            </svg>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="img-svg javaScript"
            >
              <title>JavaScript</title>
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
            </svg>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="img-svg bootstrap"
            >
              <title>Bootstrap</title>
              <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
            </svg>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="img-svg nodeJs"
            >
              <title>Node.js</title>
              <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
            </svg>
          </div>
        </div>
        <div className="d-sm-flex flex-wrap justify-content-start gap-4 contenedorBotones">
          <a href="\Images\Curriculum Vitae - Scampone Garcia Santino_250407_095137.pdf" target="_blank" rel="noopener noreferrer" className="btn boton fs-4 fs-md-2 fs-xxl-3">
            Curriculum
          </a>
          <a href="https://wa.me/5493534244165?text=Hola%2C%20estoy%20interesado%20en%20tu%20trabajo" target="_blank" rel="noopener noreferrer" className="btn boton fs-4 fs-md-2 fs-xxl-3">
            Contacto
          </a>
        </div>
      </div>
    </div>
  )
};

function SeccionN2() {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
      <div className="card text-bg-dark mb-3 border-dark">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small_2x/textured-black-background.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="text-sm-start fs-4 fs-md-2 fs-lg-1">Pagina de sodería</h5>
          <p className="text-start fs-6 fs-md-2 fs-lg-1">Proyecto de desarrollo web de la materia practica profecionalizante de segundo año de mi carrera.</p>
          <a href="#" className="btn boton fs-6 fs-md-2 fs-lg-1">Ver proyecto</a>
        </div>
      </div>
      <div className="card text-bg-dark mb-3 border-dark">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small_2x/textured-black-background.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="text-sm-start fs-4 fs-md-2 fs-lg-1">Contador en reversa</h5>
          <p className="text-start fs-6 fs-md-2 fs-lg-1">Este proyecto consiste en un contador que permite visualizar el tiempo restante hacia un evento determinado.</p>
          <a href="#" className="btn boton fs-6 fs-md-2 fs-lg-1">Ver proyecto</a>
        </div>
      </div>
      <div className="card text-bg-dark mb-3 border-dark">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small_2x/textured-black-background.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="text-sm-start fs-4 fs-md-2 fs-lg-1">Semáforo</h5>
          <p className="text-start fs-6 fs-md-2 fs-lg-1">Proyecto que consiste en un semáforo que cambia al interacturar con 2 botónes. Este es el trabajo final de primer año.</p>
          <a href="#" className="btn boton fs-6 fs-md-2 fs-lg-1">Ver proyecto</a>
        </div>
      </div>
      <div className="card text-bg-dark mb-3 border-dark">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small_2x/textured-black-background.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="text-sm-start fs-4 fs-md-2 fs-lg-1">Palindromo</h5>
          <p className="text-start fs-6 fs-md-2 fs-lg-1">Proyecto web que permite detectar que palabras ingresadas en un input se leen igual de adelante como en reversa.</p>
          <a href="#" className="btn boton fs-6 fs-md-2 fs-lg-1">Ver proyecto</a>
        </div>
      </div>
      <div className="card text-bg-dark mb-3 border-dark">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small_2x/textured-black-background.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body custom-blur">
          <h5 className="text-sm-start fs-4 fs-md-2 fs-lg-1">Contador de calorías</h5>
          <p className="text-start fs-6 fs-md-2 fs-lg-1">En este proyecto de desarrollo web cree un contador de calorías a partir de datos ingresados en una cantidad de inputs.</p>
          <a href="#" className="btn boton fs-6 fs-md-2 fs-lg-1">Ver proyecto</a>
        </div>
      </div>
      <div className="card text-bg-dark mb-3 border-dark">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small_2x/textured-black-background.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body custom-blur">
          <h5 className="text-sm-start fs-4 fs-md-2 fs-lg-1">Juego de roles</h5>
          <p className="text-start fs-6 fs-md-2 fs-lg-1">Proyecto basado en un juego de rol por turnos, con un tipo de moneda intercambiable y un mercado para reabastecerse.</p>
          <a href="#" className="btn boton fs-6 fs-md-2 fs-lg-1">Ver proyecto</a>
        </div>
      </div>
      <div className="card text-bg-dark mb-3 border-dark">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small_2x/textured-black-background.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="text-sm-start fs-4 fs-md-2 fs-lg-1">Todo app</h5>
          <p className="text-start fs-6 fs-md-2 fs-lg-1">Este proyecto es una aplicación de lista de tareas que permite al usuario agregar, marcar como completadas y eliminar tareas.</p>
          <a href="#" className="btn boton fs-6 fs-md-2 fs-lg-1">Ver proyecto</a>
        </div>
      </div>
      <div className="card text-bg-dark mb-3 border-dark">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small_2x/textured-black-background.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body rounded">
          <h5 className="text-sm-start fs-4 fs-md-2 fs-lg-1">Detector de spam</h5>
          <p className="text-start fs-6 fs-md-2 fs-lg-1">Proyecto basado en el uso de expresiones regulares. Permite detectar que texto ingresado por un input es spam.</p>
          <a href="#" className="btn boton fs-6 fs-md-2 fs-lg-1">Ver proyecto</a>
        </div>
      </div>
    </div>
  )
};

function SeccionN3() {
  return (
    <div className="contenidoRedes d-sm-flex flex-column justify-content-center align-items-center gap-2">
      <h2 className="text-center fs-1 fs-md-2 fs-lg-1">Trabajemos juntos...</h2>
      <p className="text-center fs-4 fs-md-2 fs-lg-1 parrafoRedes">También podes contactarme por estas redes</p>
      <div className="redes d-sm-flex justify-content-center align-items-center gap-3">
        <a id="profile-link" href="https://github.com/settings/profile" target="_blank"
          className="btn contact-details fs-1 fs-md-2 fs-lg-1"><i className="fab fa-github"></i> GitHub</a>
        <a href="https://twitter.com/Santino_S13/likes" target="_blank"
          className="btn contact-details fs-1 fs-md-2 fs-lg-1"><i className="fab fa-twitter"></i> Twitter</a>
        <a href="https://www.instagram.com/_santiscampone/"
          className="btn contact-details fs-1 fs-md-2 fs-lg-1"><i className="fas fa-at" target="_blank"></i>Instagram</a>
        <a href="https://www.linkedin.com/in/santino-scampone-garcia-4baa002aa/"
          className="btn contact-details fs-1 fs-md-2 fs-lg-1"><i className="fas fa-mobile-alt" target="_blank"></i>Linkedin</a>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <>
        <SeccionN1 />
      </>
      <div className="container-fluid contenedorProyectos shadow-lg d-flex justify-content-center">
        <SeccionN2 />
      </div>
      <div className="container-fluid contenedorRedes shadow-lg d-flex justify-content-center alig">
        <SeccionN3 />
      </div>
    </>
  );
}

export default App;
