import React from 'react';

import Header from './Components/Header'
import Search from './Components/Search'
import Display from './Components/Display'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Search />
        
        <Display />
        
        <Footer />
    </div>

  );
}

export default App;
