import React from "react";
import CartItem from "./CartItem";
import { AiOutlineClose } from "react-icons/ai";
const Cart = ({
  cart,
  setOpenCart,
  isCartOpen,
  total,
  setCart,
  deleteItem,
}) => {
  console.log(total);
  return (
    <div className={isCartOpen ? "cart-main" : "cart-main open-cart"}>
      <h1
        onClick={() => setOpenCart(true)}
        style={{
          padding: "10px",
          cursor: "pointer",
        }}>
        <AiOutlineClose />
      </h1>{" "}
      {cart.map((item, index) => {
        return (
          <CartItem
            deleteItem={deleteItem}
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
            total={total}
            key={index}
          />
        );
      })}{" "}
      <p>Total price $ {total}</p>
      <div className="clear-btn">
        <button
          onClick={() => {
            setCart([]);
            setOpenCart(true);
          }}>
          clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
