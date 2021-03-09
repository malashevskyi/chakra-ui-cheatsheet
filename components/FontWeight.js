import { Box, Flex, List } from '@chakra-ui/react';
import { fWeight } from '../data';
import Head from './Heading';

const FontWeight = () => (
  <List d="inline-block">
    <Head title="Font Weight" />
    {fWeight.map(([fontId, fontVal], i) => {
      const bg = i % 2 === 0 ? 'blue.50' : 'blue.100';
      return (
        <Flex as="li" key={fontId} w="200px" justify="space-between" bg={bg} p="5px">
          <Box w="75%">{fontId}</Box>
          <Box w="25%">{fontVal}</Box>
        </Flex>
      );
    })}
  </List>
);

export default FontWeight;
