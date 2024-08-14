import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Flowbite } from 'flowbite-react';
import theme from "./flowbite-theme";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Flowbite theme={{theme}}>
      <App />
    </Flowbite>
  </StrictMode>,
)
