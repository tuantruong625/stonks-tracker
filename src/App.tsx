import React, { useEffect, useState } from 'react';
import './App.css';
import protobuf from 'protobufjs'
const { Buffer } = require('buffer/')
// import Buffer from 'buffer'

function App() {
  const [current, setCurrent] = useState < protobuf.Message < {} > | undefined > ()

  useEffect(() => {
    const ws = new WebSocket('wss://streamer.finance.yahoo.com');
    protobuf.load('./YPricingData.proto', (error, root) => {
      if (error) {
        console.log(error);
      }
      const Yaticker = root?.lookupType('yaticker');

      ws.onopen = function open() {
        console.log('connected');
        ws.send(JSON.stringify({
          subscribe: ['AMC']
        }));
      };

      ws.onclose = function close() {
        console.log('disconnected');
      };

      ws.onmessage = function incoming(message) {
        const next: protobuf.Message<{}> | undefined = Yaticker?.decode(new Buffer(message.data, 'base64'))
        setCurrent(next)
      };
    })

  }, [])

  return (
    <div className="App">
      <h1>STONKS</h1>
      {
        // current ?? <h2>{current?.id}</h2>
      }
    </div>
  );
}

export default App;
