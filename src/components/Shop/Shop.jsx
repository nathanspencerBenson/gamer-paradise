import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Shop.scss';
import BeatLoader from "react-spinners/BeatLoader";

const Shop = ({ categories, chosenCategory, setChosenCategory, products, handleAddToCart, setSelectedProduct, setTitle, title }) => {


    if (categories.length === 0) return (
        <div className="loading-container">
            <BeatLoader color={'red'} size={50} />
        </div>);
        else {
            
    return (
        <div className="shop-container">
            <div className="categories-container">
                <ul>
                    <h1>Categories</h1>
                    <li onClick={() => {
                          setChosenCategory(products)
                          setTitle('All Products')
                    }}>All Products</li>
                    {categories.map(category => {
                        return (
                            <li onClick={() => {
                                let obj = categories.find(obj => obj.name == category.name);
                                setChosenCategory(obj.productsData)
                                setTitle(obj.name)

                            }}> {category.name}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <div className="products-title" ><h1>{title}</h1> <span>{chosenCategory.length} products</span></div>
                <div className="products-container">
                    {chosenCategory.map((item, index) => {
                        return (
                            <ProductCard item={item} index={index} handleAddToCart={handleAddToCart} setSelectedProduct={setSelectedProduct} />
                        )

                    })}
                 </div>
            </div>
        </div>
    )
            } 
}

export default Shop
