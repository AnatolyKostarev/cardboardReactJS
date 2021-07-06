/* jshint ignore:start*/

import React from 'react';
import Fade from 'react-reveal/Fade';
import './Main.css';

export default function Main() {
    return (
        <section id="main">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                        <Fade left duration={1500}>
                            <div className="main-img hidden-mobile ">
                                <img className="main-boxes__img" src="images/main/main-boxes-img.png" alt="Картонные коробки" />
                            </div>
                        </Fade>
                    </div>
               
                    <div className="col-12 col-md-12 col-lg-7">
                        <Fade right duration={1500}>
                            <h1 className="main-text__title">Производство упаковки из <br/>гофрокартона</h1>
                            <p className="main-text__subtitle">с доставкой по всей России</p>
                        </Fade>
                        <div className="main-text">
                            <h3 className="main-text__get">Получите индивидуальное предложение<br/> на производство и поставку гофропродукции</h3>
                            <p className="main-text__simple">образцы и упаковка бесплатно!</p>
                            <form id="form" className="main-text__form" action="mailer/smart.php" method="POST">
                                <input 
                                    name="user__phone" className="main-text__inputphone" autoComplete="off"
                                    size="23" 
                                    placeholder="Введите номер телефона" type="tel" 
                                    required />
                                <button 
                                    type="submit"
                                    className="main-text__button">
                                    Оставить заявку!
                                </button>
                            </form>
                            <span className="main-text__minorder">*Минимальный заказ 500шт</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
/* jshint ignore:end*/