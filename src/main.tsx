import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Flowbite } from 'flowbite-react';
import theme from "./flowbite-theme";

createRoot(document.getElementById('root')!).render(
    <Flowbite theme={{theme}}>
      <App />
    </Flowbite>
)
