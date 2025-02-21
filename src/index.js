import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import {store} from "./redux/store"; 
import { Provider } from 'react-redux';
import { ColorProvider } from './components/colorContext/ColorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
        <ColorProvider>
        <App />
        </ColorProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
