import { useEffect, useRef, useState } from "react";
import protobuf from "protobufjs";

export default function useStonkFeed(symbol = 'AMC') {
 const [stonk, setStonk] = useState<protobuf.Message<[]> | null | any>()
 const ws = useRef(null)

 useEffect(() => {
  ws.current = new WebSocket('wss://streamer.finance.yahoo.com');
  protobuf.load('./YPricingData.proto', (error, root) => {
   if (error) {
    console.log(error);
   }
   const Yaticker = root?.lookupType('yaticker');

   ws.current.onopen = function open() {
    console.log('connected');
    ws.current.send(JSON.stringify({
     subscribe: [symbol]
    }));
   };

   ws.current.onclose = function close() {
    console.log('disconnected');
   };

   ws.current.onmessage = function incoming(message: any) {
    const next: protobuf.Message<{}> | undefined = Yaticker?.decode(new Buffer(message.data, 'base64'))
    setStonk(next)
   };
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

 if (!stonk) {
  return 'closing price'
 }

 return stonk
}