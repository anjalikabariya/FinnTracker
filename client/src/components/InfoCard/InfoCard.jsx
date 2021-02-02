import React from 'react'
import './styles.scss';

function InfoCard({title, value}) {
    return (
        <div className="card">
            <div className="card__container">
                <p className="card__title">
                    {title}:
                </p>
                <p className="card__value">
                    {value}    
                </p>
            </div>
        </div>
    )
}

export default InfoCard
