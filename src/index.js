import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles
     theme={{
      colors: {
        'light1': [
              "#fffbe0",
              "#fff6ca",
              "#fdec9a",
              "#fce165",
              "#fcd839",
              "#fbd21c",
              "#fbcf05",
              "#dfb700",
              "#c7a200",
              "#ac8c00"],
        'dark1': [
              "#f9f0f6",
              "#eedfe7",
              "#debace",
              "#cd93b4",
              "#c1729f",
              "#b85e91",
              "#b5538b",
              "#9f4378",
              "#8f3a6b",
              "#7e305d"],
        'light2': [
              "#fff2e6",
              "#f8e4d5",
              "#ebc9af",
              "#dfac85",
              "#d49361",
              "#ce8349",
              "#cc7b3d",
              "#b5692e",
              "#a15c26",
              "#8d4e1b"]
      },
    }}>
     <App />
     </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
