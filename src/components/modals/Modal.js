/* jshint ignore:start*/
import React from 'react';
import './Modal.css';

export default function Modal() {
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
                              action="./mailer/smart.php" 
                              method="POST">
                            <label className="popup-form__label" htmlFor="tel">Введите ваш номер телефона:</label>
                            <input 
                                className="popup__inputphone" 
                                id="tel" 
                                autoComplete="off" 
                                type="tel" 
                                name="user__phone" 
                                placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" 
                                required />
                            <button type="submit" className="popup__button">Оставить заявку!</button>
                        </form>
                         <span className="popup__minorder">*Минимальный заказ 500шт</span>
                </div>
            </div>
        </div>
    </section>
    )
}
