import { Box, Flex, List } from '@chakra-ui/react';
import { zIndices } from '../data';
import Head from './Heading';

const ZIndices = () => (
  <List d="inline-block" mb={4}>
    <Head title="ZIndices" />
    {zIndices.map(([indicesId, indicesVal], i) => {
      const bg = i % 2 === 0 ? 'blue.50' : 'blue.100';
      return (
        <Flex as="li" key={indicesId} w="200px" bg={bg} p="5px">
          <Box w="60%">{indicesId}</Box>
          <Box w="40%">{indicesVal}</Box>
        </Flex>
      );
    })}
  </List>
);

export default ZIndices;
