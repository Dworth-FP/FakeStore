import {useState, useEffect} from 'react'
import React from 'react';
import './App.css';
import axios from 'axios';

import {BrowserRouter,Route,Routes} from "react-router-dom";

import Store from './components/Store';
import Product from './components/Product';

function App() {
  const [storeItem, setStoreItem] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(({data})=>{
      setloading(false);
      setStoreItem(data);
    }) 
  }, [])

  
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/'  element={
          <Store
          loading={loading}
          items={storeItem}
          onItemAdd={(itemData) =>{
            setStoreItem([...storeItem, itemData])
            }}
            />
        } />
      <Route exact path="/product/:id" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
