/* jshint ignore:start*/

import React from 'react';
import Fade from 'react-reveal/Fade';
import '../css/mainblock/Features.css';

export default function Features(props) {
    let { featuresNum: f, featuresCard: card, featuresSlip: slip } = props;
    return (
        <section id="features">
            <div className="container">
                <div className="features-numbers">
                    {
                        Object.keys(f).map((elem, index) => (
                            <div className="features-numbers__block" key={index}>
                                <h2 className="features-number__topic">{f[elem].topic}</h2>
                                <p className="features-number__description">{f[elem].description}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="features-cards">
                    {
                        Object.keys(card).map((elem, index) => (
                            <Fade top delay={card[elem].delay} key={index}>
                                <div className="features-card__slip" key={index}>
                                    <div className="features-img__left">
                                        <img src={card[elem].pic} alt={card[elem].title} />
                                    </div>
                                    <h4 className="features-item" >{card[elem].title}</h4>
                                    <p className="features-text" >{card[elem].subtitle}</p> 
                                </div>
                            </Fade>
                        ))
                    }
                    {
                        Object.keys(slip).map((elem, index) => (
                            <Fade top delay ={slip[elem].delay} key={index}>
                                <div className="features-card__slip card__slip" key={index}>
                                    <div className="features-img__left">
                                        <img src={slip[elem].pic} alt={slip[elem].title} />
                                    </div>
                                    <h4 className="features-item" >{slip[elem].title}</h4>
                                    <p className="features-text" >{slip[elem].subtitle}</p> 
                                </div>
                            </Fade>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
/* jshint ignore:end*/