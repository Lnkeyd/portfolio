import './App.css';
import Home from './pages/Home';
import { Box, useColorMode } from '@chakra-ui/react'

function App() {
  const { colorMode } = useColorMode();
  return (
    <div className="App">
      <Box h='100vh' bg={colorMode === 'light' ? 'orange.50' : 'gray.900'}>
        <Home />
      </Box>
    </div>
  );
}

export default App;