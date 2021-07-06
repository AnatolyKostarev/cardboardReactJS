/* jshint ignore:start*/
import React from 'react';
import './Customers.css';

export default function Customers(props) {
    let {customersTitile: title, customersCard: card} = props;
    return (
        <section id="customers">
        <div className="container">
            <div className="customers-text">
                <h2 className="customers-text__head">{title}</h2>
            </div>
            <div className="customers-wraper">
                {
                    Object.keys(card).map((elem, index) => (
                        <div className="customers-card" key={index}>
                            <div className="customers-card__img">
                                <img src={card[elem].route} alt={card[elem].desc} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    )
}
/* jshint ignore:end*/