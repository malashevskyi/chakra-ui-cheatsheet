import { Box, Flex, List } from '@chakra-ui/react';
import { spaces } from '../data';
import Head from './Heading';

const Spaces = () => (
  <List d="inline" h="400px" mb={4}>
    <Head title="Spaces" />
    {spaces.map(([spaceId, spaceRem, spacePx], i) => {
      const bg = i % 2 === 0 ? 'blue.50' : 'blue.100';
      return (
        <Flex as="li" key={spaceId} w="200px" bg={bg} p="5px">
          <Box w="25%">{spaceId}</Box>
          <Box w="50%">{spaceRem}</Box>
          <Box w="25%">{spacePx}</Box>
        </Flex>
      );
    })}
  </List>
);

export default Spaces;
