
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import HomePage from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMePage from './Pages/About';
import PortfolioPage from './Pages/Portafolio';
import SkillsPage from './Pages/Skills';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage></HomePage>} />
        <Route path='/aboutme' element={<AboutMePage></AboutMePage>} />
        <Route path='/portfolios' element={<PortfolioPage></PortfolioPage>} />
        <Route path='/skills' element={<SkillsPage></SkillsPage>} />
        <Route path='*' element={<></>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
