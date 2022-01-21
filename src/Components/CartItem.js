import React, { useState } from "react";

const CartItem = ({ name, image, price, deleteItem, total, id }) => {
  const [value, setValue] = useState(1);
  const increaseAmount = () => {
    let incr = value + 1;
    setValue(incr);
  };
  const decreaseAmount = (id) => {
    if (value >= 1) {
      let dec = value - 1;
      if (dec < 1) {
        setValue(1);
        deleteItem(id);
      }
      setValue(dec);
    }

    if (value < 1) {
      deleteItem(id);
    }
  };
  let finalTotal = Math.floor(price * value);

  return (
    <div className="cart-item-container">
      <div className="item-image-container">
        <img src={image} />
      </div>

      <div className="content">
        <h3>{name}</h3>
        <h3>{}</h3>
        <h3>
          <span onClick={() => decreaseAmount(id)}>-</span> {value}{" "}
          <span onClick={() => increaseAmount()}>+</span>
        </h3>
        <h3 onClick={() => deleteItem(id)}>x</h3>
        <p>{finalTotal}</p>
      </div>
    </div>
  );
};

export default CartItem;
