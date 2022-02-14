import React, { useState, useEffect, Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./css/main.css";

import { AnimatePresence } from "framer";
import Spinner from "./Components/spinner/Spinner";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
// import Store from "./Components/Store";
import Product from "./Components/ProductTemplate";
import storeData from "./data/catalog";

import Cart from "./Components/Cart";
import Checkout from "./Components/checkout";

const Store = React.lazy(() => import("./Components/Store"));
export const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setOpenCart] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("user-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    let userCart = JSON.parse(localStorage.getItem("user-cart"));
    if (userCart) {
      setCart(userCart);
    }
  }, []);

  const addToCart = (item) => {
    const cartItem = { ...item, quantity: 1 };

    // check if item exists in cart
    if (cart.length !== -1) {
      let cartArray = [...cart, cartItem];
      // check if item exist in cart prevents duplicate values
      let filtered = cartArray.filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
      );
      setCart(filtered);
    }
  };

  useEffect(() => {
    const getTotal = () => {
      var totalPrice = cart.reduce(function (prevPrice, current) {
        return prevPrice + current.price * current.quantity;
      }, 0);

      setTotal(Math.floor(totalPrice));
    };
    getTotal();
  }, [cart]);

  const deleteItem = (id) => {
    const newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
  };

  console.log(isCartOpen);
  const location = useLocation();
  return (
    <div className="parent">
      <NavBar
        cart={cart.length}
        setOpenCart={setOpenCart}
        isCartOpen={isCartOpen}
      />
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
            <Suspense fallback={<Spinner />}>
              <Store data={storeData} />
            </Suspense>
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
          <Route path="/checkout">
            <Checkout
              cart={cart}
              setCart={setCart}
              deleteItem={deleteItem}
              setOpenCart={setOpenCart}
              isCartOpen={isCartOpen}
              total={total}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
