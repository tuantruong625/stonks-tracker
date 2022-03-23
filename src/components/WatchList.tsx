import {
  Table, Tbody, Th, Thead, Tr
} from "@chakra-ui/react"
import useStonkFeed from "../hooks"

import WatchItem from "./WatchItem"

export function WatchList() {
  const amc = useStonkFeed('AMC')
  const gme = useStonkFeed('GME')

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
        <WatchItem {...amc} />
        <WatchItem {...gme} />
      </Tbody>
    </Table>
  )
}