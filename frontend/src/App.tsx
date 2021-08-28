import React from 'react';
import './App.css';
import { Header } from './Header';
import { HomePage } from './Homepage';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </React.StrictMode>
  );
}

export default App;
