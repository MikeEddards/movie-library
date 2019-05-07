import React from 'react';
import cors from 'cors'
import Header from './Components/Header'
import Search from './Components/Search'
import Display from './Components/Display'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Display />
    </div>
  );
}

export default App;
