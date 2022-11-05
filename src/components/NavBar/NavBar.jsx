import React from "react";
import "./NavBar.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartWidget from "../CartWidget/CartWidget";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function NavBar() {
  return (
    <div className="container">
      <div>
        <Link to="/Brand">
          <li className="brand">Samsung Shop</li>
        </Link>
      </div>

      <div>
        <ItemListContainer />
      </div>

      <div>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
