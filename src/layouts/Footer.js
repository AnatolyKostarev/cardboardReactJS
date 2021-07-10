/* jshint ignore:start*/

import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div>
            <footer>
                <section id="footer">
                    <p className="footer-text">&copy; www.gofra-ural.ru {new Date().getFullYear()} , все права защищены</p>
                </section> 
            </footer>
        </div>
    )
}
/* jshint ignore:end*/