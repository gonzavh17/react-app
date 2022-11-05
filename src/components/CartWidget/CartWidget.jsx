import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "./CartWidget.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function CartWidget() {
  return (
    <div>
        <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping} />
            <Link to="/Cart">
              <li className='go-cart'>
                Go to Cart
              </li>
            </Link>
        </div>
    </div>
  )
}

export default CartWidget