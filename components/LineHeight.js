import { Box, Flex, List } from '@chakra-ui/react';
import { lHeight } from '../data';
import Head from './Heading';

const LineHeight = () => (
  <List d="inline-block" mb={4}>
    <Head title="Line Height" />
    {lHeight.map(([lId, lVal], i) => {
      const bg = i % 2 === 0 ? 'blue.50' : 'blue.100';
      return (
        <Flex as="li" key={lId} w="200px" bg={bg} p="5px">
          <Box w="50%">{lId}</Box>
          <Box w="50%">{lVal}</Box>
        </Flex>
      );
    })}
  </List>
);

export default LineHeight;
