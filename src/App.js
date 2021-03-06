import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutForm/Checkout/Checkout';

function App() {
  const [ products, setProducts ] = useState([]);
  const [ selectedProduct, setSelectedProduct ] = useState({});
  const [ categories, setCategories ] = useState([]);
  const [ chosenCategory, setChosenCategory ] = useState([]);
  const [title, setTitle] = useState('All Products');
  const [ cart, setCart ] = useState([]);
  const [ order, setOrder ] = useState({});
  const [ errorMessage, setErrorMessage] = useState('');


  const fetchProducts = async () => {
        const { data: products } = await commerce.products.list();
        const { data: categoriesData } = await commerce.categories.list();



      const productsPerCategory = categoriesData.reduce((acc, category) => {
        return [
          ...acc,
          {
            ...category,
          productsData: products.filter((product) =>
          product.categories.find((cat) => cat.id === category.id)
          ),
        },
        ]; 
      }, []);
        setProducts(shuffle(products));
        setCategories(productsPerCategory); 
        setChosenCategory(products)   
  }

  function shuffle (arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}

  const fetchCart = async () => {
         setCart(await commerce.cart.retrieve());

  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
    console.log(cart);
}

const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart)
}

const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
}

const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart)
}

const refreshCart = async () => {
  const newCart = await commerce.cart.refresh();

  setCart(newCart);
}

const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  try {
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

    setOrder(incomingOrder);
    refreshCart();
  } catch (error) {
    setErrorMessage(error.data.error.message);

  }
}

  

  useEffect(() => {
    fetchProducts();
    fetchCart();


  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart.total_items} setTitle={setTitle} setChosenCategory={setChosenCategory} products={products} />
        <Switch>
          <Route path="/" exact>
            <Home categories={categories} products={products} handleAddToCart={handleAddToCart} setSelectedProduct={setSelectedProduct} />
          </Route>
          <Route path="/shop" exact>
            <Shop categories={categories} chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} setTitle={setTitle} title={title} products={products} handleAddToCart={handleAddToCart} setSelectedProduct={setSelectedProduct}/>
          </Route>
          <Route path="/shop/product" exact>
            <Product selectedProduct={selectedProduct} products={products} handleAddToCart={handleAddToCart}  categories={categories} chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} setSelectedProduct={setSelectedProduct} setTitle={setTitle} />
          </Route>
          <Route exact path="/cart">
            <Cart 
             cart={cart} 
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
            </Route>
            <Route path="/checkout" exact>
              <Checkout 
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage} />
            </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
