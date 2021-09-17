import {
  Box, Container, Flex,
  Heading,
  Spacer, Text
} from "@chakra-ui/react";
import React from 'react';
import './App.css';
import { WatchList } from './components/WatchList';
import useStonkFeed from './hooks';
import { timestampToTimeWithSeconds } from './utils';

function App() {
  const symbol = useStonkFeed('AMC')

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
      <WatchList />
    </Container>
  );
}

export default App;
