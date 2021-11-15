import {
  ChakraProvider,
  ColorModeOptions,
  ColorModeProvider,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const options: ColorModeOptions = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeProvider options={options}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
