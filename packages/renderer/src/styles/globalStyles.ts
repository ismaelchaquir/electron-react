import { globalCss } from '@stitches/react';

const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontSmooth: 'antialiased',
    fontFamily: 'Poppins, sans-serif',
  },
  body: {
    lineHeight: 1,
    width: '100%',
    minHeight: '100vh',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
  },
  'input, textarea, button, select, range ': {
    outline: 'none',
    border: 'none',
  },
});
export default GlobalStyles;
