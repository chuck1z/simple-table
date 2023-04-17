import App from './App'
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
)
