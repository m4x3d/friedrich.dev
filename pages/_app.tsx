import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import type { AppProps } from 'next/app';
import { Head } from '../components/Head';
import theme from '../utils/theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
