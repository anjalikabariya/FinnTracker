import React from 'react';
import './styles.scss';

function NewsHeader({title, author, date, tags}) {
    return(
      <div className='news-header'>
	      
	      <div className='title'>
	        {title}
	      </div>

	      <div className='bottom'>
	        <div className='author'>
	          {author}
	        </div>

	        <div className='date'>
	          {date}
	        </div>
        </div>
	      <div className='tags'>
          {tags}
        </div>
	      
      </div>
    );
}

export default NewsHeader;
