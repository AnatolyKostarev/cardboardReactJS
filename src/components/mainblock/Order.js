/* jshint ignore:start*/
import React from 'react';
import emailjs from 'emailjs-com';
import '../css/mainblock/Order.css';

export default function Order(props) {
    let { orderCard: card, mail: m } = props;
    
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
        <section id="order">
            <div className="container">
                <div className="order-text">
                    <p className="order-text__get">{card.title}</p>
                    <p className="order-text__simple">{card.subtitle}</p>
                    <form 
                        id="form" 
                        className="order-text__form" 
                        onSubmit={sendEmail}>
                        <label 
                            className="order-text__label" 
                            htmlFor="tel1">{card.label}
                        </label>
                        <input 
                            className="order-text__inputphone" 
                            id="tel1" 
                            autoComplete="off"
                            type="tel" 
                            name="user__phone" 
                            placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" 
                            required 
                        />
                        <button 
                            type="submit" 
                            className="order-text__button">{card.btn}
                        </button>
                    </form>
                    <span className="order-text__minorder">{card.span}</span>
                </div>
            </div>
        </section>
    )
}
/* jshint ignore:end*/