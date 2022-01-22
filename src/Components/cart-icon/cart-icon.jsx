import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../images/shopping-bag.svg'

import './cart-icon.css';


const CartIcon = ({itemCount})=>{ 
    return(
        <div className='cart-icon'>
       <ShoppingIcon className='shopping-icon'/>
       <span className='item-count'>{itemCount}</span>
   </div>  
    )
  
}



export default CartIcon