import React from 'react';
import './App.css';
import Header from './Header.tsx';
import { HomePage } from './Homepage.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
