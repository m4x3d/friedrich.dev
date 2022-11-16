import { extendTheme } from '@chakra-ui/react';
import { Heading, Link, Text } from './components';
import { fonts } from './fonts';

const theme = extendTheme({
  fonts,
  initialColorMode: 'dark',
  components: {
    Heading,
    Link,
    Text,
  },
});

export default theme;
