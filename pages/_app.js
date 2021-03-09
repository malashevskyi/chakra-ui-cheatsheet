import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/index';

function MyApp({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <Component />
    </ChakraProvider>
  );
}

export default MyApp;
