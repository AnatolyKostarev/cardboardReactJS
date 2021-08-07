/* jshint ignore:start*/
import React, { Component } from 'react';
import Main from '../mainblock/Main';
import Features from './Features';
import Production from './Production';
import Order from './Order';
import Products from './Products';
import Customers from './Customers';
import Feedback from './Feedback.js';
import Contacts from './Contacts';
import Modal from '../modals/Modal';
import Modalcardfour from '../modals/Modalcardfour.js';

const featuresNum = [
    { topic: '5 лет', description: 'На рынке изделий из гофрокартона' },
    { topic: 'до 5 000 000 м', description: 'Ежемесячный объем производства гофрокартона' },
    { topic: '4 000 м', description: 'Площадь склада' } 
  ];
  
  const featuresCard = [
    { 
        title: 'Производство',
        subtitle: '4 технологические линии способны выполнить любой заказ любой сложности',
        delay: '0.2s',
        pic: 'images/feartures/Plant.png'
    },
    { 
        title: 'Бесплатные образцы',
        subtitle: 'Бесплатно делаем образцы гофроупаковки - это помогает заранее увидеть упаковку',
        delay: '0.4s',
        pic: 'images/feartures/free_simples.png'
    }
  ];
  
  const featuresSlip = [
    { 
        title: 'Стабильное качество',
        subtitle: 'Собственная лаборатория кон- тролирует качество на каждом этапе производства',
        delay: '0.6s',
        pic: 'images/feartures/quality.png'
    },
    { 
        title: 'Страховой запас',
        subtitle: 'Можем хранить запас гофро- продукции на своих складах и поставлять его партиями',
        delay: '0.8s',
        pic: 'images/feartures/insure_inventory.png'
    },
    { 
        title: 'Флексопечать',
        subtitle: 'Возможно нанесение вашего логотипа, текста или манипуляционных знаков',
        delay: '1s',
        pic: 'images/feartures/flex_print.png'
    },
    { 
        title: 'Гидрофобные добавки',
        subtitle: 'На производстве реализована технология, которая позволяет гофрокартону стать прочнее',
        delay: '1.2s',
        pic: 'images/feartures/hydro_adds.png'
    }
  ];
  
  const productionTitle = 'наша Продукция';
  
  const productionCard = [
    {
        cardtitle: 'Гофрокороб 4-х клапанный',
        details: 'Подробнее',
        btnBill: 'Получить расчет',
        route: 'images/production/crimp-box_4_valve.jpg'
    },
    {
        cardtitle: 'Гофролоток',
        details: 'Подробнее',
        btnBill: 'Получить расчет',
        route: 'images/production/crimp_box.jpg'
    },
    {
        cardtitle: 'Гофрокороб самосборный (сложная высечка)',
        details: 'Подробнее',
        btnBill: 'Получить расчет',
        route: 'images/production/box_self_assembled.jpg'
    },
    {
        cardtitle: 'Листовой гофрокартон',
        details: 'Подробнее',
        btnBill: 'Получить расчет',
        route: 'images/production/box_sheet.jpg'
    }
  ];
  
  const orderCard = {
  
    title: 'Получите индивидуальное предложение',
    subtitle: 'на производство и поставку изделий',
    label: 'Введите ваш номер телефона:',
    btn: 'Оставить заявку!',
    span: '*Минимальный заказ 500шт'
  };
  
  const topSlider = [
  
    {route: 'images/products_slider/slider_main.jpg', desc: 'Гофропродукция'},
    {route: 'images/products_slider/gofro-slider-one.jpg', desc: 'Гофропродукция'},
    {route: 'images/products_slider/gofro-slider-two.jpg', desc: 'Гофропродукция'},
    {route: 'images/products_slider/gofro-slider-three.jpg', desc: 'Гофропродукция'},
    {route: 'images/products_slider/gofro-slider-four.jpg', desc: 'Гофропродукция'},
    {route: 'images/products_slider/gofro-slider-five.jpg', desc: 'Гофропродукция'}
  ];
  
  const sliderDescriptionTitle = 'Производство';
  
  const sliderDescriptionParagraph = [
    {
        title: 'Современное оборудование позволяет производить до 5 миллионов квадратных метров гофрокартона ежемесячно. Гофрокороба и лотки производятся по ГОСТу или чертежам заказчика.',
        id: 1
    },
    {
        title: 'Досконально прорабатываем конструкции коробов и составы сырья, учитывая условия хранения, транспортировки и производства вашей продукции',
        id: 2
    },
    {
        title: 'Возможно нанесение цветной флексопечати на поверхность коробов.',
        id: 3
    }
  ];
  
  const customersTitile = 'Наши клиенты';
  const customersCard = [
  
    { route: 'images/customers/rise_icon_1.png', desc: 'Восход'},
    { route: 'images/customers/sterh_icon_2.png', desc: 'Стерх'},
    { route: 'images/customers/silversnow_icon_3.png', desc: 'Серебряный снег'},
    { route: 'images/customers/avdon_icon_4.png', desc: 'Авдон'},
    { route: 'images/customers/chicken_icon_5.png', desc: 'Турбаслинские бройлеры'},
    { route: 'images/customers/bash_icecream_icon_6.png', desc: 'Башкирское мороженое'},
    { route: 'images/customers/allat_icon_7.png', desc: 'Аллат'},
    { route: 'images/customers/alternative_icon_8.png', desc: 'Альтернатива'},
    { route: 'images/customers/pavos_icon_9.png', desc: 'Индюшкин'},
    { route: 'images/customers/salavatglass_icon_10.png', desc: 'Салаватстекло'},
    { route: 'images/customers/milk_farmer_11.png', desc: 'Молочный фермер'},
    { route: 'images/customers/megi_icon_12.png', desc: 'Меги'}
  ];
  
  const feedbackTitle = 'Отзывы о сотрудничестве';
  const feedbackSlider = [
  
    {route: 'images/feedback/feedback-img1.png', id: 1},
    {route: 'images/feedback/feedback-img2.png', id: 2},
    {route: 'images/feedback/feedback-img3.png', id: 3},
    {route: 'images/feedback/feedback-img1.png', id: 4},
    {route: 'images/feedback/feedback-img2.png', id: 5},
    {route: 'images/feedback/feedback-img3.png', id: 6}
  ];

  const mailEnter = {
      service: 'service_ekqmigd',
      template: 'template_nnwgurb',
      user: 'user_pBA6wdTbaWOwTzojch5L0'
  };
   
export default class Mainblock extends Component {
    render() {
        return (
            <main>
                <Main mail={mailEnter}/>
                <Features 
                    featuresNum={featuresNum} 
                    featuresCard={featuresCard}
                    featuresSlip={featuresSlip}
                />
                <Production
                    productionTitle={productionTitle}
                    productionCard={productionCard}
                />
                <Order 
                    orderCard={orderCard}
                    mail={mailEnter}
                
                />
                <Products
                    topSlider={topSlider}
                    sliderDescriptionTitle={sliderDescriptionTitle}
                    sliderDescriptionParagraph={sliderDescriptionParagraph}
                />
                <Customers
                    customersTitile={customersTitile}
                    customersCard={customersCard}
                />
                <Feedback 
                    feedbackSlider={feedbackSlider}
                    feedbackTitle={feedbackTitle}
                />
                <Modal mail={mailEnter}/>
                {/* <Modalcardfour  
                    orderCard={orderCard} 
                    mail={mailEnter} 
                /> */}
                <Contacts />
            </main>
        )
    }
}
/* jshint ignore:end*/