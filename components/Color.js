import { Box, Flex } from '@chakra-ui/react';

const Color = ({ colorName, colorHash }) => (
  <Flex
    flexDirection="column"
    justify="center"
    lineHeight="1.4"
    pos="relative"
    pl="45px"
    mb="5px"
    mr="5px"
    minW="150px"
    h="40px"
    fontSize="14px"
    as="li"
  >
    {/* color Icon */}
    <Box
      pos="absolute"
      borderRadius="none"
      boxShadow="lg"
      left={0}
      top={0}
      bg={colorHash}
      w="40px"
      h="40px"
     />
    {/* color name */}
    <Box as="span" fontWeight="bold">
      {colorName}
    </Box>
    {/* color hash */}
    <Box as="span">{colorHash}</Box>
  </Flex>
);

export default Color;
