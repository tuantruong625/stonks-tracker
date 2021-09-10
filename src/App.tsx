import React from 'react';
import './App.css';
import useStonkFeed from './hooks';

function App() {
  const symbol = useStonkFeed()

  return (
    <div className="mx-auto mt-10 max-w-4x flex flex-col justify-center items-center">
      <h1 className="text-gray-800 text-2xl">Stonks</h1>
      {
        symbol
      }
    </div>
  );
}

export default App;
