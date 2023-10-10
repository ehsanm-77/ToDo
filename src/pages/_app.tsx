import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';

export default function App({ Component, pageProps }: AppProps) {
  const [modePage, setModePage] = useState<'light' | 'dark'>('light');

  const toggleDarkMode = () => {
    setModePage((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
    palette: {
      mode: modePage,
      primary: {
        main: modePage === 'dark' ? '#1976D2' : '#2196F3',
      },
      secondary: {
        main: modePage === 'dark' ? '#FFA000' : '#FF9800',
      },
      background: {
        default: modePage === 'dark' ? '#03132b' : '#cfe0fa',
        paper: modePage === 'dark' ? '#1E1E1E' : '#fff',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <button
          onClick={toggleDarkMode}
          className={`${
            modePage === 'dark'
              ? 'text-[#03132b] bg-[#cfe0fa]'
              : 'text-[#cfe0fa] bg-[#03132b]'
          }  rounded-br-3xl p-3`}
        >
          {modePage === 'dark' ? (
            <CiLight size={20} />
          ) : (
            <MdDarkMode size={20} />
          )}
        </button>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
