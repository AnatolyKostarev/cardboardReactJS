/* jshint ignore:start*/
import React from 'react';
import './Contacts.css';

export default function Contacts(props) {
    return (
        <section id="contacts">
        <div className="contacts-item">
            <h2 className="contacts-title">контакты</h2>
            <div class="contacts-item__adress">
                <span className="contacts-item__title">Адрес офиса</span>
                <br/>
                <span className="contacts-item__subtitle">г. Уфа, Проспект Октября, 46</span>
                <br/>
                <span className="contacts-item__title">Адрес склада</span>
                <br/>
                <span className="contacts-item__subtitle">г. Уфа, ул. Майкопская, 65/2</span>
            </div>
            <div className="contacts-item__phone">
                <span className="contacts-item__title">Тел. отдела продаж:</span>
                <br/>
                <a href="tel:8(347)2715428"><span className="contacts-item__subtitle">8 (347) 271-54-28</span></a>
                <br/>
                <a href="tel:8(937)3633000"><span className="contacts-item__subtitle">8 (937) 363-30-00</span></a>
            </div>
            <div className="contacts-item__button">
                <button type="submit" class="contacts-button">Заказать звонок</button>
            </div>
            <div className="contacts-item__mail">
                <span className="contacts-item__title">Е-mail</span>
                <br/>
                <a href="mailto:urals.karton@gmail.com"><span className="contacts-item__subtitle">urals.karton@gmail.com</span></a>
            </div>
        </div>
        <div class="contacts-map">
            
            <iframe title="1" src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c5d7ae69cb72d617559afd6072c7289794de00742c8d892124935a71afa173c&amp;source=constructor" width="100%" height="100%" frameBorder="0" scrolling="no"></iframe>
  

</div>
    </section>
    )
}
/* jshint ignore:end*/