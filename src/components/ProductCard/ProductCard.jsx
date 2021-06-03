import React from 'react'
import { Link } from "react-router-dom";
import { FaEuroSign, FaRegHeart } from "react-icons/fa";
import parse from 'html-react-parser';
import './ProductCard.scss';
import * as HiIcons from 'react-icons/hi';

const ProductCard = ( {item, index, handleAddToCart, setSelectedProduct} ) => {
   
    return (
        <div className="product-card" key={index}>
                        <span className="favouriteIcon">
                        <FaRegHeart />

                        </span>
            
                    <div>
                        <Link to={"/shop/product"} onClick={() => setSelectedProduct(item)}>
                        <div className="img" style={{backgroundImage: `url(${item.media.source})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'contain'}}/>
                        <h2>{item.name}</h2>
                        </Link>
                        <div className="description-container">
                            {parse(item.description)}
                        </div>
                        <h2 class="price"><FaEuroSign style={{fontSize: '0.7em'}} />{item.price.formatted_with_symbol}</h2>
                        
                    </div>
    

                <button onClick={() => {
                    handleAddToCart(item.id, 1);
                    console.log(item.id);
                }}> <HiIcons.HiOutlineShoppingBag style={{ fontSize: '2em'}} />Add To Bag</button>
            </div>
    )
}

export default ProductCard
