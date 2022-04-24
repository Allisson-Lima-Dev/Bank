import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import Button from './components/button';
import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  Button,
  styles: {
    global: (props: Dict<any>) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('#F8F8F8', 'gray.800')(props),
        lineHeight: 'base',
      },
    }),
  },
});

export default theme;
