import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { GlobalStyles, ResetCSS  } from './style/global';
import ProvidersAll from "./context/index";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvidersAll>
        <GlobalStyles />
        <ResetCSS />
        <App />
      </ProvidersAll>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();