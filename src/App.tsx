import {
  Box, Container, Flex,
  Heading,
  Spacer, Text,
} from "@chakra-ui/react";
import './App.css';
import { WatchList } from './components/WatchList';
import useStonkFeed from './hooks';
import { timestampToTimeWithSeconds } from './utils';

function App() {
  const symbol = useStonkFeed('AMC')
  return (
    <Container h="100vh" w="100%">
      <Flex h="100%" direction="column" justifyContent="center" mt={2}>
        <Flex alignItems="baseline">
          <Box p="2">
            <Heading size="lg">Stonks Watchlist 🚀</Heading>
          </Box>
          <Spacer />
          <Box>
            <Text fontSize="2xl" color="cyan.900">{symbol.time && timestampToTimeWithSeconds(symbol.time)}</Text>
          </Box>
        </Flex>
        <WatchList />
      </Flex>

    </Container >
  );
}

export default App;
