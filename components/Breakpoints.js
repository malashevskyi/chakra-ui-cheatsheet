import { Box, Flex, List } from '@chakra-ui/react';
import { breakpoints } from '../data';
import Head from './Heading';

const Breakpoints = () => (
  <List d="inline-block" mb={4}>
    <Head title="Breakpoints" />
    {breakpoints.map(([breakpointId, breakpointEm, breakpointPx], i) => {
      const bg = i % 2 === 0 ? 'blue.50' : 'blue.100';
      return (
        <Flex as="li" key={breakpointId} w="200px" bg={bg} p="5px">
          <Box w="30%">{breakpointId}</Box>
          <Box w="35%">{breakpointEm}</Box>
          <Box w="35%">{breakpointPx}</Box>
        </Flex>
      );
    })}
  </List>
);

export default Breakpoints;
