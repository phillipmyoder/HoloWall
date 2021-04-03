import './App.css';
import React from 'react'
import Pages from './pages/Pages';
import Home from './pages/Home';
import { Route } from 'react-router-dom';

function App() {

  return(
    <div>
      <Route exact path="/" component={Home} />
      
      <Route exact path="/pages" component={Pages} />
    </div>
    
  )
}

export default App;
