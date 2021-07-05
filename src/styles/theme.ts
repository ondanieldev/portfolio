import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: props => ({
      'html, body': {
        background:
          'linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)',
        backgroundColor: props.colorMode === 'light' ? 'white' : 'gray.800',
        backgroundSize: '2px 2px',
        backgroundPosition: '0 0, 1px 0, 1px -1px, 0px 1px',
      },
    }),
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
