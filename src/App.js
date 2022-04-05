import React from "react";
import Header from "./components/Layout/Header";
import FruitDesc from "./components/Fruits/FruitDesc";
import AvailableFruit from "./components/Fruits/AvailableFruit";
import Search from "./components/Search/Search";
import Footer from "./components/Layout/Footer";
import "./App.css";

function App() {
  return (
    <div class="page">
      <div class="page-container">
        <Header />
        <FruitDesc />
        <Search />
        <AvailableFruit />
        <Footer />
      </div>
    </div>
  );
}

export default App;
