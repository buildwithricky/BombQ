
import React, { useState } from "react";
import "./modal.css";

const Modal = ({ isModalOpen, setIsModalOpen, modalData,setCart }) => {
  console.log(modalData);
  return (
    <div className={isModalOpen ? "modal-main" : ""}>
      <div className={`modal-container ${isModalOpen ? "modal-scale" : ""}`}>
        <div
          className="cancel-modal"
          onClick={() => {
            setIsModalOpen(false);
          }}>
       X
        </div>

        <div
          className="content-modal container"
          style={{
            backgroundImage: `url(${modalData})`,
          }}>
                <div className="con">
                  <div className="image">
                  <img src={modalData.image}></img>
                      </div>
                     
                     <div className="item-desc">
                    <h3>name:{modalData.name}</h3>
                    <h3>price:{modalData.price}</h3>
                    <p>Description : {modalData.desc}</p>
                     </div>
                  
              </div>
          <div className="row modal-prev">
            
            <div className="col-sm-12 ">
            <button
                        className="button"
                        style={{
                            color:"#fff"
                        }}
                        onClick={() => {
                          
                          setCart(modalData);
                        }}>
                        add to cart
                      </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
