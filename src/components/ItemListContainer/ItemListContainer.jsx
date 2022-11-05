import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function ItemListContainer() {
  return (
    <div className='nav-bar'>
      <Link to="/">
        <li className='nav-bar-elemet' href="#">Todos</li>
      </Link>
      <Link to="/GalaxyS">
        <li className='nav-bar-elemet' href="#" >Galaxy S</li>
      </Link>
      <Link to="GalaxyZ">
        <li className='nav-bar-elemet' href="#">Galaxy Z</li>
      </Link>
      <Link to="/GalaxyA">
        <li className='nav-bar-elemet' href="#">Galaxy A</li>
      </Link>
      <Link to="/Contacto">
        <li className='nav-bar-elemet' href="#">Contact</li>
      </Link>
      <Link to="/AboutUs">
        <li className='nav-bar-elemet' href="#">About Us</li>
      </Link>
    
    </div>
  
  )
}

export default ItemListContainer