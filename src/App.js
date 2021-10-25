import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import DisplaySimpson from './components/DisplaySimpson.jsx'

const sampleSimpson = {
  quote:"And this is the snack holder where I can put my beverage or, if you will, cupcake.",
  character:"Homer Simpson",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection:"Right"}


function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);

  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };

  return (
      <div className='App'>
        <DisplaySimpson simpson={simpson} />
        <button type="button" onClick={getSimpson}>Get simpson</button>

      </div>
    );
}

export default App;
