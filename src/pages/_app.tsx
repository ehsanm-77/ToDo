import '@/styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, PaletteMode, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
export default function App({ Component, pageProps }: AppProps) {
  const [modePage, setModePage] = useState<PaletteMode>('light');
  const theme = createTheme({
    typography: {
      fontFamily: 'poppins',
    },
    palette: {
      mode: modePage,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <button
          onClick={() => {
            setModePage((prev) => (prev === 'dark' ? 'light' : 'dark'));
          }}
          className={`${
            modePage === 'dark' ? 'text-black bg-white' : 'text-white bg-black'
          }  rounded-br-3xl p-3`}
        >
          {modePage === 'dark' ? <CiLight size="20px" /> : <MdDarkMode />}
        </button>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
