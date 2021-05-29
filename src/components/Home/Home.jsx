import React from 'react';

import './Home.scss';

import Banner from './Banner/Banner'
import Carousel from './Carousel/Carousel';
import BannerTwo from './BannerTwo/BannerTwo';

const Home = ({ featured, products }) => {
    return (
        <div className="Home">
            <Banner />
            <Carousel title={"FEATURED"} products={products} />
            <BannerTwo />
            <Carousel title={"BEST SELLERS"} products={products} />
        </div>
    )
}

export default Home
