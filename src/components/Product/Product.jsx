import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;



    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4 className='shoe-name'>{name}</h4>
            <div className='product-info'>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>

            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>



        </div>
    );
};

export default Product;