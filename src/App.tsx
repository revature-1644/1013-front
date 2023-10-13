import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllPaintingsPage } from './pages/AllPaintingsPage';
import { SubmitPaintingPage } from './pages/SubmitPaintingPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        
        <Route path="/submit" element={<SubmitPaintingPage></SubmitPaintingPage>}></Route>
        <Route path="*" element={<AllPaintingsPage></AllPaintingsPage>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
