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
          "#f2f2fd",
          "#e0e1ef",
          "#bec0da",
          "#9a9ec6",
          "#7c80b5",
          "#696eab",
          "#5e64a8",
          "#4f5493",
          "#454b84",
          "#394076"],
        'dark1': [
          "#f3f3f6",
          "#e4e4e6",
          "#c6c6ce",
          "#a7a6b6",
          "#8d8ba2",
          "#7c7996",
          "#747190",
          "#62607e",
          "#575471",
          "#4a4865"],
        'light2': [
          "#fef2f5",
          "#eae6e7",
          "#cdcdcd",
          "#b2b2b2",
          "#9a9a9a",
          "#8b8b8b",
          "#848484",
          "#717171",
          "#676465",
          "#5e5457"],
        'dark2': [
          "#f2f3f7",
          "#e3e4e8",
          "#c3c6d2",
          "#a1a6bc",
          "#858baa",
          "#727a9f",
          "#69719b",
          "#586087",
          "#4d557a",
          "#41496d"
        ],
        'mid': [
          "#fff2f5",
          "#e7e7ec",
          "#cdcdcf",
          "#b1b1b3",
          "#99999a",
          "#8a8a8c",
          "#838385",
          "#707074",
          "#646469",
          "#555560"
        ]
      },
      components: {
        'xxl': (theme) => 
        ({root: {
          fontSize: '15.75rem',
          height: '14rem',
          padding: theme.spacing.xl,
        }})
      }
      
    }}>
     <App />
     </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
