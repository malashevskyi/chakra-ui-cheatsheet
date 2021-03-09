import { Flex } from '@chakra-ui/react';
import { boxShadow } from '../data';

const BoxShadow = () =>
  boxShadow.map((bs) => (
      <Flex as="li" key={bs} w="110px" h="150px" justify="center" align="center">
        <Flex
          fontSize="xs"
          w="50px"
          h="50px"
          bg="white"
          boxShadow={bs}
          justify="center"
          align="center"
        >
          {bs}
        </Flex>
      </Flex>
    ));

export default BoxShadow;
