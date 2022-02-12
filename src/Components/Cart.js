import React from "react";
import CartItem from "./CartItem";
import { AiOutlineClose } from "react-icons/ai";

// cart component
const Cart = ({
  cart,
  setOpenCart,
  isCartOpen,
  total,
  setCart,
  deleteItem,
}) => {
  console.log(cart);
  return (
    <div className={isCartOpen ? "cart-main" : "cart-main open-cart"}>
      <div className="cart-content">
        <h1
          onClick={() => setOpenCart(true)}
          style={{
            padding: "10px",
            cursor: "pointer",
          }}>
          <AiOutlineClose />
        </h1>{" "}
        {cart.length < 1 ? (
          <div className="emptycart">
            there are currently no items in your cart
          </div>
        ) : (
          cart.map((item, index) => {
            return (
              <CartItem
                deleteItem={deleteItem}
                name={item.name}
                image={item.image}
                price={item.price}
                id={item.id}
                total={total}
                key={index}
                quantity={item.quantity}
                cart={cart}
                setCart={setCart}
              />
            );
          })
        )}{" "}
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
    </div>
  );
};

export default Cart;
