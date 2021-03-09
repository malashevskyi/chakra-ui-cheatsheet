import { Box, Flex, List } from '@chakra-ui/react';
import { fSizes } from '../data';
import Head from './Heading';

const FontSizes = () => (
  <List d="inline-block" mb={4}>
    <Head title="Font Sizes" />
    {fSizes.map(([fontId, fontRem, fontPx], i) => {
      const bg = i % 2 === 0 ? 'blue.50' : 'blue.100';
      return (
        <Flex as="li" key={fontId} w="200px" bg={bg} p="5px">
          <Box w="25%">{fontId}</Box>
          <Box w="50%">{fontRem}</Box>
          <Box w="25%">{fontPx}</Box>
        </Flex>
      );
    })}
  </List>
);

export default FontSizes;
