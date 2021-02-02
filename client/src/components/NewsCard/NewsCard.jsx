import React from 'react'
import {v4 as uid} from 'uuid';
import { NewsHeaderCard } from '../index'
import './styles.scss';

const NewsCard = ({data}) => {   
    return (
        <div className="news__wrapper">
            {data && data.map((item) => {
                return <NewsHeaderCard key={uid()} href={item.url} thumbnail={item.image} tags={item.category} author={item.source} title={item.headline} />
            })} 
        </div>
    )
}

export default NewsCard
