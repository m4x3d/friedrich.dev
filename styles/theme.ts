import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Heading: {
      defaultProps: { as: 'h3', size: 'lg' },
    },
  },
});

export default theme;
