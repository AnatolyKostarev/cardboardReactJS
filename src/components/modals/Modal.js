/* jshint ignore:start*/
import React, {useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import './Modal.css';

export default function Modal(props) {

    const formik = useFormik({
        
    })

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneError, setPhoneError] = useState('*Обязательно для заполнения');
    const [nameError, setNameError] = useState('*Обязательно для заполнения');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(phoneError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [phoneError, nameError])

    const phoneHandler =(e) => {
        setPhone(e.target.value)
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if(e.target.value.length > 12) {
            setPhoneError('*Неверный номер телефона. Не более 12-ти числовых символов')
            if(!regex.test(phone)) {
                setPhoneError('*Неверный номер телефона')
            } else {
                setPhoneError('')
            }
        }
    }

    const nameHandler =(e) => {
        setName(e.target.value)
        let regex = /^[А-ЯЁ]{3,20}/;
        if(e.target.value.length < 3 || e.target.value.length > 20) {
            setNameError('*Имя не может содержать  менее 3-х и более 20-ти символов')
            if(!regex.test(name)) {
                setNameError('Введите имя на кириллице!')
                if(!e.target.value) {
                    setNameError('*Обязательно для заполнения')  
                }
            }
        } else {
            setNameError('')
        }
    }

    const blurHandler = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case 'user__phone':
                setPhoneDirty(true);
                break;
            case 'user__name':
                setNameDirty(true);
                break;
        }
    }

    let {mail: m} = props;
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(m.service, m.template, e.target, m.user)
          .then((result) => {
              alert('Благодарим за проявленный интерес! Ваша заявка принята! ' + result.text);
          }, (error) => {
              alert('Произошла ошибка! Попробутей подать заявку позже!' + error.text);
          });
          setPhone('');
          setName('');
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
                            {(phoneDirty && phoneError) && <div style={{color: "#fff", fontFamily: "Roboto", fontSize: "14px"}}>{phoneError}</div>}
                            <input
                                onBlur={e => blurHandler(e)} 
                                onChange={e => phoneHandler(e)}
                                id="tel" 
                                className="popup__inputphone" 
                                type="tel"
                                name="user__phone" 
                                value={phone}
                                autoComplete="off" 
                                placeholder="+7(___) ___ __ __" 
                                pattern="((8|\+7)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}"
                                required />
                            {(nameDirty && nameError) && <div style={{color: "#fff", fontFamily: "Roboto", fontSize: "14px"}}>{nameError}</div>}
                            <input 
                                onBlur={e => blurHandler(e)}
                                onChange={e => nameHandler(e)}
                                id="name" 
                                className="popup__inputname" 
                                type="text" 
                                name="user__name" 
                                value={name}
                                autoComplete="off" 
                                placeholder="Ваше Имя" 
                                required />
                            <input disabled={!formValid} type="submit" className="popup__button" value="Оставить заявку!"/>
                        </form>
                         <span className="popup__minorder">*Минимальный заказ 500шт</span>
                </div>
            </div>
        </div>
    </section>
    )
}
