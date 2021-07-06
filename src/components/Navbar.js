/* jshint ignore:start*/

import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
    let {navBar: nav} = props;
    return (
        <div>
            <section className="menu">
                <div className="container">
                    <nav className="menu-main">
                        <ul className="menu-main__list">
                            {
                                Object.keys(nav).map((elem, index) => (
                                    <li className="menu-main__item" key={index}><a className="menu-main__item__wrapper" href={nav[elem].route}>{nav[elem].title}</a></li>
                                ))
                            }
                        </ul>
                    </nav>
                    <nav className="menu-mobile">
                        <ul className="menu-mobile__list">
                            {
                                Object.keys(nav).map((elem, index) => (
                                    <li className="menu-mobile__item" key={index}><a className="menu-mobile__item__wrapper" href={nav[elem].route}>{nav[elem].title}</a></li>
                                ))
                            }
                        </ul>
                    </nav>  
                    <div className="header-logo__menu">
                        <a href="#" className="header-menu__btn"> </a>
                        <span className="menu-btn__dec"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}
/* jshint ignore:end*/