import React from 'react'
import { Link } from "react-router-dom";
import { FaEuroSign, FaRegHeart } from "react-icons/fa";
import parse from 'html-react-parser';
import './Product.scss';

const Product = ( {item, index} ) => {
    return (
        <div className="product-card" key={index}>
                        <span className="favouriteIcon">
                        <FaRegHeart />

                        </span>
                <Link to={"/shop"}>
                    <div>
                        <div className="img" style={{backgroundImage: `url(${item.media.source})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'contain'}}/>
                        <h2>{item.name}</h2>
                        <div className="description-container">
                            {parse(item.description)}
                        </div>
                        <h2 class="price"><FaEuroSign style={{fontSize: '0.7em'}} />{item.price.formatted_with_symbol}</h2>
                        
                    </div>
                </Link>
            </div>
    )
}

export default Product
