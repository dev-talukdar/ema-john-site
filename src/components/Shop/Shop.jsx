import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //    step 1: get ID 
        for (const id in storedCart) {
            // step 2: get the product by using id 
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step 3: get quantity of the product 
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                // step 4 add the added product to the saved cart 
                savedCart.push(addedProduct)
            }
            // step 5 set the cart 
            setCart(savedCart)



        }

    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleClearCart={handleClearCart}
                >
                   <Link className='btn-proceed' to='/order'>
                    <button className='btn-proceed-checkout'>Review Order <FontAwesomeIcon className=' ' icon={faArrowRight}/></button>

                   </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;