import React, {useState} from 'react';
import './App.css';
import useStonkFeed from './hooks';
import { DateTime } from 'luxon'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  Text,
  Box,
  Flex,
  Heading,
  Spacer
} from "@chakra-ui/react"

function App() {
  const symbol = useStonkFeed('AMC')
  const gme = useStonkFeed('GME')
  const irnt = useStonkFeed('IRNT')
  const prog = useStonkFeed('PROG')
  

  const [watchlist, setWatchlist] = useState([symbol, gme])


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
    <Container>
      <Flex align="baseline" mt={2}>
        <Box p="2">
          <Heading size="lg">Stonks Watchlist</Heading>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize="md">{symbol.time && timestampToTimeWithSeconds(symbol.time)}</Text>
        </Box>
      </Flex>
      <Table variant="striped" mt={5} border="1px" borderRadius="full" borderColor="gray.200">
        <Thead>
          <Tr>
            <Th>Symbol</Th>
            <Th>Price</Th>
            <Th isNumeric>Change%</Th>
            <Th isNumeric>Change</Th>
            <Th isNumeric>volume</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{symbol.id}</Td>
            <Td color={ !Math.sign(symbol.price) ? 'red.500' : 'green.500' }>${toFixed(symbol.price, 2)}</Td>
            <Td isNumeric>{toFixed(symbol.changePercent, 2)}%</Td>
            <Td isNumeric>${toFixed(symbol.change, 2)}</Td>
            <Td isNumeric>{symbol.dayVolume}</Td>
          </Tr>
          <Tr>
            <Td>{gme.id}</Td>
            <Td color={ !Math.sign(gme.price) ? 'red.500' : 'green.500' }>${toFixed(gme.price, 2)}</Td>
            <Td isNumeric>{toFixed(gme.changePercent, 2)}%</Td>
            <Td isNumeric>${toFixed(gme.change, 2)}</Td>
            <Td isNumeric>{gme.dayVolume}</Td>
          </Tr>
          <Tr>
            <Td>{irnt.id}</Td>
            <Td color={ !Math.sign(irnt.price) ? 'red.500' : 'green.500' }>${toFixed(irnt.price, 2)}</Td>
            <Td isNumeric>{toFixed(irnt.changePercent, 2)}%</Td>
            <Td isNumeric>${toFixed(irnt.change, 2)}</Td>
            <Td isNumeric>{irnt.dayVolume}</Td>
          </Tr>
          <Tr>
            <Td>{prog.id}</Td>
            <Td color={ !Math.sign(prog.price) ? 'red.500' : 'green.500' }>${toFixed(prog.price, 2)}</Td>
            <Td isNumeric>{toFixed(prog.changePercent, 2)}%</Td>
            <Td isNumeric>${toFixed(prog.change, 2)}</Td>
            <Td isNumeric>{prog.dayVolume}</Td>
          </Tr>
         
        </Tbody>
      </Table>
      {/* <div className="mx-auto mt-10 max-w-4x flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-center  border border-gray-100 shadow-md rounded-md p-4">
          <h1 className="text-gray-600 text-xl font-medium">{symbol.id}</h1>
          <p className="text-3xl pr-2 text-gray-700">${toFixed(symbol.price, 2)}</p>
          <div className="flex ">
            <p className={!Math.sign(symbol.change) ? 'text-green-500' : 'text-red-500'}>{toFixed(symbol.change, 2)}</p>
            <p className={!Math.sign(symbol.changePercent) ? 'text-green-500' : 'text-red-500'}>({toFixed(symbol.changePercent, 2)}%)</p>
          </div>
          <p className="text-gray-500">{symbol.time && timestampToTimeWithSeconds(symbol.time)}</p>
        </div>
      </div> */}
    </Container>

  );
}

export default App;
