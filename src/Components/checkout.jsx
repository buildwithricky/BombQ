import React from 'react'
import { Link } from 'react-router-dom'
import "../css/checkout.css"
import CartItem from './CartItem'
const Checkout = ({cart,deleteItem,total,setCart}) => {
    console.log(cart)

    
    return  (
        <div>
            
            {cart.length === 0 ? <div> <p>
                No items in cart yet
                
                </p> 
                <p><Link className='check' to="/store">
                Checkout our items 
                </Link> </p>
                </div>  :cart.map((item,index)=>{
                
                return (
                    <div>
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
                
                
                </div>
                )
                
               
                 
            })}
             <span>Total:${total}</span>
        <div className='btn-con'>
                 <p className='checkout-btn' onClick={()=> alert("check out feature not ready")}>Checkout</p>
                 </div>
        </div>
    )
  
}

export default Checkout