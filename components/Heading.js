import { Box, Heading } from '@chakra-ui/react';

const Head = ({ title }) => (
  <Box as="li">
    <Heading h="35px" fontSize={['1xl', '2xl']}>
      {title}
    </Heading>
  </Box>
);

export default Head;
