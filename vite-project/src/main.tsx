import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Themes'; // Fix the file name in the import statement
import './index.css';

import React from 'react';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement,
);
