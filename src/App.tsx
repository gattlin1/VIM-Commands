import React from 'react';
import './App.scss';
import Header from './components/Header'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Search />
      </div>
    </div>
  );
}

export default App;
