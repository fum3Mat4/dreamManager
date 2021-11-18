import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import AlchemyPres from './components/AlchemyPres'
import AlchemyProxy from './components/AlchemyProxy'



function App() {
  return (
    <div className="App">
      <AlchemyPres/>
    </div>
  );
}

export default App;
