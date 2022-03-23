import { Td, Tr } from "@chakra-ui/react"
import { numberWithCommas, toFixed } from "../utils"

type SymbolType = {
 id: string,
 price: number,
 changePercent: number,
 change: number,
 dayVolume: number
}

export const WatchItem = (symbol: SymbolType): JSX.Element => {
 return (
  <Tr>
   <Td>{symbol.id}</Td>
   <Td color={!symbol.changePercent?.toString().includes('-') ? 'green.500' : 'red.500'}>${toFixed(symbol.price, 2)}</Td>
   <Td isNumeric>{toFixed(symbol.changePercent, 2)}%</Td>
   <Td isNumeric>${toFixed(symbol.change, 2)}</Td>
   <Td isNumeric>{numberWithCommas(symbol.dayVolume)}</Td>
  </Tr>
 )
}

export default WatchItem