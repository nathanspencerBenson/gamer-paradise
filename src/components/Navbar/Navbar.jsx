import React, { useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.scss';
import { IconContext } from 'react-icons';
import emptyChest from "../../assets/empty-chest.png";


function Navbar({ totalItems, setTitle, setChosenCategory, products }) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const navItems = SidebarData.map((item, index) => {
        return (
            <li key={index} className={item.cName}>
                <Link to={item.path} onClick={() => {setTitle('All Products'); setChosenCategory(products)}}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            </li>
        )
    })



    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} style={{color: 'red'}}/>
                </Link>
                <Link to="/"><h1>
                    Gamer Paradise
                </h1>
                </Link>
                <div className="computer-nav-links">
                    {navItems}
                </div>
                <div className={"saved-items-container"}>
                <FaIcons.FaRegHeart style={{color: 'red'}} className="nav-icons" />
                <div className="saved-items">
                    <h1>Saved Items</h1>
                    <ul>
                      
                    </ul>
                </div>
                </div>
                <Link to="/cart" className="nav-icons">
                    <span className="basket-count">{totalItems}<HiIcons.HiOutlineShoppingBag style={{color: 'red'}} /></span>
                </Link>
            </div>
            <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                <ul className='side-menu-items' onClick={showSidebar}>
                    <li className='sidebar-toggle'>
                    <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link> 
                    </li>
                    {navItems}
                    

                </ul>
            </nav>
        </IconContext.Provider>   
        </>
    )
}

export default Navbar;