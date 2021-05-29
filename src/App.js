import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const [ featured, setFeatured ] = useState([]);


  const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
        console.log(products)
       
  }

  const fetchCart = async () => {
         setCart(await commerce.cart.retrieve());

  }

    
    const fetchFeatured = async () => {
      const { data } = await commerce.categories.list();

        setFeatured(data);
        console.log('categories', data);
    }  

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchFeatured();


  }, [ ]);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home featured={featured} products={products} />
          </Route>
        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
