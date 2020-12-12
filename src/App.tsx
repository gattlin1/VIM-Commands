import React from 'react';
import './App.scss';
import Header from './components/Header'
import Search from './components/Search'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Search />
        <div className="commands">
          <Card command="a" description="Enter into Insert Mode after the cursor" />
          <Card command="A" description="Enter into Insert Mode at the end of the line" />
          <Card command="h" description="Move cursor to the left" />
        </div>
      </div>
    </div>
  );
}

export default App;
