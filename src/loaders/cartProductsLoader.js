import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    // if cart data is in database, you've to use async await 
    const storedCart = getShoppingCart() 
    const savedCart = [];
    
    for(const id in storedCart){
    const addedProduct = products.find (pd => pd.id ===id);
    if (addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
    }
} 

// if you need to send 2 things 

    // return [products, savedCart] //option 1
    // return {products, savedCart} option 2 
    return savedCart;
}

export default cartProductsLoader;