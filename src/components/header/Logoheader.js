/* jshint ignore:start*/
import React from 'react';
import '../css/header/Logoheader.css';


export default function Logoheader() {

    return (
         <section className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4 col-sm-5 col-md-4">
                        <div className="header-logo">
                            <img className="header-logo__icon" src="images/header/menyu_183.png" alt="Иконка бургер меню" />
                            <img className="header-logo__main" src="images/header/header_logo.png" alt="Логотип добрый картон" />
                            <img className="header-logo__mobile" src="images/header/header-logo-320(1).png" alt="Логотип добрый картон для мобильного" />
                        </div>
                    </div>
                    <div className="col-8 col-sm-7 col-md-8">
                        <div className="header-text">
                            <div className="header-text__phone">
                                8 (347) <span className="header-text__phone__number">271-54-28</span>
                            </div>
            
                            <div className="header-text__phone">
                                8 (937) <span className="header-text__phone__number" >363-30-00</span>
                            </div>
                        
                            <button className="header-text__button">
                                <img className="header-text__icon" src="images/header/phone_icon.png" alt="Иконка телефон" />Заказать звонок
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}
/* jshint ignore:end*/