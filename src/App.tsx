import React from 'react';
import './App.css';
import useStonkFeed from './hooks';
import { DateTime } from 'luxon'

function App() {
  const symbol = useStonkFeed()

  const payload = {
    "id": "AMC",
    "price": 46.970001220703125,
    "time": "1631733631000",
    "exchange": "NYQ",
    "quoteType": "EQUITY",
    "marketHours": "REGULAR_MARKET",
    "changePercent": -0.6976702213287354,
    "dayVolume": "71008670",
    "change": -0.3299980163574219,
    "priceHint": "2"
  }

  function toFixed(num: number, fixed: number) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num?.toString().match(re)[0];
  }

  function timestampToTimeWithSeconds(timestamp: number) {
    return DateTime.fromMillis(timestamp).toFormat('tt')
  }

  function timestampToDateWithMonthAndWeekday(timestamp: number) {
    return DateTime.fromMillis(timestamp).toFormat('DDDD')
  }

  return (
    <div className="mx-auto mt-10 max-w-4x flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center  border border-gray-100 shadow-md rounded-md p-4">
        <h1 className="text-gray-600 text-xl font-medium">{symbol.id }</h1>
        <p className="text-3xl pr-2 text-gray-700">${ toFixed(symbol.price, 2) }</p>
        <div className="flex ">
          <p className={ !Math.sign(symbol.change) ? 'text-green-500' : 'text-red-500'}>{ toFixed(symbol.change, 2) }</p>
          <p className={!Math.sign(symbol.changePercent) ? 'text-green-500' : 'text-red-500'}>({toFixed(symbol.changePercent,2) }%)</p>
        </div>
        <p className="text-gray-500">{symbol.time && timestampToTimeWithSeconds(symbol.time) }</p>
      </div>
    </div>
  );
}

export default App;
