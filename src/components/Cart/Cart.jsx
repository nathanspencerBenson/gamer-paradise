import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss'
import BeatLoader from "react-spinners/BeatLoader";

import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const EmptyCart = () => {
        return ( <h1>You have no items in your shopping cart,
             <Link to="/shop" >start adding some</Link>!
         </h1>)
     };
 
     const FilledCart = () => {

        if(cart.line_items.length === 0) {
            return (
                <h1>Your cart is empty</h1>
            )
        } else{
     return  (  <>
         <div>
             {cart.line_items.map((item) => (
                     <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />  
             ))}
 
         </div>
         <div className="cardDetails">
             <h4>Subtotal: { cart.subtotal.formatted_with_symbol}</h4>
             <div>
                 <button onClick={handleEmptyCart}> Empty Cart</button>
                 <button className="checkout"> <Link to="/checkout">Checkout</Link></button>
             </div>
 
         </div>
         </>)
     };
    }
     if(!cart.line_items) return <div><h1>Your Shopping Cart</h1>  <BeatLoader color={'red'} size={50} /></div>
    return (
        <div className="shopping-cart-body">
            <div className="shopping-cart">
                <h1>Your Shopping Cart</h1>
                <div>
                {FilledCart()}
                </div>
            </div>
        </div>
    )
}

export default Cart
