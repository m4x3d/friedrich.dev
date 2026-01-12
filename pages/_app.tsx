import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import type { AppProps } from 'next/app';
import { Head } from '../components/Head';
import { Provider } from '../components/ui/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
