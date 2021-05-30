import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

function App() {
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
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
        setProducts(productsPerCategory);
        setCategories(categoriesData);
        
       
  }

  const fetchCart = async () => {
         setCart(await commerce.cart.retrieve());

  }

  

  useEffect(() => {
    fetchProducts();
    fetchCart();


  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home featured={featured} products={products} />
          </Route>
          <Route path="/shop" exact>
            <Shop products={products} categories={categories}/>
          </Route>
        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
