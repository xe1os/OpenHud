import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Matches } from './pages/Matches';
import { Home } from './pages/Home';
import ResponsiveAppBar from './pages/Navbar/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Matches" element={<Matches/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
