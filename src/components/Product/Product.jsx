import React, { useState, useEffect } from 'react';
import './Product.scss';
import Carousel from '../Home/Carousel/Carousel';

import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io'

import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const Product = ( {selectedProduct, handleAddToCart, categories, setSelectedProduct, products, chosenCategory, setChosenCategory, setTitle }) => {
    const [selectedImage, setSelectedImage] = useState(selectedProduct.assets[0].url);

    const images = selectedProduct.assets.map((image) => (
        <img src={image.url} onClick={() => setSelectedImage(image.url)} onMouseOver={() => setSelectedImage(image.url)}  />
    ))

    console.log(selectedProduct)
    useEffect(() => {
        setSelectedImage(selectedProduct.assets[0].url)
    }, [selectedProduct])

    

    return (
        <div className="Product-body">
            <div className="banner">
                <p>Follow us on <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a> and be in for a chance to win a <span>PS5</span></p>
            </div>
            <div className="category-links">
                <Link to="/shop" onClick={() => {
                    setChosenCategory(products);
                    setTitle('All Products');
                }}>
                <h3>Categories</h3>
                </Link> 
                <IoIosArrowForward style={{margin: 0, fontSize: '1.5em'}} />
                <Link to="/shop" onClick={() => {
                    const obj = categories.find(obj => obj.name == selectedProduct.categories[0].name);
                    setChosenCategory(obj.productsData);
                    setTitle(obj.name);
                }}>
                <h3 style={{margin: 0}}>{selectedProduct.categories[0].name}</h3>
                </Link>
             </div>
            
                    
            <div className="Product">
                <div className="images-container">
                    <div className="image-menu">
                        {images}
                    </div>
                    <div className="main-image">
                        <img src={selectedImage} alt={selectedProduct.name} />
                    </div>
                </div>
                <div className="description">
                    <div className="text">
                        <h1>{selectedProduct.name}</h1>
                        <p>{parse(selectedProduct.description)}</p>
                    </div>
                    <div> 
                        <p><GiIcons.GiPriceTag style={{marginRight: '10px'}}/>RRP: <span className="red">{selectedProduct.price.formatted_with_symbol}</span></p>
                        <p style={{marginLeft: '25px'}}>Prices incl. VAT excl. shipping costs</p>
                        <p><FaIcons.FaTruck style={{marginRight: '10px'}} /> Delivery in 2 - 4 business days</p>
                        <p><GiIcons.GiTakeMyMoney style={{marginRight: '10px'}} /><span className="green">FREE</span> <span className="underline">Returns</span></p>
                    </div>
                    <button onClick={() => handleAddToCart(selectedProduct)}>Add To Cart</button>
                </div>
            </div>
            <div className="product-description">
                <h2>Product Description</h2>
                {parse(selectedProduct.description)}</div>
            <Carousel title={"More Items To Explore"} categories={categories} handleAddToCart={handleAddToCart} setSelectedProduct={setSelectedProduct} />
        </div>
    )
}

export default Product
