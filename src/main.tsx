import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@/components/theme-provider';
import { App } from '@/app';
import { BrowserRouter } from 'react-router';
import { Navbar } from './components/navbar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
