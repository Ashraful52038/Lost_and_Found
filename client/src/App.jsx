import React, { useContext } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar';
import Category from './components/Category';
import Footer from './components/Footer';
import { GlobalStateContext } from './components/GlobalState';


function App() {
  
  
  return (
    <>
     <Navbar/>
     <Searchbar/>
     <Category/>
     <Footer/>
  
    </>
  )
}

export default App
