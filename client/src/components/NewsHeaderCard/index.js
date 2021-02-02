import React from 'react';
import NewsHeader from './NewsHeader';
import NewsHeaderBackground from './NewsHeaderBackground';
import './styles.scss';

function NewsHeaderCard ({href, title, author, date, thumbnail, tags}) {
    return(
      <a href={href}>
	      <div className="card card--float">
	        <NewsHeaderBackground
	         	thumbnail={thumbnail}
	        />
	        <NewsHeader
				title={title}
				author={author}
				date={date}
				tags={tags}
	        />
	      </div>
      </a> 
    );
}
export default NewsHeaderCard;
