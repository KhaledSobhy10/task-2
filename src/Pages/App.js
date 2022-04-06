import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import CategoryList from "../components/CategoryLIst";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import Product from "../components/Product";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route exact path="/:category" element={<Products />} />
          <Route exact path="/product/:id" element={<Product/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
