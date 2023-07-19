
import React from 'react';
import './App.css';
import InputForm from './InputForm';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Recipe from './Recipe';

function App() {
  return (
    <div className="App">
      <header className="app-header"> 
      <img src="https://www.clipartmax.com/png/middle/112-1129793_healthy-food-logo-png.png" alt="Logo"></img>
      <div>
       <h1>Nutrify</h1>
       <h3>Your Friendly Health check App!</h3>
       </div>

      </header>
      <InputForm />
      <Router>
        <nav>
          <ul>
            
              <div className="recipe-tag">
               <Link to="/recipe">Click here Have a look at our receipe list for your Favourite food Items!</Link>
              </div>
           
          </ul>
        </nav>
        <Routes>
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



