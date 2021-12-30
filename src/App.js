
import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Store from './components/Store';
import Product from './components/Product';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route
      path='/'
        element={
          <Store/>
        } />
      <Route path="/product/:id" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
