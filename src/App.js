import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./css/main.css";
import { motion, AnimatePresence } from "framer";

import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Store from "./Components/Store";
import Product from "./Components/ProductTemplate";
import storeData from "./data/catalog";
import Cart from "./Components/Cart";
export const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setOpenCart] = useState(true);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    const cartItem = item;

    if (cart.length !== -1) {
      let cartArray = [...cart, cartItem];
      let filtered = cartArray.filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
      );
      setCart(filtered);
    }
  };
  const getTotal = () => {
    var totalPrice = cart.reduce(function (prevPrice, current) {
      return prevPrice + current.price;
    }, 0);

    setTotal(Math.floor(totalPrice));
  };
  useEffect(() => {
    getTotal();
  }, [cart]);

  const deleteItem = (id) => {
    const newArray = cart.filter((item) => item.id != id);
    setCart(newArray);
  };

  console.log(isCartOpen);
  const location = useLocation();
  return (
    <div className="parent">
      <NavBar cart={cart.length} setOpenCart={setOpenCart} />
      <Cart
        cart={cart}
        setCart={setCart}
        deleteItem={deleteItem}
        setOpenCart={setOpenCart}
        isCartOpen={isCartOpen}
        total={total}
      />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/store">
            <Store data={storeData} />
          </Route>
          <Route path="/productPage/:id">
            <Product
              data={storeData}
              setCart={addToCart}
              cart={cart}
              isCartOpen={isCartOpen}
              setOpenCart={setOpenCart}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
