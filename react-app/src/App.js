import React from 'react';
import './App.css';
import Formu from './compo/Formulario';
import Admin from './compo/Nav';
import Sesionn from './compo/Sesion';
import Somoss from './compo/Somos';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Prin from './compo/Principal';
import Edit from './compo/Editar';
import Formulario2 from './compo/Formulario2'
import AgregarStake from './compo/AgregarStake';
import Edit2 from './compo/EditarCon';
import ViajeStake from './compo/ViajeStake';

function App () {
  return (
    
      <div className='App'>
        
        
        <Router>
        <Admin/> 
        
        
          <Routes>
          <Route path="/"  element={<Prin/>}/>
            <Route path="/Sesion"  element={<Sesionn/>}/>
            <Route path="/Formulario"  element={<Formulario2/>}/>
            <Route path="/Somos"  element={<Somoss/>}/>
            <Route path="/Principal"  element={<Prin/>}/>
            <Route path="/Editar"  element={<Edit/>}/>
            <Route path="/AgregarStake"  element={<AgregarStake/>}/>
            <Route path="/EditarCon"  element={<Edit2/>}/>
            <Route path="/ViajeStake"  element={<ViajeStake/>}/>



          </Routes>
          

        </Router>
        
      </div>

      
      
  );
}

export default App;
