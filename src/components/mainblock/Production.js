/* jshint ignore:start*/

import React from 'react';
import './Production.css';

export default function Production(props) {
    let {productionTitle: title, productionCard: card} = props;
    return (
        <section id="production">
            <div className="container">
                <div className="production-text">
                    <h2 className="production-text__goods">{title}</h2>
                </div>
                <div className="production-wraper">
                    {
                        Object.keys(card).map((elem, index) => (
                            <div className="production-card" key={index}>
                                <div className="production-card__img">
                                    <img src={card[elem].route} alt={card[elem].cardtitle} />
                                </div>
                                <p className="production-card__text">{card[elem].cardtitle}</p>
                                <div className="production-card__button">
                                    <button className="production-button">{card[elem].details}</button>
                                    <button className="production-button button-o">{card[elem].btnBill}</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
