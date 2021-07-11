/* jshint ignore:start*/

import React from 'react';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';
import '../css/mainblock/Main.css';

export default function Main(props) {
    let {mail: m} = props;
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(m.service, m.template, e.target, m.user)
          .then((result) => {
              alert('Благодарим за проявленный интерес! Ваша заявка принята! ' + result.text);
          }, (error) => {
              alert('Произошла ошибка! Попробутей подать заявку позже!' + error.text);
          });

          e.target.reset();
      }

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
                            <form 
                                id="form" 
                                className="main-text__form" 
                                onSubmit={sendEmail}>
                                <input 
                                    className="main-text__inputphone" 
                                    autoComplete="off"
                                    placeholder="Введите номер телефона" type="tel"
                                    size="23" 
                                    name="user__phone" 
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