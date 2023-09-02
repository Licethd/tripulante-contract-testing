// import pkg from 'jest-watcher';
// const { PatternPrompt, printPatternCaret, printRestoredPatternCaret } = pkg;
import './App.css';
import { useState } from 'react'
import { TripulanteService } from './services/TripunteService';

function App() {
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');
  const [Estado, setEstado] = useState('');
  const [Tipo, setTipo] = useState('');
  const [HorasVuelo, setHorasVuelo] = useState('');
  const [NroMillas, setNroMillas] = useState('');
  const [KeyCargo, setKeyCargo] = useState('');
  const crearTripulanteClick = () => {
    console.log('Crear Tripulante');
    (new TripulanteService('http://localhost:8080')).crearTripulante(Nombre, Apellido, EmailAddress, Estado, Tipo, HorasVuelo, NroMillas, KeyCargo).then((id) => {
      alert('Ttripulante creado con id: ' + id);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header> */}
      <body>
        <div>
          <input type="text" placeholder="Nombre" value={Nombre} onChange={(e) => { setNombre(e.target.value) }} />
          <input type="text" placeholder="Apellido" value={Apellido} onChange={(e) => { setApellido(e.target.value) }} />
          <input type="text" placeholder="Email" value={EmailAddress} onChange={(e) => { setEmailAddress(e.target.value) }} />
          <input type="text" placeholder="Estado" value={Estado} onChange={(e) => { setEstado(e.target.value) }} />
          <input type="text" placeholder="Tipo" value={Tipo} onChange={(e) => { setTipo(e.target.value) }} />
          <input type="text" placeholder="Horas Vuelo" value={HorasVuelo} onChange={(e) => { setHorasVuelo(e.target.value) }} />
          <input type="text" placeholder="Nro Millas" value={NroMillas} onChange={(e) => { setNroMillas(e.target.value) }} />
          <input type="text" placeholder="KeyCargo" value={KeyCargo} onChange={(e) => { setKeyCargo(e.target.value) }} />
          <button onClick={crearTripulanteClick}>Crear Tripulante</button>
        </div>
      </body>
    </div>
  );
}

export default App;
