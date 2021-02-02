import React from 'react'
import './styles.scss';

function InfoCard({title, value}) {
    return (
        <div className="card__container">
            <div className="card__content" >
                <p className={title !== "logo" ? `card__title` : `display__none`}>
                    {title.toUpperCase()}: 
                </p>
                <p className={title !== "logo" ? `card__value` : `display__none`}>
                    {value}    
                </p>
                <div className={title === "logo" ? `card__image` : `display__none`}>
                    <img src={value} alt="company logo" />
                </div>
            </div>
        </div>
    )
}

export default InfoCard
