import React from 'react';
import './App.css';
import {renderZpl} from "./utils/renderZPL";

function App() {
    console.log(renderZpl())
  return (
    <div className="App">
      <div className={'zplContainer'}>
        <h1>
          Sample ZPL
        </h1>
        <p className={'zpl'}>
            {renderZpl()}
        </p>
      </div>

    </div>
  );
}

export default App;
