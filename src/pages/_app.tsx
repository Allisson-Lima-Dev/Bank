import type { AppProps } from 'next/app';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AuthProvider } from '~/context/AuthContext';
import theme from '~/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
