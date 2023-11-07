import React from 'react';
import {createRoot} from 'react-dom'



const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name= "Gina" animal ="Tiger" breed="Savage"/>
    <Pet name= "Robbie" animal ="Bunny" breed="Cutesie"/>
    <Pet name= "Frank" animal ="Mole" breed="Rat Style"/>
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render( <App /> );
