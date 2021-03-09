// theme.js
import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import styles from './styles'
// Foundational style overrides
import borders from './foundations/borders';
import breakpoints from './foundations/breakpoints';
import typography from './foundations/typography';

const overrides = {
  styles,
  borders,
  breakpoints,
  ...typography,

  components: {
    // Button,
    // Other components go here
  },
};
export default extendTheme(overrides);
