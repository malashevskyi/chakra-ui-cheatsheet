import { Box, Flex, List } from '@chakra-ui/react';
import { lSpacings } from '../data';
import Head from './Heading';

const LetterSpacing = () => (
  <List d="inline-block" mb={4}>
    <Head title="Letter Spacing" />
    {lSpacings.map(([lId, lEm], i) => {
      const bg = i % 2 === 0 ? 'blue.50' : 'blue.100';
      return (
        <Flex as="li" key={lId} w="200px" bg={bg} p="5px">
          <Box w="50%">{lId}</Box>
          <Box w="50%">{lEm}</Box>
        </Flex>
      );
    })}
  </List>
);

export default LetterSpacing;
