import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Contacto from "./components/Contacto/Contacto";
import Home from "./components/Inicio/Home";
import GalaxyA from "./components/Categories/GalaxyA";
import GalaxyZ from "./components/Categories/GalaxyZ";
import GalaxyS from "./components/Categories/GalaxyS";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";
import Brand from "./components/Brand/Brand";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import productsApi from "./Products/Products";

function App() {
  const allCategories = [
    "Todos",
    ...new Set(productsApi.map((category) => category.category)),
  ];

  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(productsApi);

  const filterCategory = (category) => {
    console.log(category);
  };

  return (
    <BrowserRouter>
      <NavBar filterCategory={filterCategory} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contacto" element={<Contacto />}></Route>
        <Route path="/GalaxyA" element={<GalaxyA />}></Route>
        <Route path="/GalaxyZ" element={<GalaxyZ/>}></Route>
        <Route path="/GalaxyS" element={<GalaxyS/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Brand" element={<Brand/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
