import React  from 'react';
import logo from '../img/Vasiti-Logo-black 1.png';


function Header() {
    const links = ['About Us', 'stores', 'contact', 'log in','sign up']
    const menuItems = ['marketplace','wholesale center','seller center','internships', 'events']
    return (
        <div className='header'>
            <div className="topHeader">
                <div className="logo_section">
                    <figure>
                        <img src={logo} alt="logo" />
                    </figure>
                </div>
                <nav>
                    <ul>
                        {links.map((item, index) =>(
                            <li key={index} >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            
            
            <div className="breadcrumb">
                    <ul>
                        {menuItems.map((item, index) =>(
                            <li key={index} >
                                {item}
                            </li>
                        ))}
                    </ul>   
            </div>
        </div>
    )
}

export default Header
