import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

function App() {
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ chosenCategory, setChosenCategory ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const [ featured, setFeatured ] = useState([]);


  const fetchProducts = async () => {
        // const { data } = await commerce.products.list();
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

  

  useEffect(() => {
    fetchProducts();
    fetchCart();


  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route path="/" exact>
            <Home categories={categories} products={products} handleAddToCart={handleAddToCart} />
          </Route>
          <Route path="/shop" exact>
            <Shop categories={categories} chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} products={products} handleAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/cart">
                    <Cart 
                    cart={cart} 
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                    />
                </Route>
        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
