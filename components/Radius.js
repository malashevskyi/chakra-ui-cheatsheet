import { Box, Flex, List } from '@chakra-ui/react';
import { radius } from '../data';
import Head from './Heading';

const Radius = () => (
  <List d="inline-block" mb={4}>
    <Head title="Radius" />
    {radius.map(([radiusId, radiusRem], i) => {
      const bg = i % 2 === 0 ? 'blue.50' : 'blue.100';
      return (
        <Flex as="li" key={radiusId} w="200px" bg={bg} p="5px">
          <Box w="50%">{radiusId}</Box>
          <Box w="50%">{radiusRem}</Box>
        </Flex>
      );
    })}
  </List>
);

export default Radius;
