import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider,} from '@chakra-ui/react';
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App initialColorMode={theme.config.initialColorMode} colorMode={'light'}/>
    </ChakraProvider>
  </React.StrictMode>
);