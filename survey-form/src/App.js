import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Formulario() {
  return (
    <>
      <div className="d-md-flex flex-column justify-content-center align-items-center container-md contenedorTitulo">
        <h1 className="titulo" id="title">Technology Experiences Survey Form</h1>
        <h4 className="subTitulo" id="description">Thank you for taking the time to respond this</h4>
      </div>
      <div className="d-md-flex flex-column justify-content-center align-items-center mb- 4 contenedorFormulario">
        <form id="survey-form">
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName1" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAge1" className="form-label">Age (Optional)</label>
            <input type="number" className="form-control" id="exampleInputAge1" />
          </div>
          <div className="mb-4">
            <label className="form-label">Which option best describes your current role?</label>
            <select className="form-select" aria-label="Default select example" required>
              <option defaultValue>Open this select menu</option>
              <option value="1">Student</option>
              <option value="2">Full time job</option>
              <option value="3">Full time learner</option>
              <option value="4">Prefer not to say</option>
              <option value="5">Other</option>
            </select>
          </div>
          <label className="form-label">Would you recommend programming to someone?</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" defaultChecked />
            <label className="form-check-label" htmlFor="radioDefault1">
              Definitely
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
            <label className="form-check-label" htmlFor="radioDefault2">
              Maybe
            </label>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault3" />
            <label className="form-check-label" htmlFor="radioDefault3">
              Not sure
            </label>
          </div>
          <div className="mb-4">
            <label className="form-label">What browser do you use?</label>
            <select className="form-select" aria-label="Default select example" required>
              <option defaultValue>Open this select menu</option>
              <option value="1">Google Chrome</option>
              <option value="2">Firefox</option>
              <option value="3">Safari</option>
              <option value="4">Edge</option>
              <option value="5">Other</option>
            </select>
          </div>
          <label className="form-label">What do you specialize in?</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault2" id="radioDefault4" defaultChecked />
            <label className="form-check-label" htmlFor="radioDefault4">
              Frontend
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault2" id="radioDefault5" />
            <label className="form-check-label" htmlFor="radioDefault5">
              Backend
            </label>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" type="radio" name="radioDefault2" id="radioDefault6" />
            <label className="form-check-label" htmlFor="radioDefault6">
              Fullstack
            </label>
          </div>
          <label className="form-label">What operating system do you use?</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked" />
            <label className="form-check-label" htmlFor="checkChecked">
              Microsoft
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked2" />
            <label className="form-check-label" htmlFor="checkChecked2">
              Linux
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked3" />
            <label className="form-check-label" htmlFor="checkChecked3">
              MacOS
            </label>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="checkChecked4" />
            <label className="form-check-label" htmlFor="checkChecked4">
              Other
            </label>
          </div>
          <label className="form-label">What language do you use and do you like?</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked5" />
            <label className="form-check-label" htmlFor="checkChecked5">
              JavaScript
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked6" />
            <label className="form-check-label" htmlFor="checkChecked6">
              Python
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked7" />
            <label className="form-check-label" htmlFor="checkChecked7">
              Java
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked8" />
            <label className="form-check-label" htmlFor="checkChecked8">
              NodeJs
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked9" />
            <label className="form-check-label" htmlFor="checkChecked9">
              PHP
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked10" />
            <label className="form-check-label" htmlFor="checkChecked10">
              C#
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked11" />
            <label className="form-check-label" htmlFor="checkChecked11">
              Ruby
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkChecked12" />
            <label className="form-check-label" htmlFor="checkChecked12">
              Go
            </label>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="checkChecked13" />
            <label className="form-check-label" htmlFor="checkChecked13">
              Other
            </label>
          </div>
          <div class="mb-4">
            <label for="exampleFormControlTextarea1" class="form-label">Any comments or suggestions?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your comment here...'></textarea>
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Formulario />
    </>
  );
}

export default App;
