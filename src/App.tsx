import React from 'react';
import './App.css';
import useStonkFeed from './hooks';

function App() {
  const symbol = useStonkFeed()

  return (
    <div className="App">
      <h1>STONKS</h1>
      {
        symbol
      }
    </div>
  );
}

export default App;
