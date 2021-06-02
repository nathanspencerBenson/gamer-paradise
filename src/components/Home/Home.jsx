import React from 'react';

import './Home.scss';

import Banner from './Banner/Banner'
import Carousel from './Carousel/Carousel';
import BannerTwo from './BannerTwo/BannerTwo';

const Home = ({ categories, handleAddToCart }) => {
    return (
        <div className="Home">
            <Banner />
            <Carousel title={"FEATURED"} categories={categories} handleAddToCart={handleAddToCart} />
            <BannerTwo />
            <Carousel title={"BEST SELLERS"} categories={categories} handleAddToCart={handleAddToCart} />
        </div>
    )
}

export default Home
