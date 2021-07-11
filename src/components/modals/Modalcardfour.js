/* jshint ignore:start*/
import React from 'react';
import emailjs from 'emailjs-com';
import './Modal.css';

export default function Modalcardfour(props) {
    let {orderCard: card, mail: m} = props;
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
        <section id="modalCardboard_Four">
            <div className="modalCardboard_overlay">
                <div className="modalCardboard_Wrapper">
                    <div className="modalCardboard_header">
                        <div className="modalCardboard_title">гофорокороб 4-х клапанный</div>
                        <div className="modalCardboard_cross">x</div>
                    </div>
                    <div className="modalCardboard_main">
                        <div className="modalCardboard_pic"><img src="images/production/crimp-box_4_valve.jpg" alt="Гофрокороб 4-х клапанный" /></div>
                        <div className="modalCardboard_desc">
                            <p className="modalCardboard_message"><strong>Гофрокороб 4-х клапанный</strong> является самым распространённым и универсальным видом упаковки из гофрокартона, подходящим для хранения и транспортировки продукции. Гофрокороба такого типа бывают стандартными, без верхних клапанов, с перекрывающимися клапанами, короб в составе «крышка – дно». Короба подходят как для ручной сборки, так и для автоматических линий упаковки. При заказе данного вида коробов важно указывать основные параметры: длина (L) х ширина (В) х высота (H) внутренние размеры короба, указанные в миллиметрах.</p>
                            <p className="modalCardboard_message">При заказе данного вида коробов важно указывать основные параметры: длина (L) х ширина (В) х высота (H) внутренние размеры короба, указанные в миллиметрах.</p>
                        </div>
                    </div>
                    <div className="modalCardboard_request">
                        <div className="modalCardboard__title">
                            <p className="modalCardboard_get">{card.title}</p>
                            <p className="modalCardboard_subtitle">{card.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    )
}
/* jshint ignore:start*/