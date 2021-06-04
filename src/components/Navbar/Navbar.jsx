import React, { useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { IconContext } from 'react-icons';
import emptyChest from "../../assets/empty-chest.png";


function Navbar({ totalItems, setTitle, setChosenCategory, products }) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

 

    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className="navbar">
                    <Link to="/"><h1>
                        Gamer Paradise
                    </h1>
                    </Link>
                <div className="saved-cart-icons">
                    <Link to="/shop" className="nav-icons">
                        <AiIcons.AiOutlineShop style={{color: 'red'}} />
                    </Link>
                    <div className={"saved-items-container"}>
                    <FaIcons.FaRegHeart style={{color: 'red'}} className="nav-icons" />
                        <div className="saved-items">
                            <h1>Saved Items</h1>
                            <ul>
                            
                            </ul>
                        </div>
                    </div>
                    <Link to="/cart" className="nav-icons">
                        <span style={{color: 'white'}}><span className="basket-count">{totalItems}</span><HiIcons.HiOutlineShoppingBag style={{color: 'red'}} /></span>
                    </Link>
                </div>
            </div>
            
          
        </IconContext.Provider>   
        </>
    )
}

export default Navbar;