import { ChakraProvider, ColorModeOptions, ColorModeProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import theme from '../styles/theme';

const options: ColorModeOptions = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={options}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
