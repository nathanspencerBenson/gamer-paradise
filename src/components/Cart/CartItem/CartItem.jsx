import React from 'react';
import './CartItem.scss';

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {

    return (
        <div className="CartItem">
            <div className="img" style={{backgroundImage: `url(${item.media.source})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'contain'}} />
            <div>
                <h1>{item.name}</h1>
                <h2>{item.line_total.formatted_with_symbol}</h2>
                <div className="buttons">
                    <div>
                        <button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
               </div>
            </div>
        </div>
    )
}

export default CartItem
