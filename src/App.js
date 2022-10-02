import './App.css';
import { Box, useColorMode } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import MyContext from './Context'

function App() {
  const { colorMode } = useColorMode();
  return (
    <MyContext.Provider value={'HAHAHA'}> 
        <Box h='100vh' bg={colorMode === 'light' ? 'orange.50' : 'gray.900'} className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Router>
        </Box>
    </MyContext.Provider>
  );
}

export default App;