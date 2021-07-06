/* jshint ignore:start*/
import React from 'react';
import './Feedback.css';

export default function Feedback(props) {
    let {feedbackSlider: feedback, feedbackTitle: title} = props;
    return (
        <section id="feedback">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="feedback-text">
                        <h2 className="feedback-text__head">{title}</h2>
                    </div>
                    <div className="feedback-slider">
                        {
                            Object.keys(feedback).map(elem => (
                                <div className="feedback-slider_img" key={feedback[elem].id}>
                                    <img src={feedback[elem].route} alt={feedback[elem].id} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}