import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css';
import './common/i18next/i18n';
import {Provider} from 'react-redux';
import Store from "./Store/Store";

createRoot(document.getElementById('root')!).render(
         <StrictMode>
              <Provider store={Store}>
              <App />
              </Provider>
         </StrictMode>

)
