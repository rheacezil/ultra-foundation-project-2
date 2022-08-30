import { BrowserRouter,Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Event from './pages/Event';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Footer';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <Navbar/>
    </StyledEngineProvider>
      
      <br/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={<Event />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer/>
  </BrowserRouter>
  );
}
export default App;