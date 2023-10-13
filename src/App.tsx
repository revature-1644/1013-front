import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllPaintingsPage } from './pages/AllPaintingsPage';
import { SubmitPaintingPage } from './pages/SubmitPaintingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="list" element={<AllPaintingsPage></AllPaintingsPage>}></Route>
        <Route path="submit" element={<SubmitPaintingPage></SubmitPaintingPage>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
