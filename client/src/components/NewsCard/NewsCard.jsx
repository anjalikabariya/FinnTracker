import React from 'react'
import {v4 as uid} from 'uuid';
import { NewsHeaderCard } from '../index'

const NewsCard = ({data}) => {   
    return (
        <div>
            {data && data.map((item) => {
                return <NewsHeaderCard key={uid()} href={item.url} thumbnail={item.image} tags={item.category} author={item.source} date={item.datetime} title={item.headline} />
            })} 
        </div>
    )
}

export default NewsCard
