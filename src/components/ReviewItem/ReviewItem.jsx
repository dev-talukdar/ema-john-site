import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, price, shipping, name } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='value'> $ {price}</span></p>
                <p>Shipping: <span className='value'>$ {shipping}</span></p>

            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-clear'><FontAwesomeIcon className='delete-icon' icon={faTrashCan} /></button>

        </div>

    );
};

export default ReviewItem;