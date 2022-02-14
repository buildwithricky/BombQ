import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import transData from "../data/imageTrans";

const Home = () => {
  const [x, setX] = useState(0);

  useEffect(() => {
    let c;
    function loopImages() {
      if (x < transData.length - 1) {
        setX(x + 1);
      }
      if (x === transData.length - 1) {
        setX(0);
      }
    }
    c = setInterval(() => {
      loopImages();
    }, 1000);
    return () => {
      clearInterval(c);
    };
  }, [x]);

  return (
    <section className="home-section">
      <main>
        <div className="hero">
          <div className="content">
            <h1>Redesign Your Style</h1>
            <h4>Only on BombQ</h4>
            <Link to="/store" className="shop-now-btn">
              Shop now
            </Link>
          </div>
          <div className="image-slide">
            <div className="circle"></div>

            <img
              alt="changing"
              style={{ position: "relative" }}
              src={transData[x].src}
              className="image"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
