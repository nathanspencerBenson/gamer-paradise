import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaEuroSign, FaRegHeart } from "react-icons/fa";
import './Carousel.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { commerce } from '../../../lib/commerce';

import Product from '../../Product/Product';

function Carousel({ title, products }) {

    console.log(products)


    const carasouelDisplay = products.map((item, index) => {
        return(
            <Product item={item} index={index} />
            
        )
    })

    const responsive = {
        0: { items: 0 },
        150: { items: 2 },
       768: { items: 3 },
        1024: { items: 4 },
    };
    

    return (
        <div>
            <div className="carousel-container">
            <h1>{title}</h1>
            <AliceCarousel mouseTracking controlsStrategy="responsive" autoHeight="auto"  responsive={responsive} className="featured-items-container">
                {carasouelDisplay}
            </AliceCarousel>
            </div>
        </div>
    )
}

export default Carousel
