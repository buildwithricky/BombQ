import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer";
import PreloadImage from "react-preload-image";
import "../css/product.css";
import Cart from "./Cart";
import Add from "./Add";
const Product = ({ data, cart, setCart, isCartOpen, setOpenCart }) => {
  const { id } = useParams();
  const routeNum = parseInt(id);
  const singlePage = data.filter((single) => single.id === routeNum);
  const products = singlePage.style;
  const [added, setAdded] = useState(false);

  //use effect to display an added alert
  useEffect(() => {
    let c = setTimeout(() => {
      setAdded(false);
    }, 1000);
    return () => {
      clearTimeout(c);
    };
  }, [cart]);

  return (
    <>
      {added && <Add />}
      {singlePage.map((single, index) => {
        const { id, name, image, style } = single;
        return (
          <div className="template" key={index}>
            <div className="main-image">
              <motion.img
                initial={{
                  height: "0px",
                  width: "0px",
                }}
                animate={{
                  height: "900px",
                  width: "700px",
                  transition: {
                    duration: 3,
                    delay: 0.4,
                  },
                }}
                src={image}
              />
            </div>
            <div className="products-section">
              {style.map((single, index) => {
                const { image, name } = single;
                return (
                  <div className="product-card" key={index}>
                    <h3>{name}</h3>
                    <PreloadImage className="product-img" src={image} />
                    <div className="btn-grp">
                      <p>${single.price}</p>
                      <button
                        className="button"
                        onClick={() => {
                          setAdded(true);
                          setCart(single);
                        }}>
                        add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
