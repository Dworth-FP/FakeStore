import {useState, useEffect} from 'react'
import React from 'react';
import Store from './components/Store';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

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
    <Store
    items={storeItem}
    loading={loading}
    onItemAdd={(itemData) =>{
      setStoreItem([...storeItem, itemData])
      }}/>
  )
}

export default App;
