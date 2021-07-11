/* jshint ignore:start*/
import React from 'react';
import emailjs from 'emailjs-com';
import './Modal.css';

export default function Modal(props) {
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
        <section id="modal">
        <div className="overlay">
            <div className="popup">
                <div className="popup-title">Форма обратной связи</div>
                <div className="popup-cross">x</div>
                <div className="popup-form">
                    <p className="popup-form__title">Получите индивидуальное предложение</p>
                    <p className="popup-form__subtitle">на производство и поставку изделий</p>
                        <form id="form" 
                            className="popup-form__get" 
                            onSubmit={sendEmail}>
                            <label className="popup-form__label" htmlFor="tel">Введите ваш номер телефона:</label>
                            <input 
                                id="tel" 
                                className="popup__inputphone" 
                                type="tel"
                                autoComplete="off" 
                                placeholder="Введите номер телефона"  
                                name="user__phone" 
                                required />
                            <input 
                                className="popup__inputname" 
                                id="name" 
                                autoComplete="off" 
                                type="text" 
                                name="user__name" 
                                placeholder="Ваше Имя" 
                                required />
                            <input type="submit" className="popup__button" value="Оставить заявку!" />
                        </form>
                         <span className="popup__minorder">*Минимальный заказ 500шт</span>
                </div>
            </div>
        </div>
    </section>
    )
}
