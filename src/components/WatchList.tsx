import {
 Table, Tbody, Td, Th, Thead, Tr
} from "@chakra-ui/react"
import useStonkFeed from "../hooks"
import { toFixed, numberWithCommas } from "../utils"

export function WatchList() {
 const symbol = useStonkFeed('AMC')
 const gme = useStonkFeed('GME')
 const irnt = useStonkFeed('IRNT')
 const prog = useStonkFeed('PROG')

 console.log(!Math.sign(symbol.price))
 
 return (
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
            <Td color={ !Math.sign(symbol.price) ? 'green.500' : 'red.500' }>${toFixed(symbol.price, 2)}</Td>
            <Td isNumeric>{toFixed(symbol.changePercent, 2)}%</Td>
            <Td isNumeric>${toFixed(symbol.change, 2)}</Td>
            <Td isNumeric>{numberWithCommas(symbol.dayVolume)}</Td>
          </Tr>
          <Tr>
            <Td>{gme.id}</Td>
            <Td color={ !Math.sign(gme.price) ? 'green.500' : 'red.500' }>${toFixed(gme.price, 2)}</Td>
            <Td isNumeric>{toFixed(gme.changePercent, 2)}%</Td>
            <Td isNumeric>${toFixed(gme.change, 2)}</Td>
            <Td isNumeric>{numberWithCommas(gme.dayVolume)}</Td>
          </Tr>
          <Tr>
            <Td>{irnt.id}</Td>
            <Td color={ !Math.sign(irnt.price) ? 'green.500' : 'red.500' }>${toFixed(irnt.price, 2)}</Td>
            <Td isNumeric>{toFixed(irnt.changePercent, 2)}%</Td>
            <Td isNumeric>${toFixed(irnt.change, 2)}</Td>
            <Td isNumeric>{numberWithCommas(irnt.dayVolume)}</Td>
          </Tr>
          <Tr>
            <Td>{prog.id}</Td>
            <Td color={ !Math.sign(prog.price) ? 'green.500' : 'red.500' }>${toFixed(prog.price, 2)}</Td>
            <Td isNumeric>{toFixed(prog.changePercent, 2)}%</Td>
            <Td isNumeric>${toFixed(prog.change, 2)}</Td>
            <Td isNumeric>{numberWithCommas(prog.dayVolume)}</Td>
          </Tr>
        </Tbody>
      </Table>
 )
}