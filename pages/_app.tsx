import { ChakraProvider, ColorModeOptions, ColorModeProvider } from '@chakra-ui/react';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import type { AppProps } from 'next/app';
import { Head } from '../components/Head';
import theme from '../utils/theme/theme';

const options: ColorModeOptions = {
  initialColorMode: 'dark',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={options}>
        <Head />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
