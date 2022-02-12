import React, { useState } from "react";

const CartItem = ({
  name,
  image,
  price,
  deleteItem,
  total,
  id,
  quantity,
  cart,
  setCart,
}) => {
  // increase amount

  const increaseAmount = (id) => {
    let increaseCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    console.log(increaseCart);
    setCart(increaseCart);
  };

  // decrease quantity amount
  const decreaseAmount = (id) => {
    let a = parseInt(quantity);
    console.log("1 am " + quantity.to);

    if (a < 2) {
      deleteItem(id);
    } else {
      // decrease item by 1
      let decreaseCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      console.log(decreaseCart);
      setCart(decreaseCart);
    }
  };
  let finalTotal = Math.floor(price * quantity);

  return (
    <div className="cart-item-container">
      <div className="item-image-container">
        <img src={image} />
      </div>

      <div className="content">
        <h3>{name}ankara</h3>
        <h3>{}</h3>
        <h3>
          <span onClick={() => decreaseAmount(id)}>-</span> {quantity}{" "}
          <span onClick={() => increaseAmount(id)}>+</span>
        </h3>
        <h3 onClick={() => deleteItem(id)}>x</h3>
        <p>{finalTotal}</p>
      </div>
    </div>
  );
};

export default CartItem;
