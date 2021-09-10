import React from 'react';
import './App.css';
import useStonkFeed from './hooks';

function App() {
  const symbol = useStonkFeed()

  return (
    <div className="mx-auto mt-10 max-w-4x flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center  border border-gray-100 shadow-md rounded-md p-4">
        <h1 className="text-gray-600 text-xl font-medium">{symbol.id }</h1>
        <p className="text-3xl pr-2 text-gray-700">${ symbol.price.toFixed(2) }</p>
        <div className="flex ">
          <p className={'text-green-500'}>{ symbol.change.toFixed(2) }</p>
          <p className={'text-green-500'}>({ symbol.changePercent.toFixed(2) }%)</p>
        </div>
        <p className="text-gray-500">{symbol.time}</p>
      </div>
    </div>
  );
}

export default App;
