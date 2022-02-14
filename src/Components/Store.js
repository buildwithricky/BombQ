import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/store.css";
import { motion } from "framer";

const variants = {
  visible: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
};

// const handleDisapear = (id) => {
//   if (id === 1) {
//     variants.visible.opacity = 0;
//     console.log(variants);
//   }
// };

const Store = ({ data }) => {
  console.log(data);
  const [sid, setId] = useState();
  return (
    <React.Fragment>
      <div
        style={{
          textAlign: "center",
          margin: "10px",
          padding: "1.2rem",
        }}>
        <h2>Store </h2>
      </div>

      <motion.div className="category">
        {data.map((single, index) => {
          const { id, image, name } = single;

          return (
            <motion.div
              key={index}
              className="card"
              variants={id !== sid ? variants : ""}
              exit="visible"
              onClick={() => setId(id)}>
              <Link to={`/productPage/${id}`}>
                <div className="">
                  <div>
                    <div className="inner">
                      <h3>{name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </React.Fragment>
  );
};

export default Store;
