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
          "#FCDC4D",
          "#FCDC4D",
          "#FCDC4D",
          "#FCDC4D",
          "#FCDC4D",
          "#FCDC4D",
          "#FCDC4D",
          "#FCDC4D",
          "#FCDC4D",
          "#FCDC4D"],
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
          "#CB793A",
          "#CB793A",
          "#CB793A",
          "#CB793A",
          "#CB793A",
          "#CB793A",
          "#CB793A",
          "#CB793A",
          "#CB793A",
          "#CB793A"],
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
          "#ad001a",
          "#ad001a",
          "#ad001a",
          "#ad001a",
          "#ad001a",
          "#ad001a",
          "#ad001a",
          "#ad001a",
          "#ad001a",
          "#ad001a"
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
