import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css';
import './common/i18next/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
         <App />
  </StrictMode>

)
