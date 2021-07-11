/* jshint ignore:start*/

import React from 'react';
import Logoheader from './Logoheader';
import Navbar from './Navbar';
import '../css/header/Header.css';

export default function Header() {

    let navBar = [

        { title: 'О Компании', route: '/'},
        { title: 'Преимущества', route: '/features'},
        { title: 'Производство', route: '/products'},
        { title: 'Склад', route: '/production'},
        { title: 'Продукция', route: '/production'},
        { title: 'Наши клиенты', route: '/customers'},
        { title: 'Сертификаты', route: '/feedback'},
        { title: 'Отзывы', route: '/feedback'},
        { title: 'Контакты', route: '/contacts'}
    ];

    return (
        <>
        <header>
            <Navbar navBar={navBar} />
            <Logoheader />
        </header>
        </>
    )
}
/* jshint ignore:end*/