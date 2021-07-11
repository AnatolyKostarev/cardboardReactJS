/* jshint ignore:start*/
import React from 'react';
import Flip from 'react-reveal/Flip';
import '../css/mainblock/Products.css';

export default function Products(props) {
    let { 
            topSlider: top,
            sliderDescriptionTitle: title,
            sliderDescriptionParagraph: par } = props;
    return (
        <section id="products">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 order-2 col-md-12 order-md-2 col-lg-7 order-lg-1 col-xl-7 order-xl-1">
                        <div className="products-slider__top">
                            {
                                Object.keys(top).map((elem, index) => (
                                    <img src={top[elem].route} alt={top[elem].desc} key={index} />
                                ))
                            }    
                        </div>
                        <div className="products-slider__bottom">
                            {
                                Object.keys(top).map((elem, index) => (
                                    <div className="products-slider__item" key={index}>
                                        <img src={top[elem].route} alt={top[elem].desc} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-12 order-1 col-md-12 order-md-1 col-lg-5 order-lg-2 col-xl-5 order-xl-1">
                        <div className="products-text">
                            <Flip right>
                                <h2 className="products-text__head">{title}</h2>
                            </Flip>
                            {
                                Object.keys(par).map(elem => (
                                    <p className="products-text__description" key={par[elem].id}>{par[elem].title}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
/* jshint ignore:end*/