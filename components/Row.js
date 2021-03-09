import { List } from '@chakra-ui/react';

const Row = ({ children }) => (
  <List d="flex" w="100%">
    {children}
  </List>
);

export default Row;
