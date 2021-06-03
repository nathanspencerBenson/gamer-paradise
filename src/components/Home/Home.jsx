import React from 'react';

import './Home.scss';

import Banner from './Banner/Banner'
import Carousel from './Carousel/Carousel';
import BannerTwo from './BannerTwo/BannerTwo';

const Home = ({ categories, handleAddToCart, setSelectedProduct }) => {
    return (
        <div className="Home">
            <Banner />
            <Carousel title={"FEATURED"} categories={categories} handleAddToCart={handleAddToCart} setSelectedProduct={setSelectedProduct} />
            <BannerTwo />
            <Carousel title={"BEST SELLERS"} categories={categories} handleAddToCart={handleAddToCart} setSelectedProduct={setSelectedProduct} />
        </div>
    )
}

export default Home
