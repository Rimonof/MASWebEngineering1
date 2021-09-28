import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          Todo App
        </div>

        <div className="inputContainer">
          <div className="addTaskContainer">
            <input className="input" type ="text" placeholder="Aufgabe..."/>
            <button className="addButton">Hinzufügen</button>
          </div>
          <input className="showAllCheckbox" type="checkbox"/>
          <div>Alle Anzeigen</div>
        </div>
        
        <div className="taskEntry">
          <input className="checkbox" type="checkbox"/>
          <p> &#9889;</p>
        </div>

      </header>
      <body>
        <div>3</div>
      </body>
    </div>
  );
}

export default App;
