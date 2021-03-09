import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';

const HoverLink = ({ children, link }) => (
  <Link
    bg="twitter.300"
    p={3}
    d="inline-block"
    href={link}
    isExternal
    _hover={{ bg: 'blue.300', color: 'white' }}
  >
    {children} <ExternalLinkIcon mx="2px" />
  </Link>
);

export default HoverLink;
