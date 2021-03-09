import {
  Box,
  Container,
  Heading,
  HStack,
  List,
  Spacer,
  Text,
  useBreakpoint,
} from '@chakra-ui/react';
import Head from 'next/head';
import BoxShadow from '../components/BoxShadow';
import Breakpoints from '../components/Breakpoints';
import Colors from '../components/Colors';
import FontSizes from '../components/FontSizes';
import FontWeight from '../components/FontWeight';
import HoverLink from '../components/HoverLink';
import Icons from '../components/Icons';
import LetterSpacing from '../components/LetterSpacing';
import LineHeight from '../components/LineHeight';
import Radius from '../components/Radius';
import Spaces from '../components/Spaces';
import ZIndices from '../components/ZIndices';
import { sizes } from '../data';

export default function Home() {
  const bp = useBreakpoint();

  return (
    <Box as="main" pb={10}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* TOP LINKS */}
      <HStack spacing={1} m={1}>
        <HoverLink link="https://chakra-ui.com/docs/getting-started">
          chakra documentation
        </HoverLink>
        <HoverLink link="https://react-icons.github.io/react-icons">
          react-icons
        </HoverLink>
        <Spacer />
        <HoverLink link="https://github.com/malashevskyi/chakra-ui-cheatsheet">
          github
        </HoverLink>
      </HStack>

      {/* TITLE */}
      <Heading as="h1" py={4} align="center">
        Chakra-ui cheatsheet
      </Heading>

      {/* COLORS */}
      <Container
        maxW="100%"
        overflow="auto"
        w="1290px"
        py={2}
        mb={7}
        d="flex"
        flexWrap="wrap"
      >
        <Colors />
      </Container>

      {/* RESPONSIVE CONTAINER FIRST */}
      <Container maxW={[null, 480, 768, 992, 1280, 1536]} mb="4" p={0}>
        <Heading fontSize="xl" textAlign="center">
          Responsive container, resize to see breakpoints
          <br />
          <Box as="span" fontWeight="normal" fontSize={['xs', 'sm', 'md']}>
            {'Container maxW={[null, 480, 768, 992, 1280, 1536]} />'}
          </Box>
        </Heading>
        <Box bg="blue.300" color="white" textAlign="center">
          {bp}
        </Box>
      </Container>

      {/* RESPONSIVE CONTAINER SECOND */}
      <Container
        maxW={[
          null,
          'container.sm',
          'container.md',
          'container.lg',
          'container.xl',
        ]}
        p={0}
        mb="4"
      >
        <Heading fontSize="xl" textAlign="center">
          Responsive container, resize to see breakpoints
          <br />
          <Box as="span" fontWeight="normal" fontSize={['xs', 'sm', 'md']}>
            {
              '<Container maxW={[null, container.sm, container.md, container.lg, container.xl]} />'
            }
          </Box>
        </Heading>
        <Box bg="blue.300" color="white" textAlign="center">
          {bp}
        </Box>
      </Container>

      {/* SIZES (Container) */}
      <Heading textAlign="center" fontSize="xl">
        {'Sizes (<Container maxW="id" />)'}
      </Heading>
      {sizes.map(([sizeId, sizeRem, sizePx]) => (
        <Container
          maxW={sizeId}
          bg="blue.300"
          color="white"
          mb={1}
          d="flex"
          justifyContent="center"
          key={sizeId}
        >
          <Text px={3}>{sizeId}</Text>
          <Text px={3}>{sizeRem}</Text>
          <Text px={3}>{sizePx}</Text>
        </Container>
      ))}

      {/* TYPOGRAPHY BOXES */}
      <Container maxW="1290px" overflow="auto" m="40px auto 0" mb={10}>
        <Box w="1260px" sx={{ columnCount: '5' }}>
          <FontSizes />
          <FontWeight />
          <LineHeight />
          <LetterSpacing />
          <Radius />
          <ZIndices />
          <Breakpoints />
          <Spaces />
        </Box>
      </Container>

      {/* BOX SHADOW */}
      <Container maxW="1290px" overflow="auto" m="40px auto 0" mb={10}>
        <List d="flex" w="1260px">
          <BoxShadow />
        </List>
      </Container>

      {/* ICONS */}
      <Container
        maxW="100%"
        overflow="auto"
        w="1290px"
        py="1rem"
        d="flex"
        mb={10}
        flexWrap="wrap"
      >
        <Icons />
      </Container>

      {/* GRADIENTS */}
      {/* <Container
        maxW="full"
        overflow="auto"
        d="flex"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Gradients />
      </Container> */}
    </Box>
  );
}
