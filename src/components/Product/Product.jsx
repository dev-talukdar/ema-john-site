import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <h4 className='shoe-name'>{name}</h4>
           <div className='product-info'>
           <h5>Price: ${price}</h5>
           <p>Manufacturer: {seller}</p>
           <p>Rating:{ratings} Star</p>
           <button>Add to Cart</button>
           </div>
           

          
        </div>
    );
};

export default Product;