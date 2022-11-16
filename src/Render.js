import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard';
import './App.css'
import Footer from './components/Footer';


const Render = () => {
    return (
        <div className="App">
        <Navbar />
        <div className="container">
        <Dashboard /> 
        <Footer/>
        </div>
      
        </div>
      )
}

export default Render