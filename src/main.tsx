import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@/components/theme-provider';
import { App } from '@/app';
import { BrowserRouter } from 'react-router';
import NavbarEcommerce from '@/components/navbar-ecommerce';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavbarEcommerce />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
