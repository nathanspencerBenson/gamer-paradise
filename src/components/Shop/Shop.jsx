import React from 'react';
import Product from '../Product/Product';
import './Shop.scss';

const Shop = ({products, categories}) => {
    console.log(categories)
    if(products.length === 0) return 'Loading...';
    
    return (
        <div className="shop-container">
            {products[0].productsData.map((item, index) => {
                        return(
                            <Product item={item} index={index} />  
                        )
                    }
                )
            };
            <div>
                {categories.map(item => {
                    return(
                    <div>{item.name} </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shop
