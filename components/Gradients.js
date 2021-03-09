import { Box, Text, Heading } from '@chakra-ui/react';

const Gradients = () => (
  <>
    <Box mb={10} w="350px">
      <Heading fontSize={['sm', 'md']} mb={2}>
        {/* bgGradient="linear(to-l, #7928CA, #FF0080)" */}
      </Heading>
      <Box w="100%" h="100px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
    </Box>
    <Box mb={10} w="350px" h="100px" align="center" justify="center">
      <Heading fontSize={['sm', 'md']} mb={2}>
        {/* bgGradient + bgClip="text" */}
      </Heading>
      <Box textAlign="center" pt="20px">
        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          TEXT GRADIENT
        </Text>
      </Box>
    </Box>
  </>
);

export default Gradients;
