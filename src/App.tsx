import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import  TosterContext  from './index';

function App() {
  const contextData = useContext(TosterContext);
  console.log('--- contextData: ', contextData);
  
  const handleKlicKlac = () => {
    console.log('--- klic-klac  klicked!');
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
        onClick={handleKlicKlac}
        >klic-klac</button>
      </header>
    </div>
  );
}

export default App;
