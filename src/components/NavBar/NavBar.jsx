import React from 'react'
import "./NavBar.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <div className='container'>
      <div className='brand'>
          Samsung Shop
        </div>

      <div className='nav-bar'>
        <a className='nav-bar-elemet' href="#">Menu</a>
        <a className='nav-bar-elemet' href="#">Products</a>
        <a className='nav-bar-elemet' href="#">Sale</a>
        <a className='nav-bar-elemet' href="#">Contact</a>
      </div>

      <div className='cart'>
      <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  )
}

export default NavBar