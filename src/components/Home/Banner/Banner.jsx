import React from 'react';
import './Banner.scss';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className="container-primary">
            <div className="text-container">
                <div>
                    <h1>GET 20% OFF GAMES </h1> <h1>FOR PS5 & XBOX X</h1>
                    <h1>With code: GAMERS2021 </h1>
                </div>
                <div className="shop-now-button">
                    <Link to="/shop">
                        <span>Shop Now</span>
                    </Link>
                </div>
            </div>
            <div className="container-images" />
        </div>
    )
}

export default Banner
