/* jshint ignore:start*/

import React from 'react';
import '../css/mainblock/Features.css';

export default function Features(props) {
    let { featuresNum: f, featuresCard: card, featuresSlip: slip } = props;
    return (
        <section id="features">
            <div className="container">
                <div className="features-numbers">
                    {
                        Object.keys(f).map((elem, index) => (
                            <div className="features-numbers__block " key={index}>
                                <h2 className="features-number__topic">{f[elem].topic}</h2>
                                <p className="features-number__description">{f[elem].description}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="features-cards">
                    {
                        Object.keys(card).map((elem, index) => (
                        
                                <div className="features-card__slip animate__animated animate__fadeInDown animate__delay" key={index}>
                                    <div className="features-img__left">
                                        <img src={card[elem].pic} alt={card[elem].title} />
                                    </div>
                                    <h4 className="features-item" >{card[elem].title}</h4>
                                    <p className="features-text" >{card[elem].subtitle}</p> 
                                </div>
                        
                        ))
                    }
                    {
                        Object.keys(slip).map((elem, index) => (
                            // <Fade top delay ={slip[elem].delay} key={index}>
                                <div className="features-card__slip card__slip animate__animated animate__fadeInDown" data-wow-delay="2s" key={index}>
                                    <div className="features-img__left">
                                        <img src={slip[elem].pic} alt={slip[elem].title} />
                                    </div>
                                    <h4 className="features-item" >{slip[elem].title}</h4>
                                    <p className="features-text" >{slip[elem].subtitle}</p> 
                                </div>
                            // </Fade>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
/* jshint ignore:end*/