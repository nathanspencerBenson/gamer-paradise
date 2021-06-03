import React, { useState, useEffect } from 'react';
import './Product.scss';
import Carousel from '../Home/Carousel/Carousel';

import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';

import parse from 'html-react-parser';

const Product = ( {selectedProduct, handleAddToCart, categories, setSelectedProduct, products }) => {
    const [selectedImage, setSelectedImage] = useState(selectedProduct.assets[0].url);

    const images = selectedProduct.assets.map((image) => (
        <img src={image.url} onClick={() => setSelectedImage(image.url)} onMouseOver={() => setSelectedImage(image.url)}  />
    ))

    console.log(selectedProduct)
    useEffect(() => {
        setSelectedImage(selectedProduct.assets[0].url)
    }, [selectedProduct])
    
    console.log(products)
    return (
        <div className="Product-body">
            <div className="banner">
                <p>Follow us on <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaIcons.FaInstagram style={{margin: '0 2px 0 5px'}} />Instagram</a> and be in for a chance to win a <span>PS5</span></p>
            </div>
                    <h3>Categories > {selectedProduct.categories[0].name}</h3>
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
            <Carousel title={"More Items To Explore"} categories={categories} handleAddToCart={handleAddToCart} setSelectedProduct={setSelectedProduct} />
        </div>
    )
}

export default Product
