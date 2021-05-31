import React from 'react';

import './Home.scss';

import Banner from './Banner/Banner'
import Carousel from './Carousel/Carousel';
import BannerTwo from './BannerTwo/BannerTwo';

const Home = ({ categories, products }) => {
    return (
        <div className="Home">
            <Banner />
            <Carousel title={"FEATURED"} categories={categories} />
            <BannerTwo />
            <Carousel title={"BEST SELLERS"} categories={categories} />
        </div>
    )
}

export default Home
