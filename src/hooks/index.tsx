import { useEffect, useState } from "react";
import protobuf from "protobufjs";

export default function useStonkFeed() {
 const [current, setCurrent] = useState<protobuf.Message<{}> | null | any>()

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

 if (!current) {
  return 'closing price'
 }

 return current
}