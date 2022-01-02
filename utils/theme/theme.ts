import { extendTheme } from '@chakra-ui/react';
import { Heading } from './components/heading';
import { Link } from './components/link';
import { Text } from './components/text';
import { fonts } from './fonts';

const theme = extendTheme({
  fonts,
  components: {
    Heading,
    Link,
    Text,
  },
});

export default theme;
