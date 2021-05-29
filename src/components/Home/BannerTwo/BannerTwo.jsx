import React from 'react';
import { Link } from 'react-router-dom';
import './BannerTwo.scss';
import banner2 from "../../../assets/banner2.jpeg";




function PromotingArticle() {
    return (
        <div className="bannerTwo-container">
            <img alt={''} src={banner2}/>
            <div>
                <h1> Give him adventures, not socks.</h1>
                <p>Time to change things up? This Father’s Day, give your favourite dad an unforgettable experience.</p>
                <Link to="/shop">
                    <button>Explore games</button>
                 </Link>

            </div>
            
        </div>
    )
}

export default PromotingArticle