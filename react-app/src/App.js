import React from 'react';
import './App.css';
import Formu from './compo/Formulario';
import Admin from './compo/Nav';
import Sesionn from './compo/Sesion';
import Somoss from './compo/Somos';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Prin from './compo/Principal';


function App () {
  return (
    
      <div className='App'>
        
        
        <Router>
        <Admin/> 
        
        
          <Routes>
          <Route path="/"  element={<Prin/>}/>
            <Route path="/Sesion"  element={<Sesionn/>}/>
            <Route path="/Formulario"  element={<Formu/>}/>
            <Route path="/Somos"  element={<Somoss/>}/>
            <Route path="/Principal"  element={<Prin/>}/>


          </Routes>
          

        </Router>
        
      </div>

      
      
  );
}

export default App;
