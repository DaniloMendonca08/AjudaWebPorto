import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SolucaoPorto } from './pages/SolucaoPorto/SolucaoPorto'
import { Organograma } from './pages/Organograma/Organograma';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Organograma/>
  );
}

export default App
