import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.scss';
import ClimbingBoxLoader from "react-spinners/BeatLoader";

const Shop = ({ categories, chosenCategory, setChosenCategory, products }) => {

    const [title, setTitle] = useState('All Products')


    if (categories.length === 0) return (
        <div className="loading-container">
            <ClimbingBoxLoader color={'red'} size={50} />
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
                            <Product item={item} index={index} />
                        )

                    })}
                 </div>
            </div>
        </div>
    )
            } 
}

export default Shop
