import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart;     option 1
    // const {cart} = props;         option 2

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total*7/100;

    const grandTotal = total+totalShipping+tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {total} </p>
            <p>Total Shipping: $ {totalShipping} </p>
            <p>Tax:$ {tax.toFixed(2)} </p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)} </h4>
            <button onClick={handleClearCart} className='btn-clear-cart'>Clear Cart<FontAwesomeIcon className='clear-cart' icon={faTrashCan} /></button>
            {children}
        </div>
    );
};

export default Cart;