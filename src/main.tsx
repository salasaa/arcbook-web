import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from "@/components/theme-provider";
import { App } from '@/app';
import { ModeToggle } from "./components/mode-toggle";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<ModeToggle />
    <App />

    </ThemeProvider>
  </StrictMode>
);
